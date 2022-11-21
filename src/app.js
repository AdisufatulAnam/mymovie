import './style/style.css';
// import "path/bootstrap/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './script/component/app-bar.js';
// import './script/component/search-bar';
import './script/component/movie-beranda.js';
import {
    main,
    search
} from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", main);