const inp = document.querySelector('.main-out__text');
const btn = document.querySelector('.main-out__button');
const geo = document.querySelector('.main-out__geo');
const div = document.querySelector('.main-in');

const uri = 'wss://echo-ws-service.herokuapp.com/';

let websocket;

function addMessage (message) {
    let p = document.createElement("p");
    p.style.wordWrap = "break-word";
    p.innerHTML = message;
    div.style.display = "block";
    div.appendChild(p);
}

websocket = new WebSocket(uri);
websocket.onmessage = function(resp) {
    console.log(resp);
    addMessage(`<div class="main-in-in"><span class="main-in-in__span">${resp.data}</span></div>`);
}

btn.addEventListener('click', () => {
    if (inp.value) {
        div.style.display = "block";
        addMessage(`<div class="main-in-out"><span class="main-in-out__span">${inp.value}</span></div>`);
        websocket.send(inp.value);
        inp.value = '';
    }
});

const success = (position) => {
    addMessage(`<div class="main-in-out"><a class="main-in-out__span" href="https://www.openstreetmap.org/#map=17/${position.coords.latitude}/${position.coords.longitude}" target="_blank">Гео-локация</a></div>`);
};

const error = () => {
    addMessage(`<div class="main-in-out"><span class="main-in-out__span"><i>Отказано в доступе</i></span></div>`);
};

geo.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        div.style.display = "block";
        addMessage(`<div class="main-in-out"><span class="main-in-out__span">${inp.value}</span></div>`);
    }
})