class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.classList.add('ads')
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
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