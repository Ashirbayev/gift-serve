import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { campaigns, Campaign } from './data';

const app = express();
const PORT = 5000;


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let nextId = campaigns.length + 1;

app.get('/api/campaigns', (req, res) => {
    res.json(campaigns);
});

app.post('/api/campaigns', (req, res) => {
    const newCampaign: Campaign = { ...req.body, id: nextId++ };
    campaigns.push(newCampaign);
    res.json(newCampaign);
});

app.put('/api/campaigns/:id', (req, res) => {
    const { id } = req.params;
    const index = campaigns.findIndex(campaign => campaign.id === parseInt(id));
    if (index >= 0) {
        campaigns[index] = { ...campaigns[index], ...req.body };
        res.json(campaigns[index]);
    } else {
        res.status(404).send('Campaign not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
