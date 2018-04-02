//Function to execute just after page is loaded
function ready(){
  console.log("ready()")
  //other stuff to do as soon as page loads goes here
}
window.onload = ready;

function menuClick(){
  var dropDownMenu = document.getElementById('dropDownMenu');
  dropDownMenu.style.display = dropDownMenu.style.display == "none" ? "block" : "none";
}

function stopVideo()
{
  console.log("stopVideo");
}
