import {nanoid} from 'nanoid';
import URL from '../models/schema.js';
export async function handleGenerateNewShortURL(req, res) {
    const {url} = req.body;
    if(!url)return res.status(400).json({error: 'url is required'});
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL: url,
        visitHistory: [],
    });

    return res.json({id: shortId});
}

export async function handleGetShortId(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push: {
        visitHistory: {
            timestamp: Date.now()
        }},
    });
    res.redirect(entry.redirectURL);
}

export async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
} 