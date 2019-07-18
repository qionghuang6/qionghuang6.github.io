const EATINGMUSTAFA = document.querySelector(".flying");
const PAGETHINGS = document.getElementsByClassName('centered');

function moveMustafa(){
  EATINGMUSTAFA.style.left = Math.floor(Math.random() * 81) + "%";
  EATINGMUSTAFA.style.top = Math.floor(Math.random() * 81) + "%";
  EATINGMUSTAFA.style.width = Math.floor(Math.random() * 31) + 10 + "vw";
  EATINGMUSTAFA.style.transform = "rotate(" + Math.floor(Math.random()*361) + "deg)";
}
var interval;
var isMoving = false;

function switchMode(e){
  e.preventDefault();
  console.log("shape shifted " + isMoving);
  if(isMoving){
    clearInterval(interval);
    interval = null;
    EATINGMUSTAFA.style.border = "";
  } else{
    interval = setInterval(moveMustafa, 1500);
    EATINGMUSTAFA.style.border = "15px solid red";
  }
  isMoving = !isMoving;
  for(i =0; i < PAGETHINGS.length; i++){
    PAGETHINGS[i].classList.toggle("hidden");
  }
}

EATINGMUSTAFA.addEventListener("click",function(e){switchMode(e);},false);
