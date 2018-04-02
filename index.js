//Function to execute just after page is loaded
function ready(){
  console.log("ready()")
  //other stuff to do as soon as page loads goes here
}
window.onload = ready;

function menuClick(){ //deixa o menu dropdown visível ou invisível
  var dropDownMenu = document.getElementById('dropDownMenu');
  dropDownMenu.style.display = dropDownMenu.style.display == "none" ? "block" : "none";
}

//API do YouTube a partir daqui:
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// This function creates a player object
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  var videoFrame = document.getElementById('ytplayer');
  player = new YT.Player(videoFrame, {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) { //inicia o video assim que carrega
  event.target.playVideo();
}

function onPlayerStateChange(event) {//remove o video assim que ele termina
  if (event.data == YT.PlayerState.ENDED) {
    player.destroy();
  }
}

function stopVideo() {
  player.stopVideo();
}
