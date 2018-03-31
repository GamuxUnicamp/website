//Function to execute just after page is loaded
function ready(){
  setTimeout(function () {//make embed video disapear after it's over(56 seconds)
    document.getElementById('youtube_embed').remove();
  }, 56000);//56 seconds
  //other stuff to do as soon as page loads goes here
}
window.onload = ready;
