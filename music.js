
function soundClick() {
  var audio = new Audio(); 
  audio.src = 'sound.mp3'; 
  audio.autoplay = true; 
  audio.volume = 0.2;
  audio.loop = true;

}

setInterval(soundClick(),1000);
	