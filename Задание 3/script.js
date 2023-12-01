const btn = document.querySelector('.main-button');
const monitor = document.querySelector('.main-monitor');
const lat = document.querySelector('.main-latitude');
const lon = document.querySelector('.main-longitude');


const success = (position) => {
    lat.textContent = `Широта: ${position.coords.latitude}`;
    lon.textContent = `Долгота: ${position.coords.longitude}`;
};

const error = () => {
    lat.textContent = "Информация о местоположении недоступна";
};

btn.addEventListener('click', () => {
    monitor.textContent = `Размер экрана: ${window.screen.width} x ${window.screen.height}`;
    if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
        lat.textContent = "Информация о местоположении недоступна";
    }
})
