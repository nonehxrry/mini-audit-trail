import React, { useState } from 'react';

const ContentEditor = ({ onSave }) => {
    const [content, setContent] = useState('');

    const handleSave = async () => {
        const response = await fetch('/api/save-version', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });

        if (response.ok) {
            const newHistory = await response.json();
            onSave(newHistory);
        } else {
            const data = await response.json();
            alert(data.message || 'Error saving version');
        }
    };

    return (
        <div className="content-editor">
            <h3>Content Editor</h3>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start typing your text here..."
                rows="10"
                style={{ width: '100%', padding: '10px' }}
            />
            <button onClick={handleSave}>
                Save Version
            </button>
        </div>
    );
};

export default ContentEditor;
