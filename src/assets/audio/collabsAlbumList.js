import { v4 as uuidv4 } from 'uuid';

const URL = 'http://wdp.lt:8080/audio/collabs/';

const collabsAlbumList = {
    collabs: [
        {
            id: uuidv4(),
            title: 'Firefly - Bring Me Back To Life.mp3',
            track: URL + 'Firefly_-_Bring_Me_Back_To_Life.mp3'
        },
        {
            id: uuidv4(),
            title: 'Firefly - Nobody.mp3',
            track: URL + 'Firefly_-_Nobody.mp3'
        },
        {
            id: uuidv4(),
            title: 'Gile - Nepamirsk',
            track: URL + 'Gile - Nepamirsk.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga X Taddtheartist - All I Know',
            track: URL + 'Papuga X Taddtheartist - All I Know.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga X Taddtheartist - Did you know',
            track: URL + 'Papuga X Taddtheartist - Did you know.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga X Taddtheartist - Faith',
            track: URL + 'Papuga X Taddtheartist - Faith.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga X Taddtheartist - Night Alone',
            track: URL + 'Papuga X Taddtheartist - Night Alone.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Justify - Real',
            track: URL + 'Papuga x Justify - Real.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga x Qyan - Life Boat',
            track: URL + 'Papuga x Qyan - Life Boat.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga X Taddtheartist - I Don't Wanna Let You Go`,
            track: URL + 'Papuga X Taddtheartist - I Dont Wanna Let You Go.mp3'
        },
        {
            id: uuidv4(),
            title: `Papuga X Taddtheartist - I'll Make You Love Me`,
            track: URL + 'Papuga X Taddtheartist - Ill Make You Love Me.mp3'
        },
        {
            id: uuidv4(),
            title: 'Papuga X Taddtheartist - Magic Plant',
            track: URL + 'Papuga X Taddtheartist - Magic Plant.mp3'
        }
    ]

}
export default collabsAlbumList;


