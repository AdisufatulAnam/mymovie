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
    this.innerHTML = `
      <div id="${this._movie.id}" class="card overflow-hidden rounded-4 text-center text-white bg-dark h-100" type="button" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="p-2 card-img rounded-4 card-img-top" src="${this._movie.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._movie.poster_path : "https://pbs.twimg.com/media/EXPCIJuUcAEDjo_?format=png&name=medium"}" alt="Poster Movie">
        <div class="card-img-overlay d-flex flex-column justify-content-end">
          <p class="grad1 card-title"><strong>${this._movie.original_title}</strong> (${this._movie.release_date ? this._movie.release_date.substring(0,4) : ""})</p>
        </div>
      </div>
    `;
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
            padding: 10px;
            weight:20px;
          }
          
          .movie > h3 {
            font-weight: lighter;
            margin-top: 10px;
            border-radius:px;
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
          <h4>${this._movie.title}</h4>
          <h4>${this._movie.release_date ? this._movie.release_date.substring(0,4) : ""}</h4>
        </div>
      `;
  }
}
customElements.define("movie-item", MovieItem);