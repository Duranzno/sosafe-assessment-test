export interface SosafeData {
    name: string
    filters: string[]
    scores: number[]
    location: object
}
export const pusherConfig = {
    appId: '1063660',
    key: '605ff04b821c4a21d109',
    secret: '574d241f013461101120',
    cluster: 'us2',
    channel: 'sosafe-data-channel',
    event: 'sosafe-data-event',
};