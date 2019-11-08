import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const muted = document.querySelector('#muted');
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        // new AutoPlay()
    ] 
});

button.onclick = () => player.play();
muted.onclick = () => player.muted();
