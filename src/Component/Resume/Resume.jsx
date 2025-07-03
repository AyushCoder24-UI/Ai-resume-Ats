import React, { useState, useEffect } from 'react';

const Resume = () => {
    const [resumeText, setResumeText] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const pdfScript = document.createElement('script');
        pdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
        pdfScript.onload = () => {
            if (window.pdfjsLib) {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
            }
        };
        document.body.appendChild(pdfScript);

        return () => { document.body.removeChild(pdfScript); };
    }, []);

    const handlePdfUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || file.type !== 'application/pdf') {
            setError('Please upload a PDF file.');
            return;
        }

        setIsLoading(true);
        setResumeText('');
        setAnalysisResult(null);
        setShowModal(false);
        setError('');

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const pdf = await window.pdfjsLib.getDocument(new Uint8Array(e.target.result)).promise;
                let text = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    text += textContent.items.map(item => item.str).join(' ') + '\n';
                }
                setResumeText(text);
            } catch (err) {
                console.error("PDF read error:", err);
                setError('Failed to read PDF. Is it a valid file?');
            } finally {
                setIsLoading(false);
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const runAnalysis = async () => {
        setIsLoading(true);
        setAnalysisResult(null);
        setShowModal(false);
        setError('');

        if (!resumeText) {
            setError('Please upload a PDF resume first.');
            setIsLoading(false);
            return;
        }

        try {
            const prompt = `Analyze this resume and provide ATS compatibility analysis.
                Output JSON: {"atsCompatibilityScore": "string %", "categoryScores": {"Format & Layout": number/10, "Contact Info": number/10, ...}, "strengths": ["string"], "improvements": ["string"]}.
                Resume: ${resumeText}`;

            const payload = {
                contents: [{ role: "user", parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "OBJECT",
                        properties: {
                            "atsCompatibilityScore": { "type": "STRING" },
                            "categoryScores": { "type": "OBJECT", "properties": { "Format & Layout": { "type": "NUMBER" }, "Contact Info": { "type": "NUMBER" }, "Work Experience": { "type": "NUMBER" }, "Skills": { "type": "NUMBER" }, "Education": { "type": "NUMBER" }, "Professional Summary": { "type": "NUMBER" }}},
                            "strengths": { "type": "ARRAY", "items": { "type": "STRING" } },
                            "improvements": { "type": "ARRAY", "items": { "type": "STRING" } }
                        },
                        required: ["atsCompatibilityScore", "categoryScores", "strengths", "improvements"]
                    },
                    temperature: 0.7, topP: 0.95, topK: 40,
                },
            };

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAsfNFJ2TOW36Ki3Aku3gHRhvPlO04prwY`; // Replace with your actual API key
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (jsonText) {
                setAnalysisResult(JSON.parse(jsonText));
                setShowModal(true);
            } else {
                setError('AI did not provide a valid analysis. Try again.');
            }
        } catch (err) {
            console.error("AI analysis error:", err);
            setError(`Analysis failed: ${err.message}.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="resume-section">
            <div className="card_hero resume-card">
                <input
                    type="file"
                    id="pdfUpload"
                    accept=".pdf"
                    onChange={handlePdfUpload}
                    className="file-input"
                    disabled={isLoading}
                />
                {isLoading && !resumeText && (
                    <div className="loading-message">
                        <svg className="loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Reading PDF...
                    </div>
                )}
                {error && <p className="error-message"><strong>Error:</strong> {error}</p>}
            </div>

            <div className="action-button-container">
                <button
                    onClick={runAnalysis}
                    className="action-button"
                    disabled={isLoading || !resumeText}
                >
                    {isLoading && resumeText ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg className="loading-spinner" style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Analyzing...
                        </span>
                    ) : (
                        'Analyze Resume'
                    )}
                </button>
            </div>


            {showModal && analysisResult && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close-button" onClick={() => setShowModal(false)}>&times;</button>
                        <h2 className="result-title">Analysis Result</h2>
                        <div className="result-text-content">
                            <p style={{ marginBottom: '8px' }}><strong className="score-label">ATS Compatibility Score:</strong> {analysisResult.atsCompatibilityScore}</p>
                            <h3 className="category-title">Category Scores:</h3>
                            <ul className="result-list" style={{ marginBottom: '16px' }}>
                                {Object.entries(analysisResult.categoryScores || {}).map(([category, score]) => (
                                    <li key={category}>
                                        <strong style={{ fontWeight: '500' }}>{category}:</strong> {score}/10
                                    </li>
                                ))}
                            </ul>
                            <h3 className="strength-title">Strengths:</h3>
                            <ul className="result-list" style={{ marginBottom: '16px' }}>
                                {(analysisResult.strengths || []).map((strength, index) => (
                                    <li key={index}>{strength}</li>
                                ))}
                            </ul>
                            <h3 className="improvement-title">Improvements:</h3>
                            <ul className="result-list">
                                {(analysisResult.improvements || []).map((improvement, index) => (
                                    <li key={index}>{improvement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume;