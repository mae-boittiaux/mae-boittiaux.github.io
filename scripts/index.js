const title = document.getElementById('title');

const mapIcon = document.getElementById('map-icon');
const chatIcon = document.getElementById('chat-icon');
const todoIcon = document.getElementById('todo-icon');
const paletteIcon = document.getElementById('palette-icon');
const passportIcon = document.getElementById('passport-icon');
const settingsIcon = document.getElementById('settings-icon');

mapIcon.onmouseenter = () => {
    title.innerHTML = 'Offline Map';
};

chatIcon.onmouseenter = () => {
    title.innerHTML = 'Contact';
};

todoIcon.onmouseenter = () => {
    title.innerHTML = 'To-Do List';
};

paletteIcon.onmouseenter = () => {
    title.innerHTML = 'Colour Palette';
};

passportIcon.onmouseenter = () => {
    title.innerHTML = 'About';
};

settingsIcon.onmouseenter = () => {
    title.innerHTML = 'GitHub';
};

mapIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

chatIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

todoIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

paletteIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

passportIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
};

settingsIcon.onmouseleave = () => {
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