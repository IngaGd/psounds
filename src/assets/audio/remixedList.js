import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env.REACT_APP_API_URL;
const URL = BASE_URL + 'audio/remixes/';

const remixedList = {
    remixed: [
        {
            id: uuidv4(),
            title: 'Pete Roche x Žalvarinis',
            track: URL + '1. Pete Roche x Zalvarinis.mp3'
        },
        {
            id: uuidv4(),
            title: 'Afrodelic - ITara Fan Fan (Pete Roche remix)',
            track: URL + 'Afrodelic - ITara Fan Fan (Pete Roche remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Pete Roche x GinGas',
            track: URL + '3. Pete Roche x GinGas.mp3'
        },
        {
            id: uuidv4(),
            title: 'Auguste - Kad Kunas Nepamirstu (Papuga remix)',
            track: URL + 'Auguste - Kad Kunas Nepamirstu (Papuga remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Cherry Monday - Pažiurėk Į Mane (Papuga Remix)',
            track: URL + 'Cherry Monday - Paziurek I Mane (Papuga Remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Garsas Naktyje - Papuga remix',
            track: URL + 'Garsas Naktyje - Papuga remix.mp3'
        },
        {
            id: uuidv4(),
            title: 'Jovani x Jazzu x Papuga - Keep it To Myself',
            track: URL + 'Jovani x Jazzu x Papuga - Keep it To Myself.mp3'
        },
        {
            id: uuidv4(),
            title: 'Justin Cholewski - Analog Dream (Pete Roche Remix)',
            track: URL + 'Justin Cholewski - Analog Dream (Pete Roche Remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Lucki Low - Treat Me (papuga remix)',
            track: URL + 'Lucki Low - Treat Me (papuga remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Spaceman',
            track: URL + 'Papuga - Spaceman.mp3'
        },
        {
            id: uuidv4(),
            title: 'Pete Roche x Angelou - Skrendi',
            track: URL + 'Pete Roche x Angelou - Skrendi.mp3'
        },
        {
            id: uuidv4(),
            title: 'The Sneekers - Muzikos (Papuga remix)',
            track: URL + 'The Sneekers - Muzikos (Papuga remix).mp3'
        }
    ]
}
export default remixedList;
