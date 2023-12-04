const globalTime = new Date();

const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const presentDate = globalTime.getDate();
    // - Calculate remaining days.
    const christmasCountDown = christmas - presentDate
    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerText = christmasCountDown
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
const timesToday = document.getElementById("timeToday")

function renderTodaysTime() {
    const presentHours = globalTime.getHours();
    const presentMinutes = globalTime.getMinutes();
    const presentSeconds = globalTime.getSeconds();
    const timeFormat = `${addZero(presentHours)} : ${addZero(presentMinutes)} : ${addZero(presentSeconds)}`
    timesToday.innerText = timeFormat 
}

function addZero(number) {
    return number < 10 ? '0' + number : number;
}

renderTodaysTime();


// - Add a countdown for another festival, your birthday, or Christmas 2022.

const myBirthday = document.getElementById("myBirthday")

function renderMyBirthday() {
    const myBirthdayDate = new Date('2024-06-12T00:00:00')
    const dayDifference = myBirthdayDate - globalTime
    const myBirthdayTime = Math.floor(dayDifference / (1000 * 60 * 60 * 24));
    
    myBirthday.innerText = myBirthdayTime;
}

renderMyBirthday()