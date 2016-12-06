var context = document.getElementById("tabl").getContext("2d");
var x = 30;
var y = 230;
var q = 6;
var w = 21;
var e = 120;
var t = 420;
var u = 350;
var o = 500;
var a = 370;
var s = 90;
var d = 350;
var f = 400;
var xledge = x;
var tledge = -50;
var keyAlert = false;
var check = false;
var greenkey1 = false;


var whitebox1 = {
	x: 150, y: 120
}

var greenPlate1 = {
	x: 30, y:100 
}

var enem = {
	x: 5, y: 322
}

var doorOut = {
	x:650, y:300
}

var greenDoor1 = {
	x:100, y:300
}

var greenDoor2 = {
	x:300, y:100
}

function drawRect(){
context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 325, 70);




context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(greenPlate1.x,greenPlate1.y,100,100);


context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);

context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);


context.fillStyle = "rgb(255,50,50)";
context.fillRect(enem.x,enem.y,80,80);


context.fillStyle = "rgb(0, 162, 232)";
context.fillRect(x, y, 60, 60);
context.fillStyle = "rgba(255, 0, 0, 0.8)";
context.fillRect(x + w, y + w, 15, 15);



context.fillStyle = "rgb(0, 255, 0)";
context.fillRect(e, t, 60, 60);

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whitebox1.x, whitebox1.y, 60, 60);



context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,100,20);
context.fillRect(200,300,100,20);
context.fillRect(300,200,20,400);
context.fillRect(300,0,20,100);


context.fillStyle = "rgb(0,255,0)";
context.fillRect(doorOut.x,doorOut.y,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(doorOut.x + 75,doorOut.y,75,50);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(greenDoor1.x,greenDoor1.y,100,20);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(greenDoor2.x,greenDoor2.y,20,100);




	}

