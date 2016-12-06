var context = document.getElementById("tabl").getContext("2d");
var x = 560;
var y = 280;
var q = 6;
var w = 20;
var e = 200;
var t = 150;
var u = 600;
var o = 400;
var g = 400;
var h = 120;

var enemyCh = false;
var enemyV = false;
var keyAlert = false;
var check = true;


function drawRect1(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Столкновение с врагом приведет к поражению", 100, 70);



context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);





context.fillStyle = "rgb(255,50,50)";
context.fillRect(g,h,80,80);



context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + w, 15, 15);



context.fillStyle = "rgb(20,20,20)";
context.fillRect(600,200,20,50);
context.fillRect(600,350,20,70);
context.fillRect(600,200,150,20);
context.fillRect(730,200,20,350);

context.fillRect(20,100,20,450);
context.fillRect(20,100,750,20);

context.fillRect(20,550,730,20);
context.fillRect(150,350,20,70);
context.fillRect(150,200,20,50);
context.fillRect(150,200,50,20);


context.fillRect(150,400,200,20);
context.fillRect(450,400,150,20);
context.fillRect(350,340,20,80);
context.fillRect(350,340,100,20);
context.fillRect(450,340,20,70);

context.fillRect(150,200,200,20);
context.fillRect(150,200,200,20);
context.fillRect(350,200,20,80);
context.fillRect(350,260,100,20);
context.fillRect(450,200,20,80);
context.fillRect(150,250,80,20);
context.fillRect(150,350,80,20);
context.fillRect(210,250,20,120);


context.fillRect(450,200,200,20);
context.fillRect(450,250,20,100);
context.fillRect(350,250,20,100);

context.fillRect(540,250,80,20);
context.fillRect(540,350,80,20);
context.fillRect(540,250,20,100);

context.fillRect(150,200,200,20);
	}





drawRect1();






 function right(){
	drawRect1();
	if(x + 65 > 800 || (x + 60 > 720 && y + 60 > 200) || (x + 60 > 440 && x < 441 && y + 60 > 200 && y < 420) || (x + 60 > 200 && x < 201 && y + 60 > 270 && y < 350)|| (x + 60 > 140 && x < 150 && ((y + 60 > 200 && y < 270) || (y + 60 > 350 && y < 420)))){
	} else {
 		x += 10; 

 		if ((x >= 720) && (y >= 120) && (y <= 200)){
 			document.location.href="level4.html";
 		}			
 	}
}


  function left(){
  	drawRect1();
	if(x < 10 || (x < 570 && x + 60 > 550 && y + 60 > 270 && y < 350) || (x < 630 && x + 60 > 600 && ((y + 60 > 220 && y < 270) || (y + 60 > 350 && y < 420))) || (x < 380 && x + 60 > 370 && y + 60 > 200 && y < 420) || x <  50){

	} else {

 		x -= 10; 

 	}	

  }

 function up(){
	drawRect1();
	if(y < 130 || (x + 60 > 560 && x < 620 && y < 280 && y + 60 > 270) || (x + 60 > 630 && x < 730 && y + 60 > 210 && y < 230) || (((x + 60 > 450 && x < 620) || ( x + 60 > 150 && x < 370)) && y < 430 && y + 60 > 410) || (x + 60 > 150 && x < 200 && y + 60 > 270 && y < 280) || (x + 60 > 350 && x < 450 && y + 60 > 360 && y < 370)) {

	} else {
		y -= 10; 
	}
 }

  function down(){
			  		drawRect1();

					 	if(y + 60 > 540 || (x < 620 && x + 60 > 140 && y + 60 > 340 && y < 360) || (((x + 60 > 150 && x < 370) ||( x + 60 > 450)) && y + 60 > 190 && y < 210) || (x + 60 > 350 && x < 450 && y + 60 > 250 && y < 260)) {

						 	} else {
							 		y += 10; 
				 		        } 	
				 			}

document.onkeypress = function checkKeycode(event)
{
	var keycode, keyChar;
	if(!event) var event = window.event;
	if (event.keyCode) keycode = event.keyCode;
	else if(event.which) keycode = event.which;
	
	keyChar=String.fromCharCode(keycode);
	if(keycode == "119" || keycode == "1094"){
		up();
	}

	if(keycode == "115" || keycode == "1099" || keycode == "1110"){
		down();
	}

	if(keycode =="100" || keycode == "1074"){
		right();
	}

	if(keycode =="97" || keycode == "1092"){
		left();
	}


	if(keyAlert) {
		testText.value= "Вы нажали клавишу " + keyChar;
	}








}




function keyA(){
	keyAlert = true;

}

function keyB(){
	keyAlert = false;
}


function startInst(){
	var start = document.getElementById('start');
	var back = document.getElementById('back');
	var inst = document.getElementById('inst');
	start.style.fontSize = "2.2vw";
	start.style.background = "rgb(50,50,50)";
	start.style.width = "80%";
  	start.style.height = "8em";
  	start.style.textAlign = "center";
  	start.style.marginLeft = "10%";
  	start.style.fontWeight = "700";
  	start.style.color = "white";
  	back.style.visibility = "visible";
  	inst.style.visibility = "hidden";
  	starti.style.marginTop = "40px"; 
  	start.style.visibility = "visible";
}

function backInst(){
	var start = document.getElementById('start');
	var back = document.getElementById('back');
	var inst = document.getElementById('inst');


	start.style.visibility = "hidden";
	back.style.visibility = "hidden";
  	inst.style.visibility = "visible";
}


window.onload = function enem(){

	setInterval(function(){
		if (g < 60 && h + 60 < 500){
			h += 6;

		}

		if (g + 60 < 680 && h + 60 > 500){
			g += 6;

		}	

		if (g + 60 > 680 && h >= 120){
			h -= 6;
		}

		if (g + 60 < 700 && h <= 120){
			g -= 6;
		}


	if(x + 60 > g && x < g + 80 && y + 60 > h && y < h + 80){
		x = 560;
		y = 280; 
	}





	},20);






}
	

setInterval(drawRect1,30);	

