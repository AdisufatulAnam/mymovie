class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        nav {
          background-color: #212529;
          padding: 10px;
          text-align: left;
          top: 0;
          overflow: auto;
          }

          nav h2 {
          display: inline;
          list-style-type: none;
          margin-left: 20px;
          width: 10px;
          }
          
          nav h2 a {
          font-size: 50px;
          font-weight: 400;
          text-decoration: none;
          color: white;
          margin-top: 30px;
          }
  
          nav img {
          float: left;
          height: 64px;
          margin-left: 40px
        }
        
        </style>


        <nav>
     	    <h2><a href="">mymovie</a></h2>
     	  </nav>
        
        
        `;
  }
}
customElements.define("app-bar", AppBar);