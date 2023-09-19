import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env.REACT_APP_API_URL;
const URL = BASE_URL + 'audio/producing/';

const producingList = {
    producing: [
        {
            id: uuidv4(),
            title: 'Arandevu - 40 Dienu',
            track: URL + 'Arandevu - 40 Dienu.mp3'
        },
        {
            id: uuidv4(),
            title: 'Arandevu - Cukrine vata',
            track: URL + 'Arandevu - Cukrine vata.mp3'
        },
        {
            id: uuidv4(),
            title: 'Arandevu - Pokalbis Foje',
            track: URL + 'Arandevu - Pokalbis Foje.mp3'
        },
        {
            id: uuidv4(),
            title: 'Arandevu - Saule teka',
            track: URL + 'Arandevu - Saule teka.mp3'
        },
        {
            id: uuidv4(),
            title: 'Austeja - Beyond HH',
            track: URL + 'Austeja - Beyond HH.mp3'
        },
        {
            id: uuidv4(),
            title: 'Baltic Balkan - Bazaar',
            track: URL + 'Baltic Balkan - Bazaar.mp3'
        },
        {
            id: uuidv4(),
            title: 'Baltic Balkan - Bum Pau',
            track: URL + 'Baltic Balkan - Bum Pau.mp3'
        },
        {
            id: uuidv4(),
            title: 'DeLoran - Better Days',
            track: URL + 'DeLoran - Better Days.mp3'
        },
        {
            id: uuidv4(),
            title: 'Kestutis - Teviškė',
            track: URL + 'Kestutis - Teviske.mp3'
        },
        {
            id: uuidv4(),
            title: 'Matossi - Demise',
            track: URL + 'Matossi - Demise.mp3'
        },
        {
            id: uuidv4(),
            title: 'Oystein - vindusviskar',
            track: URL + 'Oystein - vindusviskar.mp3'
        },
        {
            id: uuidv4(),
            title: 'Rosita - sometimes i feel',
            track: URL + 'Rosita - sometimes i feel.mp3'
        },
        {
            id: uuidv4(),
            title: 'Šventinis bankuchenas - ko tu kartoji',
            track: URL + 'Sventinis bankuchenas - ko tu kartoji.mp3'
        },
        {
            id: uuidv4(),
            title: 'Šventinis Bankuchenas - Vyturiai',
            track: URL + 'Sventinis Bankuchenas - Vyturiai.mp3'
        },
        {
            id: uuidv4(),
            title: 'Taddtheartist - Losing My Bet',
            track: URL + 'Taddtheartist - Losing My Bet.mp3'
        },
        {
            id: uuidv4(),
            title: 'Tom Bones - Davai pajudėk',
            track: URL + 'Tom Bones - Davai pajudek.mp3'
        },
        {
            id: uuidv4(),
            title: 'Tom Bones feat. Nebula - Fast or Far',
            track: URL + 'Tom Bones feat. Nebula - Fast or Far.mp3'
        },
        {
            id: uuidv4(),
            title: `Tom Bones x Rell Rock - Don't Mess With Me`,
            track: URL + 'Tom Bones x Rell Rock - Dont Mess With Me.mp3'
        },
        {
            id: uuidv4(),
            title: 'Vitalija - Pražydę Ąžuolai',
            track: URL + 'Vitalija - Prazyde Azuolai.mp3'
        }
    ]
}
export default producingList;
