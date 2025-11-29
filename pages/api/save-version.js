import { versionHistory, currentContent } from './versions';
import diffWords from '../../utils/diffWords';
import { v4 as uuidv4 } from 'uuid';
export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const newContent = req.body.content || "";

    if (newContent === currentContent) {
        return res.status(200).json({ message: "No change detected, not saving." });
    }

    const diffSummary = diffWords(currentContent, newContent);
    currentContent = newContent;
    const newVersion = {
        id: uuidv4(),
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        ...diffSummary
    };

    versionHistory.push(newVersion);

    res.status(201).json(versionHistory);
}
