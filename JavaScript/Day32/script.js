const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const speed = document.querySelector('.player-speed');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');



function togglePlayPause(){
  if(video.paused){
    video.play()
    playBtn.classList.replace("fa-play","fa-pause")
    playBtn.setAttribute("")
  }
  else{
    video.pause()
    playBtn.classList.replace("fa-pause","fa-play")
    playBtn.setAttribute("")
  }
}


//progressBar
function displayTime(time){
  const minutes= Math.floor(time/60)
  const seconds= Math.floor(time%60)
  return `${minutes}:${seconds}`

}

function updateProgressBar(){

  progressBar.style.width= `${(video.currentTime/video.duration)*100}%`
  currentTime.textContent= `${displayTime(video.currentTime)}`
  duration.textContent= `${displayTime(video.duration)}`
}

function seekProgressBar(e){

  console.log("event",e)

  const seekTime= e.offsetX/ progressRange.clientWidth
  progressBar.style.width= `${seekTime*100}%`
  video.currentTime= seekTime * video.duration



}
function volumeHandler(e){
  console.log("event object",e)
  let volume= e.offsetX/ volumeRange.offsetWidth // 0.75
  volumeBar.style.width= `${volume*100}%` //75%
  video.volume= volume //



  if(volume < 0.1){
    volume= 0
  }

  if(volume > 0.9){
    volume= 1

  }

}


function changeVideoSpeed(){
  video.playbackRate= speed.value //0.5
}
function openFullScreen(element){
  if(element.requestFullscreen){
    element.requestFullscreen()
  }
  video.classList.add("video-fullscreen")

}
function closeFullScreen(){

  if(document.exitFullscreen){
    document.exitFullscreen()

  }
  video.classList.remove("video-fullscreen")
  

}

let fullScreen = false
function toggleFullScreen(){

  if(!fullScreen){
    openFullScreen(player)

  }else{
    closeFullScreen()
  }

  fullScreen= !fullScreen

}
playBtn.addEventListener("click",togglePlayPause)
video.addEventListener("timeupdate",updateProgressBar)
progressRange.addEventListener("click",seekProgressBar)
volumeRange.addEventListener("click",volumeHandler)
speed.addEventListener("change",changeVideoSpeed)
fullscreenBtn.addEventListener("click",toggleFullScreen)

