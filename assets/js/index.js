import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const muted = document.querySelector('#muted');
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ] 
});

button.onclick = () => player.play();
muted.onclick = () => {
    if(player.media.muted) {
        player.unmute();
    }else {
        player.mute();
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}
