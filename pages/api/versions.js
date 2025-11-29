const versionHistory = []; 
let currentContent = "";
let currentId = 0; 
export { versionHistory, currentContent, currentId };
export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    res.status(200).json(versionHistory);
}
