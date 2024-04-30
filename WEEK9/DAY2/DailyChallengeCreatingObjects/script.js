class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        return (`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
};

const myVideo = new Video("Jungle", "John", 1600);

const myNewVideo = new Video("The Amazing Sipderman", "Jenna", 500);