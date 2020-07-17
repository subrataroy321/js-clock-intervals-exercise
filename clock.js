let seconds = 0;
let minutes = 0;
let hours =0;

function secondRotation(seconds) {
    let degRotation =  6*seconds;
    return degRotation;

}

function minuteRotation(minutes,seconds) {

    
    let totalSeconds = 60 * minutes+seconds ;   
    let degRotation = .1 * totalSeconds;
    return degRotation;
}

function hourRotation(hours,minutes) {
    let totalMinutes= 60*hours+minutes;
    let degRotation = .5*totalMinutes;

    return degRotation;

}

function tick() {
    seconds++;
    if (seconds >=60){
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    if (hours >=12) {
        hours = 0;
    }

//    console.log("tick");

//    console.log('${hours}:$(minutes):${seconds');

    secondHand.style.transform = 'rotate(' +secondRotation(seconds) + 'deg)';
    minuteHand.style.transform = 'rotate(' +minuteRotation(minutes,seconds) + 'deg)';   
    hourHand.style.transform = 'rotate(' +hourRotation(hours, minutes) + 'deg)';
}

document.addEventListener('DOMContentLoaded', function() {
    
    secondHand = document.getElementById('second');
    minuteHand = document.getElementById('minute');
    hourHand = document.getElementById('hour');
    setInterval(tick,1000);
})
