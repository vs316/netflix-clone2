const API_KEY = "97454174d815d732d56c494f19035e75";

const requests = {
  fetchTrending: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchCrimeTV: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchRealityTV: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchTalks: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
};

export default requests;
