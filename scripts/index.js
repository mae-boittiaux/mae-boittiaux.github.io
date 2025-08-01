const title = document.getElementById('title');

const mapIcon = document.getElementById('map-icon');
const chatIcon = document.getElementById('chat-icon');
const todoIcon = document.getElementById('todo-icon');
const paletteIcon = document.getElementById('palette-icon');
const passportIcon = document.getElementById('passport-icon');
const settingsIcon = document.getElementById('settings-icon');

mapIcon.onmouseenter = () => {
    title.innerHTML = 'Offline Map';
    document.title = 'Offline Map | Mae Boittiaux';
};

chatIcon.onmouseenter = () => {
    title.innerHTML = 'Contact';
    document.title = 'Contact | Mae Boittiaux';
};

todoIcon.onmouseenter = () => {
    title.innerHTML = 'To-Do List';
    document.title = 'To-Do List | Mae Boittiaux';
};

paletteIcon.onmouseenter = () => {
    title.innerHTML = 'Colour Palette';
    document.title = 'Colour Palette | Mae Boittiaux';
};

passportIcon.onmouseenter = () => {
    title.innerHTML = 'About';
    document.title = 'About | Mae Boittiaux';
};

settingsIcon.onmouseenter = () => {
    title.innerHTML = 'GitHub';
    document.title = 'GitHub | Mae Boittiaux';
};

mapIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
};

chatIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
};

todoIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
};

paletteIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
};

passportIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
};

settingsIcon.onmouseleave = () => {
    title.innerHTML = 'Mae Boittiaux';
    document.title = 'Home | Mae Boittiaux';
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