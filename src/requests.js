const API_KEY = "97454174d815d732d56c494f19035e75";

const requests = {
  fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12&language=en&certification_country=US&certification=UA`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en&certification_country=US&certification=TV-PG`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=en&certification_country=US&certification=UA`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en&certification_country=US&certification=UA`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&language=en&certification_country=US&certification=UA`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=en&certification_country=US&certification=UA`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en&certification_country=US&certification=UA`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14&language=en&certification_country=US&certification=UA`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en&certification_country=US&certification=UA`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en&certification_country=US&certification=UA`,
};

export default requests;
