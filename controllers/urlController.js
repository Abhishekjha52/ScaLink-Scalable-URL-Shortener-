import {nanoid} from 'nanoid';
import URL from '../models/schema.js';
export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.URL)return res.status(400).json({error: 'url is required'});
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL: body.URL,
        visitHistory: [],
    });

    return res.json({id: shortId});
}