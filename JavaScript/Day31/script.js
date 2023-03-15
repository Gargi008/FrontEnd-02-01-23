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


