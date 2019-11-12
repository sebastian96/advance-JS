class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        if (this.media.paused) {
            this.media.play();
        }
        else {
            this.media.pause();
        }
    }

    pause() {
        this.media.pause();
    }

    mute() {
        this.media.muted = true;
    }
    
    unmute() {
        this.media.muted = false;
    }
}

export default MediaPlayer;