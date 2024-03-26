const notes = document.getElementsByClassName('note');

const noteToAudioMap = {
    'key65': new Audio('sounds_boom.wav'),
    'key83': new Audio('sounds_clap.wav'),
    'key68': new Audio('sounds_hihat.wav'),
    'key70': new Audio('sounds_kick.wav'),
    'key71': new Audio('sounds_openhat.wav'),
    'key72': new Audio('sounds_ride.wav'),
    'key74': new Audio('sounds_snare.wav'),
    'key75': new Audio('sounds_tink.wav'),
    'key76': new Audio('sounds_tom.wav'),
};

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', function() {
        console.log('Note clicked:', this.id);
        const noteId = this.id;
        const audio = noteToAudioMap[noteId];
        if (audio) {
            playSound(audio);
        }
    }, false);
}