import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { getPlay } from "./howler.js";
  
const navCalc = document.querySelector(".calc");
const navTimer = document.querySelector(".time");
const dateCalcForm = document.getElementById("datecalc"); 
const timerBlock = document.getElementById("timerBlock"); 
const dateCalcResult = document.getElementById("datecalc__result"); 

const timerInput = document.getElementById("inputTime"); 
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const timerShow = document.getElementById("timerShow"); 
let interval;


navCalc.addEventListener('click', () => {
    dateCalcForm.classList.remove('invisible');
    timerBlock.classList.add('invisible');
   
})
navTimer.addEventListener('click', () => {
    timerBlock.classList.remove('invisible');
    dateCalcForm.classList.add('invisible');
})


//calculator
dateCalcForm.addEventListener("submit", handleCalcDates); 

function handleCalcDates(event) { 
    dateCalcResult.innerHTML = ""; 
    event.preventDefault(); 

    let { firstDate, secondDate } = event.target.elements; 
    firstDate = firstDate.value, secondDate = secondDate.value; 
    
    if (firstDate && secondDate) { 
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}


//timer
buttonStart.addEventListener('click', () => {
    if (timerInput.value < 0) {
        timerInput.value = 0;
        timerShow.innerHTML = 0;
    }
    timerShow.innerHTML = timerInput.value;
    clearInterval(interval);
    interval = setInterval(sustrTime, 1000);
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
})


function sustrTime() {
    if(timerShow.innerHTML > 0) {
        timerShow.innerHTML--;
        timerInput.value--;
        if (timerInput < 0 || timerShow.innerHTML === 0) {
            timerInput.value = 0;
            timerShow.innerHTML = 0;
        }
    } else {
        getPlay();
        clearInterval(interval);
    }
}