const btn = document.querySelector('.main-button');
const timeZone = document.querySelector('.main-timezone');
const dateTime = document.querySelector('.main-datetime');

const success = (position) => {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`)
    .then((response) => { return response.json(); })
    .then((data) => { 
        timeZone.textContent = `Timezone: ${data.timezone}`; 
        dateTime.textContent = `Datetime: ${data.date_time_txt}`;
    })
    .catch(() => { console.log('error') });
};

const error = () => {
    timeZone.textContent = "Информация о местоположении недоступна";
};

btn.addEventListener('click', () => {
    if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
        lat.textContent = "Информация о местоположении недоступна";
    }
})
