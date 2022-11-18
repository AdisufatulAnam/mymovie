class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            border-radius: 10px;
            width: 200px;
            display: flex;
            margin: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            
          }
          
          .poster_path {
            object-fit: cover;
            object-position: center;
            border-radius: 2px;
            width: 100%;
            height: auto;
            
          }
          
          .movie {
            padding: 24px;
          }
          
          .movie > h2 {
            font-weight: lighter;
            margin-top: 20px;
            border-radius:2px;
          }
          
          .movie > p {
            margin-top: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
          }
          @media only screen and (max-width: 600px) {
            :host {
              width: 300px;
            }
          }
          
        </style>
        <div>
        <img class="poster_path" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.title}">
        <div class="movie">
          <h2>${this._movie.title}</h2>
          <p>${this._movie.overview}</p>
        </div>
      `;
  }
}

customElements.define("movie-item", MovieItem);