import { isValidColor } from './colors'; 

const subtitlesEl = document.querySelector('.text'); 
const scoreEl = document.querySelector('.score'); 
const HIGH_SCORE = 'Highscore'; 
const GOT = "got"; 

function logWords(words) {
    const textSpan = `<span class="subtitles">${words}</span>`; 
    subtitlesEl.innerHTML = textSpan; 

    setTimeout(() => {
        subtitlesEl.innerHTML = ''; 
    }, 5000);
}

export function renderScore(){
    const score = getHighscoreFromLocalStorage();  
    const scoreSpan = `<span>${score}</span>`;
    scoreEl.innerHTML = scoreSpan; 
}

function handleCorrectColor(color){
    const colorSpan = document.querySelector(`.${color}`);
    if(colorSpan.classList.contains(GOT)) return;
    colorSpan.classList.add('got'); 
    document.body.style.backgroundColor = color; 
    addHighscoreToLocalstorage();
    renderScore(); 
}

export function handleResult({ results }) {
    const words = results[results.length - 1][0].transcript;
    logWords(words);

    let color = words.toLowerCase();
    color = color.replace(/\s/g, '');
    if(!isValidColor(color)) return; 

    console.log('This is a valid color 😼', color); 
    handleCorrectColor(color); 
}

function addHighscoreToLocalstorage(){
    const score = localStorage.getItem(HIGH_SCORE);

    localStorage.setItem(HIGH_SCORE, score ? parseInt(score) + 1 : 1);
}

export function getHighscoreFromLocalStorage(){
    return localStorage.getItem(HIGH_SCORE); 
}

export function resetScore(){
    const colorSpans = document.querySelectorAll(`.color`);
    Array.from(colorSpans).forEach((el) => el.classList.remove(GOT));

    localStorage.setItem(HIGH_SCORE, 0);
    renderScore(); 
}