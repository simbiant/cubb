var context = document.getElementById("tabl").getContext("2d");
var x = 50;
var y = 50;
var q = 6;
var w = 39;
var e = 200;
var t = 150;
var u = 600;
var o = 400;
var xledge = x;
var tledge = -50;
var keyAlert = false;
var check = false;


function drawRect(){
context.clearRect(0,0,800,600);


context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Нужно перетащить ящик на нажимную плиту", 100, 70);
context.strokeText(" <-- ящик", e + 80, t + 50);
context.strokeText("плита -->", 450, 450);



context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);
context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);


context.fillStyle = "rgb(150,110,25)";
context.fillRect(700,100,20,120);
context.fillStyle = "rgb(20,20,20)";
context.fillRect(720,100,82,20);
context.fillRect(720,200,82,20);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 2);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 2);



context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

	}


function drawRect1(){

context.clearRect(0,0,800,600);
context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);

context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 2);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 2);



context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

	}




function drawEyesR(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Нужно перетащить ящик на нажимную плиту", 100, 70);
context.strokeText(" <-- ящик", e + 80, t + 50);
context.strokeText("плита -->", 450, 450);



context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);
context.fillStyle = "rgb(150,110,25)";
context.fillRect(700,100,20,120);

context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w + 15, y + q, 2, 15);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w + 15, y + q + 33, 2, 15);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);




}



function drawEyesR1(){

context.clearRect(0,0,800,600);
context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w + 15, y + q, 2, 15);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w + 15, y + q + 33, 2, 15);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

}


function drawEyesL(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Нужно перетащить ящик на нажимную плиту", 100, 70);
context.strokeText(" <-- ящик", e + 80, t + 50);
context.strokeText("плита -->", 450, 450);



context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);
context.fillStyle = "rgb(150,110,25)";
context.fillRect(700,100,20,120);

context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 2, 15);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q, 2, 15);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);
}


function drawEyesL1(){

context.clearRect(0,0,800,600);
context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 2, 15);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q, 2, 15);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);
}




function drawEyesD(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Нужно перетащить ящик на нажимную плиту", 100, 70);
context.strokeText(" <-- ящик", e + 80, t + 50);
context.strokeText("плита -->", 450, 450);



context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);
context.fillStyle = "rgb(150,110,25)";
context.fillRect(700,100,20,120);

context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q + 48, 15, 2);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w, y + q + 48, 15, 2);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

}

function drawEyesD1(){

context.clearRect(0,0,800,600);
context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(720,120,80,80);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,80,80);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(718,100,82,20);
context.fillRect(718,200,82,20);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + q, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + q, y + q + 48, 15, 2);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + q + 33, 15, 15);
context.fillStyle = "rgba(0, 255, 0, 0.8)";
context.fillRect(x + w, y + q + 48, 15, 2);

context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

}

drawRect();






 function right(){
 	if(check != true && ((y + 60 > 100) && (y < 220) && (x +60 > 700)) || (((y + 60 > t) && (y < t + 60) && (x + 60 > 630) && (e + 60) > 695) && (t + 60 > 100) && (t < 220))){

 	} else {


	 	if (((x + 56 > 720) && (x < 721)) && ((y + 60 > 100) && (y < 120) || ((y + 60 > 200) && (y < 220))) ) {

	 	} else {
		 	if(check){	
		 	drawEyesR1();
		 	}else {
		 		drawEyesR();
			}
				if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60)){
					check = true;
				}	else { 
						check = false;
				}	


					if(x + 65 > 800 || ((e+ 60 > 790 && x + 60 > 735) && (((y + 60) > t) && (y < t +60)))){


					} else {

						if((x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60)){
					 		x += 5;
					 		e += 5;
					 	} else{
					 		x += 10; 

					 		if ((x > 730) && (y > 118) && (y + 60 <= 200)){
					 			document.location.href="level2.html";
					 		}
				 		}

					}
			}
	}
}


  function left(){
  if(check){
  	drawEyesL1();
  } else {	
 	drawEyesL();
 }

	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60)){
		check = true;
	}	else { check = false;}	
	if(x < 10 || ((e < 10 && x < 65) && (((y + 60) > t) && (y < t +60)))){

	} else {


	if((x < e+70) && (x > e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60)){
 		x -= 5;
 		e -= 5;
 	} else{
 		x -= 10; 

 	}	
}
 }

 function up(){
 	if(check != true && (((x + 60 > 700) && (y < 220) && (y + 60 > 200)) || (((e + 60) > 700) && (x + 55 > e) && (x < e + 55) && ((t < 220) && t + 60 > 218)) && (y < 280))){

		 } else {


		 	if (((x + 60 > 720) && ((y < 220) && (y + 60 > 218) || (y < 120) && (y + 60 > 110)))) {

		 	} else {


			 	if(check) {
			 		drawRect1();
			 	}	else {
			 		drawRect();
			 	}
				 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60)){
						check = true;
					}	else { check = false;}	

					 	if(y < 10 || ((t < 10 && y < 65) && (((x + 55) > e) && (x < e + 60)))) {

					 	} else {

						 	if((y < t+70) && (y > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60)){
						 		y -= 5;
						 		t -= 5;
						 	} else{
						 		y -= 10; 

				 			}
 						}
 			}
 		}
 }

  function down(){
  	  	if(check != true && ((x + 60 > 700) && (y + 60 > 100) && (y < 120))){
  	 	 	y -= 10;
		 } else {


		 	if (((x + 60 > 720) && (y + 58 > 100) && (y < 105)) || ((x + 60 > 720) && (y + 58 > 200) && (y < 201))) {

		 	} else {


			  	if(check){
			  		drawEyesD1();
			  	}	else {
			 		drawEyesD();
				 }

				 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60)){
						check = true;
					}	else { check = false;}	


					 	if(y + 65 > 600 || ((t + 65 > 600 && y + 65 > 535) && (((x + 55) > e) && (x < e + 60)))) {

						 	} else {

							 	if((y+70 > t) && (y+60 < t+60) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60)){
							 		y += 5;
							 		t += 5;

							 	} else {

							 		y += 10; 
				 		        } 	
				 			}
					 }
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









function restart(){
var x = q;
var y = 50;
var q = 6;
var w = 39;
var e = 200;
var t = 150;
var u = 600;
var o = 400;
var xledge = x;
var tledge = -50;
var keyAlert = false;
var check = false;


drawRect();
}