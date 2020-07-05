import { isValidColor } from './colors'; 

function logWords() {
    console.log(words)
}

export function handleResult({ results }) {
    const words = results[results.length - 1][0].transcript;
    logWords(words);
    let color = words.toLowerCase();
    color = color.replace(/\s/g, '');
    
    if(!isValidColor(color)) return; 
    console.log('This is a valid color 😼', color); 
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got'); 
    document.body.style.backgroundColor = color; 
}