export function getPlay() {
    const sound = new Howl({
      src: ['audio/audio.mp3']
    });
    return sound.play();
    }