import "../component/movie-list.js";
import DataSource from "../data/data.js";
import "../component/app-bar.js";

const search = () => {
  const searchElement = document.querySelector("app-bar");
  const MovieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    MovieListElement.movie = results;
  };

  const fallbackResult = (message) => {
    MovieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default search;