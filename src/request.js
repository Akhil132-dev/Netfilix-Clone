const APIKEY = 'd34ee04b136025b15c4a1cf02d26f29e'


const request  = {
    feachTreading:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
     fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_newtwork=213`,
     fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
     fethchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
     fethchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
     fethchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
     fethchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
     fethchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default request;