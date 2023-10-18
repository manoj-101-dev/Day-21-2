const apiUrl = "https://binaryjazz.us/wp-json/genrenator/v1/genre/";

const fetchGenreBtn = document.getElementById("fetch-genre-btn");
const genreContainer = document.getElementById("genre-container");

fetchGenreBtn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const randomGenre = data; // API returns the genre as a plain string

      genreContainer.textContent = randomGenre;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
