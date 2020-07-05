import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors() {
    return colorsByLength.map(color => {
        return `<span class="color ${isDark(color) ? 'dark' : ''} ${color}" style="background: ${color}">${color}</span>`;
    }).join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
    if (!('SpeechRecognition' in window)) {
        console.log('Sorry your browser does not support speech recognition 😢')
        return;
    }
    console.log('Starting...');

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.start();
}

start();
colorsEl.innerHTML = displayColors();