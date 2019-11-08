function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){  
      
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function() {
    if(this.media.paused) {
        this.media.play();
    } else {
        this.pause();
    }
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.muted = function() {
    if (this.media.muted) {
        this.media.muted = false;
    } else {
        this.media.muted = true;
    }
}

export default MediaPlayer;