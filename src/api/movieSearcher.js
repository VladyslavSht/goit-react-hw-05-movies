import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "25683c0d4a00a0081b5fbc656eb820dd";

const fetchFilms = async (url) => {
    const response = await axios.get(url);
    return response;
};

export const trendingFilms = () => {
    return fetchFilms(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
};

export const searchedFilms = (value) => {
    return fetchFilms(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}
    &page=1&include_adult=false`)
};

export const filmDescription = (id_film) => {
    return fetchFilms(`${BASE_URL}movie/${id_film}?api_key=${API_KEY}&language=en-US`)
};

export const filmCast = (id_film) => {
    return fetchFilms(`${BASE_URL}movie/${id_film}/credits?api_key=${API_KEY}&language=en-US`)
};

export const filmReview = (id_film) => {
    return fetchFilms(`${BASE_URL}movie/${id_film}/reviews?api_key=${API_KEY}&language=en-US`)
};