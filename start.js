let countdown;
const timerDisplay = document.querySelector('.display__time-left')

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {clearInterval(countdown); return;}

        displayTimeLeft(secondsLeft);
    }, 1000);


}

function displayTimeLeft(seconds){
    const mins = Math.floor(seconds/60);
    const remSeconds = seconds % 60;
    const display = `${mins}:${remSeconds < 10 ? '0' : ''}${remSeconds}`;

    
    timerDisplay.textContent = display;
    console.log({mins, remSeconds});
}