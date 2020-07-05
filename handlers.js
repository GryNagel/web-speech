import { isValidColor } from './colors'; 

const subtitlesEl = document.querySelector('.text'); 

function logWords(words) {
    const textSpan = `<span class="subtitles">${words}</span>`; 
    subtitlesEl.innerHTML = textSpan; 

    setTimeout(() => {
        subtitlesEl.innerHTML = ''; 
    }, 5000);
}

function handleCorrectColor(color){
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got'); 
    document.body.style.backgroundColor = color; 
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