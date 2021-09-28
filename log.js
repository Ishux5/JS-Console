// Select all VideoTitles
const titleElements = document.getElementById("contents").querySelectorAll("[id='video-title']");

for(let i = 0; i < titleElements.length; i++){ 
  titleElements[i].classList.add("video-title")
};

const videoTitle = document.getElementsByClassName("video-title");
let videoArray = [];
let numEl = 0;

for (let i = 0; i < videoTitle.length - 10; i++) {
    videoArray.push(videoTitle[i].innerText)
	numEl += 1;
};

console.log(videoArray)
console.log("length: " + numEl)
