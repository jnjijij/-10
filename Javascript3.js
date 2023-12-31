const fetchMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page
  );
  const data = await response.json();
  setMovies(data.results);
  setTotalPages(data.total_pages);
};
