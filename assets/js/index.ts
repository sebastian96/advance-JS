import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('#play');
const muted: HTMLElement = document.querySelector('#muted');

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
