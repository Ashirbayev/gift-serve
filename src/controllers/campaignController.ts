import { Request, Response } from 'express';
import db from '../db';

export const getCampaigns = (req: Request, res: Response) => {
    db.query('SELECT * FROM campaigns', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

export const createCampaign = (req: Request, res: Response) => {
    const { name, date, sentGifts } = req.body;
    db.query('INSERT INTO campaigns (name, date, sentGifts) VALUES (?, ?, ?)', [name, date, sentGifts], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, name, date, sentGifts });
        }
    });
};

export const updateCampaign = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, date, sentGifts } = req.body;
    db.query('UPDATE campaigns SET name = ?, date = ?, sentGifts = ? WHERE id = ?', [name, date, sentGifts, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Campaign updated' });
        }
    });
};

export const deleteCampaign = (req: Request, res: Response) => {
    console.log(444)
    const { id } = req.params;
    db.query('DELETE FROM campaigns WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Campaign deleted' });
        }
    });
};
