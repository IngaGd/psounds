import { v4 as uuidv4 } from 'uuid';

const URL = 'http://localhost:3003/audio/earlyProduction/';

const earlyProductionList = {
    earlyProduction: [
        {
            id: uuidv4(),
            title: 'Agama - Akys Nematys (M-Theory remix)',
            track: URL + 'Agama_-_Akys_Nematys_(M-Theory remix).mp3'
        },
        {
            id: uuidv4(),
            title: 'Lucki Low Feat. Justify - Believed',
            track: URL + 'Lucki_Low_Feat._Justify_-_Believed.mp3'
        },
        {
            id: uuidv4(),
            title: 'M-Theory feat. Justify-Treat Me',
            track: URL + 'M-Theory _feat._Justify-Treat_Me.mp3'
        },
        {
            id: uuidv4(),
            title: 'M-Theory - Pound Boost',
            track: URL + 'M-Theory_-_Pound_Boost.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Jungle',
            track: URL + 'Papuga_-_Jungle.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Kelionė',
            track: URL + 'Papuga_-_kelione.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga - Need Sugar`,
            track: URL + 'Papuga_-_Need Sugar.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga - Never Let U Go',
            track: URL + 'Papuga_-_Never_Let_U_Go.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga&Justify - A Step Closer',
            track: URL + 'Papuga&Justify_-_A_Step_Closer.mp3'
        },
        {
            id: uuidv4(),
            title: `Wet paper - comes love`,
            track: URL + 'Wet_paper_-_comes_love.mp3'
        },
        {
            id: uuidv4(),
            title: 'Wet paper - people could be',
            track: URL + 'Wet_paper_-_people_could_be.mp3'
        },
        {
            id: uuidv4(),
            title: 'Wet paper - play',
            track: URL + 'Wet_paper_-_play.mp3'
        }
    ]

}
export default earlyProductionList;
