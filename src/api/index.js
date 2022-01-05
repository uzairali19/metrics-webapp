const { getApiHash } = require('marvel-api-hash-generator');

const timeStamp = new Date().getTime();
const privateKey = '6b8818fec33ebdf77419208da373bb694f23e50b';
const publicKey = 'bac4a0f60e6b04f79c1bc2a400dbffe1';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);
const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters?';
const limit = 93;
const events = '310%2C29';

const url = `${requestConstantCharacters}events=${events}&limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;

export const fetchMarvels = () => fetch(url).then((response) => response.json());
