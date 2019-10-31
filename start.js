let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

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

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();

    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${mins < 10 ? '0': ''}${mins}`
    
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));