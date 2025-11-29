import React, { useState, useEffect } from 'react';
import ContentEditor from '../components/ContentEditor';
import VersionHistory from '../components/VersionHistory';

export default function Home() {
    const [history, setHistory] = useState([]);

    // Fetch initial history on component mount
    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch('/api/versions');
            if (response.ok) {
                const initialHistory = await response.json();
                setHistory(initialHistory);
            }
        };
        fetchHistory();
    }, []);

    // Handler to update the history state from the ContentEditor
    const handleHistoryUpdate = (newHistory) => {
        setHistory(newHistory);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Mini Audit Trail Generator</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <ContentEditor onSave={handleHistoryUpdate} />
                <VersionHistory history={history} />
            </div>
            <style jsx global>{`
                body {
                    font-family: Arial, sans-serif;
                }
                button {
                    padding: 10px 20px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 10px;
                }
                button:hover {
                    background-color: #005bb5;
                }
                h3 {
                    border-bottom: 2px solid #eee;
                    padding-bottom: 5px;
                }
            `}</style>
        </div>
    );
}
