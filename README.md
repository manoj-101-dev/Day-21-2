# Random Genre Fetcher

This JavaScript code fetches a random genre from the "Genrenator" API provided by [binaryjazz.us](https://binaryjazz.us/wp-json/genrenator/v1/genre/) and updates the content of an HTML element with the retrieved genre when a button is clicked.

## Code Explanation

The code consists of JavaScript functionality to retrieve a random genre from the Genrenator API and display it in a web page container upon button click.

- **API Endpoint**: The `apiUrl` variable contains the base URL for the Genrenator API's genre endpoint.

- **HTML Elements**: 
  - `fetchGenreBtn`: Represents a button element with the ID "fetch-genre-btn".
  - `genreContainer`: Represents an HTML element (e.g., a `<div>`) with the ID "genre-container".

- **Event Listener**: An event listener is attached to the `fetchGenreBtn` button element, listening for a "click" event.

- **Click Event Handler**: Upon clicking the button, the code performs a fetch request to the `apiUrl`.
  - It handles the response using promises:
    - Converts the response to JSON using `response.json()`.
    - Retrieves the random genre data from the response.
    - Updates the `textContent` of the `genreContainer` element to display the fetched random genre.

## Live Site

The live site for this project can be accessed [here](https://manoj-101-dev.github.io/Day-21-2/).
