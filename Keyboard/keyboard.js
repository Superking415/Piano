// Functie piano toetsen, geluid, sliderr
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

// Audio link van de piano dat eindelijk werkt
let allKeys = [],
audio = new Audio(`tunes/a.wav`); 

//functie van afspelen van de piano en toetsen
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; 
    audio.play();

    //klik effect van toetsen
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

//slide ding van piano voor geluid
const handleVolume = (e) => {
    audio.volume = e.target.value;
}
//functie van toetsen laten zien en verbergen
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

//Event listeners wat er staat
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);