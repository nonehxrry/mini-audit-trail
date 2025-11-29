const diffWords = (oldText, newText) => {
    const oldWords = oldText.split(/\s+/).filter(w => w.length > 0);
    const newWords = newText.split(/\s+/).filter(w => w.length > 0);
    const addedWords = newWords.filter(word => !oldWords.includes(word));
    const removedWords = oldWords.filter(word => !newWords.includes(word));

    const diffSummary = {
        addedWords: addedWords,
        removedWords: removedWords,
        oldLength: oldWords.length,
        newLength: newWords.length
    };

    return diffSummary;
};

export default diffWords;
