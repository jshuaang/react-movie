const API_KEY = process.env.API_KEY;

export default {
    fetchActionMovies: {
        title: 'Action',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchAdventureMovies: {
        title: 'Adventure',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`
    },
    fetchActionMovies: {
        title: 'Animation',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchCrimeMovies: {
        title: 'Crime',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`
    },
    fetchDocumentaryMovies: {
        title: 'Documentary',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchDramaMovies: {
        title: 'Drama',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`
    },
    fetchFamilyMovies: {
        title: 'Family',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`
    },
    fetchFantasyMovies: {
        title: 'Fantasy',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`
    },
    fetchHistoryMovies: {
        title: 'History',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchMusicMovies: {
        title: 'Music',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402`
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchScienceFictionMovies: {
        title: 'Science Fiction',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchTVMovieMovies: {
        title: 'TV Movie',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchThrillerMovies: {
        title: 'Thriller',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`
    },
    fetchWarMovies: {
        title: 'War',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`
    },
    fetchWesternMovies: {
        title: 'Western',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    

}