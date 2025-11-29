import React from 'react';

const VersionHistory = ({ history }) => {
    return (
        <div className="version-history">
            <h3>Version History ({history.length} total)</h3>
            <div style={{ maxHeight: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                {history.slice().reverse().map((version) => (
                    <div key={version.id} style={{ borderBottom: '1px solid #eee', marginBottom: '15px', paddingBottom: '10px' }}>
                        <p><strong>ID:</strong> {version.id.substring(0, 8)}...</p>
                        <p><strong>Timestamp:</strong> {version.timestamp}</p>
                        <p><strong>Word Count Change:</strong> {version.oldLength} $\rightarrow$ {version.newLength}</p>
                        {version.addedWords.length > 0 && (
                            <p style={{ color: 'green' }}>
                                <strong>Added Words:</strong> {version.addedWords.join(', ')}
                            </p>
                        )}
                        {version.removedWords.length > 0 && (
                            <p style={{ color: 'red' }}>
                                <strong>Removed Words:</strong> {version.removedWords.join(', ')}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VersionHistory;
