const movies = [
  "Avengers: Endgame",
  "Iron Man",
  "Black Panther",
  "Inception",
  "Interstellar",
  "The return of the dragon",
  "Frozen",
  "Titanic",
  "Jurassic Park",
  "Dark"
];

const movieList = document.getElementById("movieList");
const searchBox = document.getElementById("searchBox");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

displayMovies(movies);

searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.toLowerCase().includes(searchText)
  );
  displayMovies(filtered);
});
