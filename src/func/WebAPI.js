import axios from 'axios';

const myKey = 'b1ba471fd7becebe341deb23cf584383';
const popularURL = '/movie/popular';
const topRateUrl = '/movie/top_rated';
const upcomingUrl = '/movie/upcoming';

const movieRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: myKey,
    language: 'en-US',
    page: 1,
    include_adult: false,
  },
});

const movieIDRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: myKey,
    language: 'en-US',
  },
});

export const apiPopular = () => movieRequest.get(popularURL);
export const apiTopRate = () => movieRequest.get(topRateUrl);
export const apiUpcoming = () => movieRequest.get(upcomingUrl);

export const apiSearch = (data) =>
  movieRequest.get(`/search/movie?query=${data}`);

export const apiDetail = (id) => movieIDRequest.get(`/movie/${id}`);
export const apiCast = (id) => movieIDRequest.get(`/movie/${id}/credits`);
export const apiSimilar = (id) => movieIDRequest.get(`/movie/${id}/similar`);
