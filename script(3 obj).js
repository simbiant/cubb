var context = document.getElementById("tabl").getContext("2d");
var x = 50;
var y = 230;
var q = 6;
var w = 39;
var e = 370;
var t = 210;
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



var whiteBox = {
	x: 100, y: 100
}


function drawRect(){
context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);




context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);
context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);

context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);



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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);



context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);


context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

	}


function drawRect1(){

context.clearRect(0,0,1000,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);



context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);



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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

	}




function drawEyesR(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);


context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);


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


context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);

context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);


context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);




}



function drawEyesR1(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);



context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);



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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

}


function drawEyesL(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);



context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);

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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

}


function drawEyesL1(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);


context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);


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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);


context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

}




function drawEyesD(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);


context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);

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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

}

function drawEyesD1(){

context.clearRect(0,0,1000,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 20pt Arial";
context.strokeText("Белый ящик можно ставить на любую плиту", 200, 70);


context.fillStyle = "rgba(0,255,0,0.2)";
context.fillRect(u,o,100,100);

context.fillStyle = "rgba(0,100,100,0.2)";
context.fillRect(d,f,100,100);


context.fillStyle = "rgba(255,0,0,0.2)";
context.fillRect(650,350,150,250);


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

context.fillStyle = "rgb(0, 100, 100)";
context.fillRect(a, s, 60, 60);

context.fillStyle = "rgb(255, 255, 255)";
context.fillRect(whiteBox.x, whiteBox.y, 60, 60);


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);

}

