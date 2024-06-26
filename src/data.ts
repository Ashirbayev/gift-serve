export interface Campaign {
    id: number;
    name: string;
    date: string;
    sentGifts: number;
}

export const campaigns: Campaign[] = [
    { id: 1, name: 'Campaign 1', date: '2024-01-01', sentGifts: 10 },
    { id: 2, name: 'Campaign 2', date: '2024-02-01', sentGifts: 20 },
];
