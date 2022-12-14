// const url = "https://api.themoviedb.org/3";
// const api_key = "19a772b732ae958ca4e3c3fead70bc19";
// class DataSource {
//   static async searchMovie(keyword) {
//     let response;
//     if (keyword) {
//       response = await fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`);
//     } else {
//       response = await fetch(`${url}/movie/popular?api_key=19a772b732ae958ca4e3c3fead70bc19&page=1`)
//     }
//     const responseJson = await response.json();
//     if (responseJson.results) {
//       return Promise.resolve(responseJson.results);
//     } else {
//       return Promise.reject(`${keyword} is not found`);
//     }
//   }

// }
// export default DataSource;

const url = "https://api.themoviedb.org/3";
const api_key = "19a772b732ae958ca4e3c3fead70bc19";

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        // console.log(responseJson);
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }
}

class Main {
  static fetchMov() {
    return fetch(`${url}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        // console.log(responseJson);
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`movies not found`)
        }
      })
  }
}
// export function contoh(
//   DataSource,
//   Main
// );

export {
  DataSource,
  Main
};