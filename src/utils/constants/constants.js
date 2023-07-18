
const API_KEY = import.meta.env.VITE_REACT_TMDB_API_KEY

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


export const rows = [
    {
        title: 'NETFLIX ORIGINALS',
        url: requests.fetchNetflixOriginals,
        isLarge: true
    },
    {
        title: 'Trending Now',
        url: requests.fetchTrending,
        isLarge: false
    },
    {
        title: 'Top Rated',
        url: requests.fetchTopRated,
        isLarge: false
    },
    {
        title: 'Action Movies',
        url: requests.fetchActionMovies,
        isLarge: false
    },
    {
        title: 'Comedy Movies',
        url: requests.fetchComedyMovies,
        isLarge: false
    },
    {
        title: 'Horror Movies',
        url: requests.fetchHorrorMovies,
        isLarge: false
    },
    {
        title: 'Romance Movies',
        url: requests.fetchRomanceMovies,
        isLarge: false
    },
    {
        title: 'Documentaries',
        url: requests.fetchDocumentaries,
        isLarge: false
    },

]