drawRect();






 function right(){

		 	drawRect();



					if(x + 65 > 1000 || /*Белый ящик в правую стену*/  ((whitebox1.x+ 60 > 990 && x + 60 > 935) && (((y + 60) > whitebox1.y) && (y < whitebox1.y +60)))   ||  /*Светло-зеленый ящ в пр стену*/   ((e+ 60 > 990 && x + 60 > 935) && (((y + 60) > t) && (y < t +60))) || /*Темно-зеленый ящ в пр стену*/ ((a+ 60 > 990 && x + 60 > 935) && (((y + 60) > s) && (y < s+60))) || /*Столкновен с-з и т-з*/ ((e + 75 > a-10 && x + 60 > a-70 && a - e > 0 && x < a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60))  || /*Столкновен т-з и с-з*/ ((a + 75 > e && x + 60 > e-70 && a - e < 0 && x < e) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) || /*Столкновен бел и т-з*/ ((whitebox1.x + 75 > a-10 && x + 60 > a-70 && a - whitebox1.x > 0 && x < a) && (((y + 60) > whitebox1.y) && (y < whitebox1.y+60)) && (whitebox1.y + 60 > s) && (whitebox1.y < s + 60))  || /*Столкновен т-з и бел*/ ((a + 75 > whitebox1.x && x + 60 > whitebox1.x-70 && a - whitebox1.x < 0 && x < whitebox1.x) && (((y + 60) > s) && (y < s+60)) && (s + 60 > whitebox1.y) && (s < whitebox1.y + 60))  || /*Столкновен бел и т-з*/ ((whitebox1.x + 75 > e-10 && x + 60 > e-70 && e - whitebox1.x > 0 && x < e) && (((y + 60) > whitebox1.y) && (y < whitebox1.y+60)) && (whitebox1.y + 60 > t) && (whitebox1.y < t + 60))  || /*Столкновен т-з и бел*/ ((e + 75 > whitebox1.x && x + 60 > whitebox1.x-70 && e - whitebox1.x < 0 && x < whitebox1.x) && (((y + 60) > t) && (y < t + 60)) && (t + 60 > whitebox1.y) && (t < whitebox1.y + 60))){


					} else {
						if( /*Столкнов т-з и с-з сверху вниз(порядок неважен*/(x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x+65 >= a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60) || /*Столкнов бел и с-з сверху вниз(порядок неважен*/(x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x+65 >= whitebox1.x) && (x < whitebox1.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y + 60) || /*Столкнов бел и т-з сверху вниз(порядок неважен*/(x+70 > a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s+60) && (x+65 >= whitebox1.x) && (x < whitebox1.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y + 60)){
						} else {

						if((x+70 > whitebox1.x) && (x < whitebox1.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y+60)){
					 		x += 5;
					 		whitebox1.x += 5;
					 	} else{



						if((x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60)){
					 		x += 5;
					 		e += 5;
					 	} else{
					 		
					 		if((x+70 > a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60)){
				 				x += 5;
				 				a += 5;
				 			} else {
					 			x += 10; 

					 			if ((x >= 1000) && (y >= 600)){
					 				document.location.href="win.html";
					 			}
					 		}
					 	}
				 		}
				 	}
				 

					}
}


  function left(){
  if(check == true && x < 650 && x > 600 && y + 60 > 300){

  } else {


 	drawRect();

	

	if( /* т-з и с-з ящ сверху вниз(порядок неважен)*/(x < e + 70) && (x + 60 > e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x < a + 65) && (x + 60 > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60) || /* бел и с-з ящ сверху вниз(порядок неважен)*/(x < e + 70) && (x + 60 >= e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x <= whitebox1.x + 65) && (x + 60 > whitebox1.x) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y + 60) || /* т-з и бел ящ сверху вниз(порядок неважен)*/(x < whitebox1.x + 70) && (x + 60 >= whitebox1.x) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y+60) && (x <= a + 65) && (x + 60 > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60)   ||            /*столкновен т-з и с-з*/  ((e < a + 65 && x < e + 70 && e - a > 0 && x > a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60)) || /*столкновен т-з и бел*/  ((whitebox1.x < a + 65 && x < whitebox1.x + 70 && whitebox1.x - a > 0 && x > a) && (((y + 60) > whitebox1.y) && (y < whitebox1.y+60)) && (whitebox1.y + 60 > s) && (whitebox1.y < s + 60))  || /*столкновен бел и т-з*/  ((a < whitebox1.x + 65 && x < a + 70 && a - whitebox1.x > 0 && x > whitebox1.x) && (((y + 60) > s) && (y < s+60)) && (s + 60 > whitebox1.y) && (s < whitebox1.y + 60))  || /*столкновен с-з и бел*/  ((whitebox1.x < e + 65 && x < whitebox1.x + 70 && whitebox1.x - e > 0 && x > e) && (((y + 60) > whitebox1.y) && (y < whitebox1.y+60)) && (whitebox1.y + 60 > t) && (whitebox1.y < t + 60))  || /*столкновен бел и с-з*/  ((e < whitebox1.x + 65 && x < e + 70 && e - whitebox1.x > 0 && x > whitebox1.x) && (((y + 60) > t) && (y < t+60)) && (t + 60 > whitebox1.y) && (t < whitebox1.y + 60)) || /*Столкновение с-з и т-з*/((a < e + 65 && x < a + 70 && a - e > 0 && x > a) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) ||  x <= 0 || /*с-з ящ в лев стену*/((e < 10 && x < 65) && (((y + 60) > t) && (y < t +60))) || /*с-з ящ в лев стену*/((whitebox1.x < 10 && x < 65) && (((y + 60) > whitebox1.y) && (y < whitebox1.y +60)))  || /*т-з ящ в лев стену*/((a < 10 && x < 65) && (((y + 60) > s) && (y < s +60)))){

	} else {

		if((x < whitebox1.x+70) && (x > whitebox1.x) && (((y+55) || (y+35) || (y+15) || y)  >= whitebox1.y) && (y < whitebox1.y+60)){
	 		x -= 5;
	 		whitebox1.x -= 5;
	 	} else{
			if((x < e+70) && (x > e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60)){
		 		x -= 5;
		 		e -= 5;
		 	} else{
		 		if((x < a+70) && (x > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s+60)){
		 			x -= 5;
		 			a -= 5;

		 		} else {
		 		x -= 10; 

	 	}	
	 }
	}
}
}
}

 function up(){

		 		drawRect();


				 	if( /* Столкновение т-з и с-з ящика справа налево(порядок не важен)*/ (y < t + 70) && (y + 60 > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y < s + 65) && (y + 60 > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) || /* Столкновение т-з и бел ящика справа налево(порядок не важен)*/ (y <= whitebox1.y + 70) && (y + 60 >= whitebox1.y) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x <= whitebox1.x+60) && (y < s + 65) && (y + 60 > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) || /* Столкновение бел и с-з ящика справа налево(порядок не важен)*/ (y < t + 70) && (y + 60 > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y <= whitebox1.y + 65) && (y + 60 >= whitebox1.y) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x < whitebox1.x + 60)    ||             y < 10 || /*Столкновен с-з ящ с верх стеной*/((t < 10 && y < 65) && (((x + 55) > e) && (x < e + 60))) || /*Столкновен с-з ящ с верх стеной*/((whitebox1.y < 10 && y < 65) && (((x + 55) > whitebox1.x) && (x < whitebox1.x + 60))) || /*Столкновен т-з ящ с верх стеной*/ ((s < 10 && y < 65) && (((x + 55) > a) && (x < a + 60))) ||     /*Столкновение т-з и с-з*/  ((t < s + 65 && y < t + 70 && t - s > 0 && y > s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60)) || /*Столкновение бел и с-з*/  ((t < whitebox1.y + 65 && y < t + 70 && t - whitebox1.y > 0 && y > whitebox1.y) && (((x + 60) > e) && (x < e+60)) && (e + 60 > whitebox1.x) && (e < whitebox1.x + 60)) || /*Столкновение т-з и бел*/  ((whitebox1.y < s + 65 && y < whitebox1.y + 70 && whitebox1.y - s > 0 && y > s) && (((x + 60) > whitebox1.x) && (x < whitebox1.x+60)) && (whitebox1.x + 60 > a) && (whitebox1.x < a + 60))   ||  /*Столкновение с-з и т-з*/((s < t + 65 && y < s + 70 && s - t > 0 && y > s) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60)) || /*Столкновение с-з и бел*/((whitebox1.y < t + 65 && y < whitebox1.y + 70 && whitebox1.y - t > 0 && y > whitebox1.y) && (((x + 60) > whitebox1.x) && (x < whitebox1.x + 60)) && (whitebox1.x + 60 > e) && (whitebox1.x < e + 60)) || /*Столкновение бел и т-з*/((s < whitebox1.y + 65 && y < s + 70 && s - whitebox1.y > 0 && y > s) && (((x + 60) > a) && (x < a+60)) && (a + 60 > whitebox1.x) && (a < whitebox1.x + 60))) {

				 	} else {

				 			if((y < whitebox1.y+70) && (y > whitebox1.y) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x < whitebox1.x+60)){
					 		y -= 5;
					 		whitebox1.y -= 5;
					 	} else{
					 	if((y < t+70) && (y > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60)){
					 		y -= 5;
					 		t -= 5;
					 	} else{
					 		if((y < s+70) && (y > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a+60)){
					 			y -= 5;
					 			s -= 5;
					 		} else {
						 		y -= 10; 

				 			}
						}
 					}
 				}

 }

  function down(){
 	  	if((x + 60 > greenDoor1.x && x < greenDoor1.x + 100 && y + 65 >= greenDoor1.y && y <= greenDoor1.y + 10) || (/*Столкновение бел ящ с ниж стеной*/((whitebox1.y + 65 > greenDoor1.y && y + 65 > greenDoor1.y - 65 ) && (((x + 60) > whitebox1.x) && (x < whitebox1.x + 60))) && whitebox1.x + 60 > greenDoor1.x && whitebox1.x < greenDoor1.x + 100 && whitebox1.y + 60 >= greenDoor1.y && whitebox1.y < greenDoor1.y + 15)       || (/*Столкновение с-з ящ с ниж стеной*/((t + 65 > greenDoor1.y && y + 65 > greenDoor1.y - 65 ) && (((x + 60) > e) && (x < e + 60))) && e + 60 > greenDoor1.x && e < greenDoor1.x + 100  && t + 60 >= greenDoor1.y && t < greenDoor1.y + 15)   ){

		 } else {

			 		drawRect();
				



						 	if( ((x < 100 || (x + 60 > 200 && x <= 300)) && y + 60 >= 300 && y <=302) || /*Столкновение с-з и т-з справа налево(порядок не важен)*/(y+70 > t) && (y < t + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y+65 > s) && (y < s + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) ||  /*Столкновение бел и т-з справа налево(порядок не важен)*/(y+70 >= whitebox1.y) && (y <= whitebox1.y + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x <= whitebox1.x+60) && (y+65 > s) && (y < s + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60)  || /*Столкновение с-з и бел справа налево(порядок не важен)*/(y+70 > t) && (y < t + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y+65 > whitebox1.y) && (y < whitebox1.y + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x <= whitebox1.x + 60) ||   y + 65 > 600 || /*Столкновение с-з ящ с ниж стеной*/((t + 65 > 600 && y + 65 > 535) && (((x + 55) > e) && (x < e + 60))) || /*Столкновение т-з ящ с ниж стеной*/((s + 65 > 600 && y + 65 > 535) && (((x + 55) > a) && (x < a + 60))) || /*Столкновение бел ящ с ниж стеной*/((whitebox1.y + 65 > 600 && y + 65 > 535) && (((x + 60) > whitebox1.x) && (x < whitebox1.x + 60))) ||     /*Столкновение с-з и т-з*/ ((t + 75 > s-10 && y + 60 > s-70 && s - t > 0 && y < s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60))  || /*Столкновенипе т-з и с-з*/((s + 75 > t && y + 60 > t-70 && s - t < 0 && y < t) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60))  || /*Столкновение бел и т-з*/ ((whitebox1.y + 75 > s-10 && y + 60 > s-70 && s - whitebox1.y > 0 && y < s) && (((x + 60) > whitebox1.x) && (x < whitebox1.x+60)) && (whitebox1.x + 60 > a) && (whitebox1.x < a + 60))  || /*Столкновенипе т-з и бел*/((s + 75 > whitebox1.y && y + 60 > whitebox1.y-70 && s - whitebox1.y < 0 && y < whitebox1.y) && (((x + 60) > a) && (x < a+60)) && (a + 60 > whitebox1.x) && (a < whitebox1.x + 60)) || /*Столкновение с-з и бел*/ ((t + 75 > whitebox1.y-10 && y + 60 > whitebox1.y-70 && whitebox1.y - t > 0 && y < whitebox1.y) && (((x + 60) > e) && (x < e+60)) && (e + 60 > whitebox1.x) && (e < whitebox1.x + 60))  || /*Столкновенипе бел и с-з*/((whitebox1.y + 75 > t && y + 60 > t-70 && whitebox1.y - t < 0 && y < t) && (((x + 60) > whitebox1.x) && (x < whitebox1.x+60)) && (whitebox1.x + 60 > e) && (whitebox1.x < e + 60))) {

							 	} else {
							 			if((y+70 > whitebox1.y) && (y+60 < whitebox1.y+60) && (((x+55) || (x+35) || (x+15) || x)  >= whitebox1.x) && (x < whitebox1.x+60)){
								 		y += 5;
								 		whitebox1.y += 5;

								 	} else {
								 	if((y+70 > t) && (y+60 < t+60) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60)){
								 		y += 5;
								 		t += 5;

								 	} else {
								 		if((y+70 > s) && (y+60 < s + 60) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60)){
								 		y += 5;
								 		s += 5;

								 	} else {

								 		y += 10; 

								 		if ((x >= 650) && (y >= 350)){
						 					document.location.href="level5.html";
						 		}
					 		        } 	
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




function checkC(){
	if(((whitebox1.x+20 > greenPlate1.x) && (whitebox1.x + 10 < greenPlate1.x + 60)  && (((whitebox1.y+15) || whitebox1.y)  >= greenPlate1.y) && (whitebox1.x + 20 < greenPlate1.y+60) || (e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60))     &&     (((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))   ||   ((whitebox1.x+20 > d) && (whitebox1.x + 10 < d + 60)  && (((whitebox1.y+15) || whitebox1.y)  >= f) && (whitebox1.y + 20 < f+60)))){
		check = true;
	}	else { 
		check = false;
	}


	if((whitebox1.x+20 > greenPlate1.x) && (whitebox1.x + 10 < greenPlate1.x + 60)  && (((whitebox1.y+15) || whitebox1.y)  >= greenPlate1.y) && (whitebox1.x + 20 < greenPlate1.y+60) || (e+20 > greenPlate1.x) && (e + 10 < greenPlate1.x + 60)  && (((t+15) || t)  >= greenPlate1.y) && (t + 20 < greenPlate1.y+60)){
		greenkey1 = true;
	} else {
		greenkey1 = false;	
	}
}


setInterval(checkC,30);



window.onload = function enemy(){

	setInterval(function(){
		if (enem.x <= 5 && enem.y + 60 <= 580){
			enem.y += 5;

		}

		if (enem.x + 60 <= 277 && enem.y + 60 >= 580){
			enem.x += 5;

		}	

		if (enem.x + 60 >= 277 && enem.y >= 322){
			enem.y -= 5;
		}

		if (enem.x + 60 <= 700 && enem.y <= 322){
			enem.x -= 5;
		}


	if(x + 60 > enem.x && x < enem.x + 80 && y + 60 > enem.y && y < enem.y + 80){
		x = 200;
		y = 230;
		w = 21;
		e = 120;
		t = 420;
		u = 350;
		o = 500;
		a = 370;
		s = 90;
		d = 350;
		f = 400;
		keyAlert = false;
		check = false;
		greenkey1 = false; 
		whitebox1.x = 150;
		whitebox1.y = 120;

	}

	if(e + 60 > enem.x && e < enem.x + 80 && t + 60 > enem.y && t < enem.y + 80){
		e = 120;
		t = 420;

	}


	if(whitebox1.x + 60 > enem.x && whitebox1.x < enem.x + 80 && whitebox1.y + 60 > enem.y && whitebox1.y < enem.y + 80){
		whitebox1.x = 150;
		whitebox1.y = 120;

	}



	if(x + 60 > e && x < e + 60 && y + 60 > t && y < t + 60){
		y += 60;
	}

	if(x + 60 > whitebox1.x && x < whitebox1.x + 60 && y + 60 > whitebox1.y && y < whitebox1.y + 60){
		y += 60;
	}



		if(check){
			 while(doorOut.x > 500){
			 	doorOut.x--;
			}
		} else {
			while(doorOut.x <= 650){
			 	doorOut.x++;
			}
		}


		if(greenkey1){
			while(greenDoor1.x >= 0){
				greenDoor1.x--;
			}
		} else {
			while(greenDoor1.x <= 100){
				greenDoor1.x++;
			}
		}


		if(greenkey1){
			while(greenDoor2.y >= 0){
				greenDoor2.y--;
			}
		} else {
			while(greenDoor2.y <= 100){
				greenDoor2.y++;
			}
		}


	},20);






}
	


	setInterval(drawRect,30);
