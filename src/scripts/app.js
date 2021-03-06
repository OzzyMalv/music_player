import Router from './utils/Router.js';

import { main } from "./routes/main.js";
import { songs } from "./routes/songs.js";
import { albums } from "./routes/albums.js";
import { favorites } from "./routes/favorites.js";
import { author } from './routes/author.js';
import { help } from './routes/help.js';
import { Themes } from "./components/themes.js";

let routes = [author, help, main, songs, albums, favorites];

new Router({ routes }).init()