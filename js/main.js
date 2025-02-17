const audio = new Audio("music/soundtrack.mp3");
let audio_playing = false;

const image = document.querySelector("#image");
const btn = document.querySelector("#btn");

const loadImage = async () => {
    image.setAttribute("src", "images/loading.gif");
    const obj = await fetch("https://api.waifu.pics/sfw/cuddle");
    const json = await obj.json();
    const url = json.url;
    image.setAttribute("src", url);
    btn.classList.remove("active");
}

btn.addEventListener("click", () => {
    loadImage();
    if (!audio_playing) {
        audio.play();
        audio_playing = !audio_playing;
    }
});

window.addEventListener("keypress", e => {
    btn.classList.add("active");
    if (e.key.toLocaleLowerCase() == "enter" || e.key.toLocaleLowerCase() == " ") {
        btn.click();
    }
});