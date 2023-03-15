const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");



const songs = [
  {
    name: "kk1",
    displayName: "Pal",
    artist: "Krishnakumar Kunnath(KK)",
  },
  {
    name: "kk2",
    displayName: "Khuda Jane",
    artist: "Krishnakumar Kunnath(KK)",
  },
  {
    name: "kk3",
    displayName: "Thadap Thadap",
    artist: "Krishnakumar Kunnath(KK)",
  },
  {
    name: "kk4",
    displayName: "Kya mujhe pyaar hain ",
    artist: "Krishnakumar Kunnath(KK)",
  },
];


//play and pause feature

let isPlaying = false;
function playSong(){
  isPlaying= true
  music.play()
  playBtn.classList.replace("fa-play","fa-pause")
  playBtn.setAttribute("title",pause)
}

function pauseSong(){
  isPlaying= false
  music.pause()
  playBtn.classList.replace("fa-pause","fa-play")
  playBtn.setAttribute("title",play)
}

let songIndex = 0


function loadSong(song){
  title.textContent= song.displayName
  artist.textContent= song.artist
  image.src= `img/${song.name}.jpg`
  music.src= `music/${song.name}.mp3`
}

function previousSong(){
  songIndex--;

  if(songIndex < 0){
    songIndex= songs.length-1

  }
  loadSong(songs[songIndex])
  playSong()
  // 0 -1
 

}
function nextSong(){
  songIndex++;
  if(songIndex > songs.length-1){
    songIndex= 0

  }
  loadSong(songs[songIndex])
  playSong()
 
}

function updateProgressBar(e){
 /*  console.log("event",e) */

  const {currentTime, duration}= e.target;

  /* console.log("current timing",currentTime)
  console.log("duration",duration) */

  const progressPercentage= (currentTime/duration)*100

  progress.style.width = `${progressPercentage}%`

  const durationMinutes = Math.floor(duration/60)
  let durationSeconds = Math.floor(duration%60)

 
  const currentMinutes = Math.floor(currentTime/60)
  let currentSeconds = Math.floor(currentTime%60)

  if(currentSeconds<10){
    currentSeconds= `0${currentSeconds}`
  }

  currentTimeEl.textContent= `${currentMinutes}:${currentSeconds}`
  

  //for handlin the nana issue 

  if(durationSeconds){
    durationEl.textContent= `${durationMinutes}:${durationSeconds}`
  }


}

function clickProgressBar(e){
  console.log("event from clickProgressBar",e)

  const width= this.clientWidth;
  const progressWidth= e.offsetX;

  console.log("this",this)
  console.log("width",width)
  console.log("progressWidth",progressWidth)

  const {duration} = music;
  music.currentTime= (progressWidth/width)*duration

}


playBtn.addEventListener("click",()=>{
  isPlaying ? pauseSong() : playSong()
})
prevBtn.addEventListener("click",previousSong)
nextBtn.addEventListener("click",nextSong)
music.addEventListener("timeupdate",updateProgressBar)
progressContainer.addEventListener("click",clickProgressBar)
