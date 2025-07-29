const title = document.getElementById('title');

const mapIcon = document.getElementById('map-icon');
const chatIcon = document.getElementById('chat-icon');
const paletteIcon = document.getElementById('palette-icon');
const passportIcon = document.getElementById('passport-icon');

mapIcon.onmouseenter = () => {
    title.innerHTML = 'Offline Map';
};

chatIcon.onmouseenter = () => {
    title.innerHTML = 'Contact';
};

paletteIcon.onmouseenter = () => {
    title.innerHTML = 'Colour Palette';
};

passportIcon.onmouseenter = () => {
    title.innerHTML = 'About';
};

mapIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

chatIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

paletteIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

passportIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

function updateTime() {
    const time = document.getElementById('time');
    time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
    sleep(1000).then(() => { updateTime(); });
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

updateTime();