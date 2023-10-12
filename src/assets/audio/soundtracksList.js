import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env.REACT_APP_API_URL;
const URL = BASE_URL + 'audio/soundtracks/';

const soundtracksList = {
    soundtracks: [
        {
            id: uuidv4(),
            title: 'Blue Whale Movie - Share this moment',
            track: URL + 'Blue Whale Movie - Share this moment.mp3'
        },
        {
            id: uuidv4(),
            title: 'Cinema 1',
            track: URL + 'Cinema 1.mp3'
        },
        {
            id: uuidv4(),
            title: 'Cinema 2',
            track: URL + 'Cinema 2.mp3'
        },
        {
            id: uuidv4(),
            title: 'Sound Experience',
            track: URL + 'Sound Experience.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 1',
            track: URL + 'Video Game 1.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 2',
            track: URL + 'Video Game 2.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 3',
            track: URL + 'Video Game 3.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 4',
            track: URL + 'Video Game 4.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 5',
            track: URL + 'Video Game 5.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 7',
            track: URL + 'Video Game 7.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 8',
            track: URL + 'Video Game 8.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 9',
            track: URL + 'Video Game 9.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 10',
            track: URL + 'Video Game 10.mp3'
        },
        {
            id: uuidv4(),
            title: 'Video Game 11',
            track: URL + 'Video Game 11.mp3'
        }
    ]
}
export default soundtracksList;
