// Select all VideoLenghts
const lengthElements = document
    .getElementById("contents")
    .querySelectorAll('[id="text"]');

for (let i = 0; i < lengthElements.length; i++) {
    lengthElements[i].classList.add("video-length");
}

const videoLength = document.getElementsByClassName(
    "style-scope ytd-thumbnail-overlay-time-status-renderer video-length"
);

let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

for (let i = 0; i < videoLength.length; i++) {
    let newVideoLength = videoLength[i].innerText;
    newVideoLength = newVideoLength.replace(/\s/g, "");
    if (newVideoLength.length < 5) {
        // if < 0:00
        newVideoLength = "00:0" + newVideoLength;
    } else if (newVideoLength.length < 6) {
        //if < 00:00
        newVideoLength = "00:" + newVideoLength;
    } else if (newVideoLength.length < 8) {
        //if < 0:00:00
        newVideoLength = "0" + newVideoLength;
    } else if (newVideoLength.length === 8) {
    }
    // newVideoLength Format: hh:mm:ss
    let tempHour = newVideoLength.charAt(0);
    tempHour += newVideoLength.charAt(1);
    let tempMin = newVideoLength.charAt(3);
    tempMin += newVideoLength.charAt(4);
    let tempSec = newVideoLength.charAt(6);
    tempSec += newVideoLength.charAt(7);

    totalHours += parseInt(tempHour);
    totalMinutes += parseInt(tempMin);
    totalSeconds += parseInt(tempSec);
}

// devide Seconds by 60 to add to minutes => only use integer
const dividendSeconds = Math.floor(totalSeconds / 60);
const dividendMinutes = Math.floor((totalMinutes + dividendSeconds) / 60);

// add the integer minutes to total Hours
totalHours += dividendMinutes;

// set rest of the division to the next higher time unit
const moduloSeconds = totalSeconds % 60;
const moduloMinutes = (totalMinutes + dividendSeconds) % 60;

// convert time from number to string
const totalHoursString = totalHours.toString();
const totalMinutesString = moduloMinutes.toString();
const totalSecondsString = moduloSeconds.toString();

// add additional character if it is only a single digit
if (totalHoursString.length < 2) {
    totalHoursString = "0" + totalHoursString;
}
if (totalMinutesString.length < 2) {
    totalMinutesString = "0" + totalMinutesString;
}
if (totalSecondsString.length < 2) {
    totalSecondsString = "0" + totalSecondsString;
}

console.log(
    "The total Time is: " +
        totalHoursString +
        ":" +
        totalMinutesString +
        ":" +
        totalSecondsString
);
