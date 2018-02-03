const API_KEY_LASTFM = '52bc3b6e84807de0f34482110ffa0834'
const API_KEY_FMA = "29UT3KA87Q3MV8Q1";

class ApiConnect {
    constructor(){
        //52bc3b6e84807de0f34482110ffa0834
        //http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=YOUR_API_KEY&user=joanofarctan&format=json
    }

    init() {
        this.controls();
        this.handlerEvents();
        this.connectFMA();
    }

    handlerEvents(){

      //  var AudioPlayer = ya.music.Audio;

        

    }
    connectFMA(){
        fetch(`https://freemusicarchive.org/api/get/curators.json?api_key=${API_KEY_FMA}`)
        .then((response) => response.json())
        .then((data) =>{
            let main = document.querySelector(".mainContent");
            // main.innerHTML = `${data.dataset[0]}`;
            console.log(data);
            console.log(data.dataset[0]);

        })
        fetch(`https://freemusicarchive.org/recent.json`)
        .then(response => response.json())
        .then(dataMM => {
            
            console.log(dataMM);
            console.log(dataMM.aTracks[4].track_file);
            // document.querySelector('.mainContent').innerHTML += `
            //     <audio controls>
            //         <source src="${dataMM.aTracks[18].track_listen_url}" type="audio/mpeg">
            //     </audio>
            // `;
        })
    }


    controls(){
        var dom = {
            player: document.querySelector(".player"),
        
            play: document.querySelector(".play"),
            pause: document.querySelector(".pause"),
        
            progress: {
                bar: document.querySelector(".progress"),
                loaded: document.querySelector(".progress__loaded"),
                current: document.querySelector(".progress__current")
            },
        
            volume: {
                bar: document.querySelector(".volume"),
                value: document.querySelector(".volume__bar"),
                valueVolume: document.querySelector(".valueVolume")       
            },
            
            overlay: document.querySelector(".overlay")
        };

        dom.play.addEventListener('click', () => {
            // Проверка текущего статуса плеера.
           // var state = audioPlayer.getState();
           if(dom.play.innerHTML === "play_circle_filled")
            {
                dom.play.innerHTML = "pause_circle_filled";
            }
            else if  (dom.play.innerHTML === "pause_circle_filled"){
                dom.play.innerHTML = "play_circle_filled"; 
            }
            
        });
        
      
        dom.volume.bar.addEventListener('change', () =>{
            let value = dom.volume.bar.value;
        
            dom.volume.valueVolume.innerHTML = `<span>${value}</span>`;
        });
        
    }
}

let connect = new ApiConnect();
connect.init();

export { ApiConnect }
