var mySound = new buzz.sound("/relax/snd/campfire", {
    formats: [ "ogg", "mp3", "aac", "wav" ],
    preload: true,
    autoplay: true,
    loop: true
});
mySound.loop().play().fadeIn();