drawRect();






 function right(){
		 	if(check){	
		 	drawEyesR1();
		 	}else {
		 		drawEyesR();
			}
				if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) &&  	((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
					check = true;
				}	else { 
						check = false;
				}	


					if(x + 65 > 1000 || /*Белый ящик в правую стену*/  ((whiteBox.x+ 60 > 990 && x + 60 > 935) && (((y + 60) > whiteBox.y) && (y < whiteBox.y +60)))   ||  /*Светло-зеленый ящ в пр стену*/   ((e+ 60 > 990 && x + 60 > 935) && (((y + 60) > t) && (y < t +60))) || /*Темно-зеленый ящ в пр стену*/ ((a+ 60 > 990 && x + 60 > 935) && (((y + 60) > s) && (y < s+60))) || /*Столкновен с-з и т-з*/ ((e + 75 > a-10 && x + 60 > a-70 && a - e > 0 && x < a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60))  || /*Столкновен т-з и с-з*/ ((a + 75 > e && x + 60 > e-70 && a - e < 0 && x < e) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) || /*Столкновен бел и т-з*/ ((whiteBox.x + 75 > a-10 && x + 60 > a-70 && a - whiteBox.x > 0 && x < a) && (((y + 60) > whiteBox.y) && (y < whiteBox.y+60)) && (whiteBox.y + 60 > s) && (whiteBox.y < s + 60))  || /*Столкновен т-з и бел*/ ((a + 75 > whiteBox.x && x + 60 > whiteBox.x-70 && a - whiteBox.x < 0 && x < whiteBox.x) && (((y + 60) > s) && (y < s+60)) && (s + 60 > whiteBox.y) && (s < whiteBox.y + 60))  || /*Столкновен бел и т-з*/ ((whiteBox.x + 75 > e-10 && x + 60 > e-70 && e - whiteBox.x > 0 && x < e) && (((y + 60) > whiteBox.y) && (y < whiteBox.y+60)) && (whiteBox.y + 60 > t) && (whiteBox.y < t + 60))  || /*Столкновен т-з и бел*/ ((e + 75 > whiteBox.x && x + 60 > whiteBox.x-70 && e - whiteBox.x < 0 && x < whiteBox.x) && (((y + 60) > t) && (y < t + 60)) && (t + 60 > whiteBox.y) && (t < whiteBox.y + 60))){


					} else {
						if( /*Столкнов т-з и с-з сверху вниз(порядок неважен*/(x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x+65 >= a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60) || /*Столкнов бел и с-з сверху вниз(порядок неважен*/(x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x+65 >= whiteBox.x) && (x < whiteBox.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y + 60) || /*Столкнов бел и т-з сверху вниз(порядок неважен*/(x+70 > a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s+60) && (x+65 >= whiteBox.x) && (x < whiteBox.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y + 60)){
						} else {

						if((x+70 > whiteBox.x) && (x < whiteBox.x + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y+60)){
					 		x += 5;
					 		whiteBox.x += 5;
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

  if(check){
  	drawEyesL1();
  } else {	
 	drawEyesL();
  }

	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60)) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
		check = true;
	}	else { check = false;}	
	

	if( /* т-з и с-з ящ сверху вниз(порядок неважен)*/(x < e + 70) && (x + 60 > e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x < a + 65) && (x + 60 > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60) || /* бел и с-з ящ сверху вниз(порядок неважен)*/(x < e + 70) && (x + 60 >= e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x <= whiteBox.x + 65) && (x + 60 > whiteBox.x) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y + 60) || /* т-з и бел ящ сверху вниз(порядок неважен)*/(x < whiteBox.x + 70) && (x + 60 >= whiteBox.x) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y+60) && (x <= a + 65) && (x + 60 > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60)   ||            /*столкновен т-з и с-з*/  ((e < a + 65 && x < e + 70 && e - a > 0 && x > a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60)) || /*столкновен т-з и бел*/  ((whiteBox.x < a + 65 && x < whiteBox.x + 70 && whiteBox.x - a > 0 && x > a) && (((y + 60) > whiteBox.y) && (y < whiteBox.y+60)) && (whiteBox.y + 60 > s) && (whiteBox.y < s + 60))  || /*столкновен бел и т-з*/  ((a < whiteBox.x + 65 && x < a + 70 && a - whiteBox.x > 0 && x > whiteBox.x) && (((y + 60) > s) && (y < s+60)) && (s + 60 > whiteBox.y) && (s < whiteBox.y + 60))  || /*столкновен с-з и бел*/  ((whiteBox.x < e + 65 && x < whiteBox.x + 70 && whiteBox.x - e > 0 && x > e) && (((y + 60) > whiteBox.y) && (y < whiteBox.y+60)) && (whiteBox.y + 60 > t) && (whiteBox.y < t + 60))  || /*столкновен бел и с-з*/  ((e < whiteBox.x + 65 && x < e + 70 && e - whiteBox.x > 0 && x > whiteBox.x) && (((y + 60) > t) && (y < t+60)) && (t + 60 > whiteBox.y) && (t < whiteBox.y + 60)) || /*Столкновение с-з и т-з*/((a < e + 65 && x < a + 70 && a - e > 0 && x > a) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) ||  x <= 0 || /*с-з ящ в лев стену*/((e < 10 && x < 65) && (((y + 60) > t) && (y < t +60))) || /*с-з ящ в лев стену*/((whiteBox.x < 10 && x < 65) && (((y + 60) > whiteBox.y) && (y < whiteBox.y +60)))  || /*т-з ящ в лев стену*/((a < 10 && x < 65) && (((y + 60) > s) && (y < s +60)))){

	} else {

		if((x < whiteBox.x+70) && (x > whiteBox.x) && (((y+55) || (y+35) || (y+15) || y)  >= whiteBox.y) && (y < whiteBox.y+60)){
	 		x -= 5;
	 		whiteBox.x -= 5;
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
		 	if(check) {
		 		drawRect1();
		 	}	else {
		 		drawRect();
		 	}
			 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
					check = true;
				}	else { check = false;}	
				 	if( /* Столкновение т-з и с-з ящика справа налево(порядок не важен)*/ (y < t + 70) && (y + 60 > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y < s + 65) && (y + 60 > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) || /* Столкновение т-з и бел ящика справа налево(порядок не важен)*/ (y <= whiteBox.y + 70) && (y + 60 >= whiteBox.y) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x <= whiteBox.x+60) && (y < s + 65) && (y + 60 > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) || /* Столкновение бел и с-з ящика справа налево(порядок не важен)*/ (y < t + 70) && (y + 60 > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y <= whiteBox.y + 65) && (y + 60 >= whiteBox.y) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x < whiteBox.x + 60)    ||             y < 10 || /*Столкновен с-з ящ с верх стеной*/((t < 10 && y < 65) && (((x + 55) > e) && (x < e + 60))) || /*Столкновен с-з ящ с верх стеной*/((whiteBox.y < 10 && y < 65) && (((x + 55) > whiteBox.x) && (x < whiteBox.x + 60))) || /*Столкновен т-з ящ с верх стеной*/ ((s < 10 && y < 65) && (((x + 55) > a) && (x < a + 60))) ||     /*Столкновение т-з и с-з*/  ((t < s + 65 && y < t + 70 && t - s > 0 && y > s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60)) || /*Столкновение бел и с-з*/  ((t < whiteBox.y + 65 && y < t + 70 && t - whiteBox.y > 0 && y > whiteBox.y) && (((x + 60) > e) && (x < e+60)) && (e + 60 > whiteBox.x) && (e < whiteBox.x + 60)) || /*Столкновение т-з и бел*/  ((whiteBox.y < s + 65 && y < whiteBox.y + 70 && whiteBox.y - s > 0 && y > s) && (((x + 60) > whiteBox.x) && (x < whiteBox.x+60)) && (whiteBox.x + 60 > a) && (whiteBox.x < a + 60))   ||  /*Столкновение с-з и т-з*/((s < t + 65 && y < s + 70 && s - t > 0 && y > s) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60)) || /*Столкновение с-з и бел*/((whiteBox.y < t + 65 && y < whiteBox.y + 70 && whiteBox.y - t > 0 && y > whiteBox.y) && (((x + 60) > whiteBox.x) && (x < whiteBox.x + 60)) && (whiteBox.x + 60 > e) && (whiteBox.x < e + 60)) || /*Столкновение бел и т-з*/((s < whiteBox.y + 65 && y < s + 70 && s - whiteBox.y > 0 && y > s) && (((x + 60) > a) && (x < a+60)) && (a + 60 > whiteBox.x) && (a < whiteBox.x + 60))) {

				 	} else {

				 			if((y < whiteBox.y+70) && (y > whiteBox.y) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x < whiteBox.x+60)){
					 		y -= 5;
					 		whiteBox.y -= 5;
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
  	  	if(check != true && y > 600){

		 } else {

			  	if(check){
			  		drawEyesD1();
			  	}	else {
			 		drawEyesD();
				 }

				 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
						check = true;
					}	else { check = false;}	


					 	if( /*Столкновение с-з и т-з справа налево(порядок не важен)*/(y+70 > t) && (y < t + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y+65 > s) && (y < s + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60) ||  /*Столкновение бел и т-з справа налево(порядок не важен)*/(y+70 >= whiteBox.y) && (y <= whiteBox.y + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x <= whiteBox.x+60) && (y+65 > s) && (y < s + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60)  || /*Столкновение с-з и бел справа налево(порядок не важен)*/(y+70 > t) && (y < t + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y+65 > whiteBox.y) && (y < whiteBox.y + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x <= whiteBox.x + 60) ||   y + 65 > 600 || /*Столкновение с-з ящ с ниж стеной*/((t + 65 > 600 && y + 65 > 535) && (((x + 55) > e) && (x < e + 60))) || /*Столкновение т-з ящ с ниж стеной*/((s + 65 > 600 && y + 65 > 535) && (((x + 55) > a) && (x < a + 60))) || /*Столкновение бел ящ с ниж стеной*/((whiteBox.y + 65 > 600 && y + 65 > 535) && (((x + 55) > whiteBox.x) && (x < whiteBox.x + 60))) ||     /*Столкновение с-з и т-з*/ ((t + 75 > s-10 && y + 60 > s-70 && s - t > 0 && y < s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60))  || /*Столкновенипе т-з и с-з*/((s + 75 > t && y + 60 > t-70 && s - t < 0 && y < t) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60))  || /*Столкновение бел и т-з*/ ((whiteBox.y + 75 > s-10 && y + 60 > s-70 && s - whiteBox.y > 0 && y < s) && (((x + 60) > whiteBox.x) && (x < whiteBox.x+60)) && (whiteBox.x + 60 > a) && (whiteBox.x < a + 60))  || /*Столкновенипе т-з и бел*/((s + 75 > whiteBox.y && y + 60 > whiteBox.y-70 && s - whiteBox.y < 0 && y < whiteBox.y) && (((x + 60) > a) && (x < a+60)) && (a + 60 > whiteBox.x) && (a < whiteBox.x + 60)) || /*Столкновение с-з и бел*/ ((t + 75 > whiteBox.y-10 && y + 60 > whiteBox.y-70 && whiteBox.y - t > 0 && y < whiteBox.y) && (((x + 60) > e) && (x < e+60)) && (e + 60 > whiteBox.x) && (e < whiteBox.x + 60))  || /*Столкновенипе бел и с-з*/((whiteBox.y + 75 > t && y + 60 > t-70 && whiteBox.y - t < 0 && y < t) && (((x + 60) > whiteBox.x) && (x < whiteBox.x+60)) && (whiteBox.x + 60 > e) && (whiteBox.x < e + 60))) {

						 	} else {
						 			if((y+70 > whiteBox.y) && (y+60 < whiteBox.y+60) && (((x+55) || (x+35) || (x+15) || x)  >= whiteBox.x) && (x < whiteBox.x+60)){
							 		y += 5;
							 		whiteBox.y += 5;

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

