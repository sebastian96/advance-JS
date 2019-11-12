function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    if (!player.media.muted) {
        player.media.muted = true;
    }   
    player.play();
}

export default AutoPlay;