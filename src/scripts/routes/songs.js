import Songs from '../components/Songs'
let mainContent = document.querySelector(".mainContent");
let songss = document.querySelector(".songs");
const songs = {
    name: "songs",
    match: "songs",
    onBeforeEnter: () => {
        songss.style.borderBottom = "solid yellow";
    },
    onEnter: () => {

        new Songs().init();
    },
    onLeave: () => {
        mainContent.innerHTML = '';
        songss.style.borderBottom = '';
    }
};

export { songs };