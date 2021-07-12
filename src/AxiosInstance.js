import Axios from 'axios';

let AxiosCocktail = Axios.create({
  baseURL: 'https://rapidapi.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
  },
});

export default AxiosCocktail;
