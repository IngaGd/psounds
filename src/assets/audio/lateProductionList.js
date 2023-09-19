import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env.REACT_APP_API_URL;
const URL = BASE_URL + 'audio/lateProduction/';

const lateProductionList = {
    lateProduction: [
        {
            id: uuidv4(),
            title: 'Garsas Naktyje - Papuga remix',
            track: URL + 'Garsas Naktyje - Papuga remix.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Another Galaxy',
            track: URL + 'Papuga - Another Galaxy.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Flowing Pt.1',
            track: URL + 'Papuga - Flowing Pt.1.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Hi-Er',
            track: URL + 'Papuga - Hi-Er.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Killa Ting',
            track: URL + 'Papuga - Killa Ting.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - MLD',
            track: URL + 'Papuga - MLD.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga - Put Me Down Low (feat. De Lorán)`,
            track: URL + 'Papuga - Put Me Down Low (feat. De Lorán).mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Thinking The Same',
            track: URL + 'Papuga - Thinking The Same.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - You Loose',
            track: URL + 'Papuga - You Loose.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga x Auguste- Noriu Tave Paliest`,
            track: URL + 'Papuga x Auguste- Noriu Tave Paliest.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Iveta - City Lights',
            track: URL + 'Papuga x Iveta - City Lights.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Iveta - Say It Right',
            track: URL + 'Papuga x Iveta - Say It Right.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Iveta - The one Master',
            track: URL + 'Papuga x Iveta - The one Master.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga x Justify - I've Got This`,
            track: URL + 'Papuga x Justify - I have Got This.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Justify - Tavo Norai',
            track: URL + 'Papuga x Justify - Tavo Norai.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Odi- Jauciu Ji Mano',
            track: URL + 'Papuga x Odi- Jauciu Ji Mano.mp3'
        },
        {
            id: uuidv4(),
            title: 'Pete Roche - Change',
            track: URL + 'Pete Roche - Change.mp3'
        },
        {
            id: uuidv4(),
            title: 'Pete Roche - Dust',
            track: URL + 'Pete Roche - Dust.mp3'
        },
        {
            id: uuidv4(),
            title: 'Red Milk - Big Action',
            track: URL + 'Red Milk - Big Action.mp3'
        },
        {
            id: uuidv4(),
            title: 'Red Milk - Pieces',
            track: URL + 'Red Milk - Pieces.mp3'
        },
        {
            id: uuidv4(),
            title: 'Red Milk - SeeMe ft Michele Wylen',
            track: URL + 'Red Milk - SeeMe ft Michele Wylen.mp3'
        },
        {
            id: uuidv4(),
            title: 'Red Milk - Whats That Word',
            track: URL + 'Red Milk - Whats That Word.mp3'
        },
        {
            id: uuidv4(),
            title: 'Red Milk x NS - Perv',
            track: URL + 'Red Milk x NS - Perv.mp3'
        },
        {
            id: uuidv4(),
            title: `Red Milk x Tasty Treat - It's You`,
            track: URL + 'Red Milk x Tasty Treat - Its You.mp3'
        },
        {
            id: uuidv4(),
            title: `Riva - Lose My Mind (Red Milk Remix)`,
            track: URL + 'Riva - Lose My Mind (Red Milk Remix).mp3'
        },
        {
            id: uuidv4(),
            title: `The Sneekers - All You Need Is Lovin (Red Milk Remix)`,
            track: URL + 'The Sneekers - All You Need Is Lovin (Red Milk Remix).mp3'
        }
    ]
}

export default lateProductionList;
