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


function drawRect(){
context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 18pt Arial";
context.strokeText("Для того, чтобы открыть эту дверь нужны две  нажимные плиты", 05, 70);





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



context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

	}


function drawRect1(){

context.clearRect(0,0,800,600);

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


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);
	}




function drawEyesR(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 18pt Arial";
context.strokeText("Для того, чтобы открыть эту дверь нужны две  нажимные плиты", 05, 70);



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



context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);




}



function drawEyesR1(){

context.clearRect(0,0,800,600);
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


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

}


function drawEyesL(){

context.clearRect(0,0,800,600);
context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 18pt Arial";
context.strokeText("Для того, чтобы открыть эту дверь нужны две  нажимные плиты", 05, 70);



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

context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

}


function drawEyesL1(){

context.clearRect(0,0,800,600);
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


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

}




function drawEyesD(){

context.clearRect(0,0,800,600);

context.fillStyle = "#FF0";
context.strokeStyle = "#FF0";
context.font = "italic 18pt Arial";
context.strokeText("Для того, чтобы открыть эту дверь нужны две  нажимные плиты", 05, 70);



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

context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);


context.fillStyle = "rgb(0,255,0)";
context.fillRect(650,300,75,50);
context.fillStyle = "rgb(0,100,100)";
context.fillRect(725,300,75,50);

}

function drawEyesD1(){

context.clearRect(0,0,800,600);
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


context.fillStyle = "rgb(20,20,20)";
context.fillRect(0,300,350,300);
context.fillRect(450,300,200,300);
context.fillRect(100,150,250,50);
context.fillRect(450,150,150,50);
context.fillRect(300,90,50,100);

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


					if(x + 65 > 800 || ((e+ 60 > 435 && x + 60 > 380) && (((y + 60) > t) && (y < t +60)) && (((t + 60 > 150) && t < 200) || t + 60 > 300)) || ((a + 60 > 435 && x + 60 > 380) && (((y + 60) > s) && (y < s +60)) && (((s + 60 > 150) && s < 200) || s + 60 > 300)) ||       ((e+ 60 > 790 && x + 60 > 735) && (((y + 60) > t) && (y < t +60))) || ((a+ 60 > 790 && x + 60 > 735) && (((y + 60) > s) && (y < s+60))) || ((e + 75 > a-10 && x + 60 > a-70 && a - e > 0 && x < a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60))  || ((a + 75 > e && x + 60 > e-70 && a - e < 0 && x < e) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) || (x + 60 > 90 && x < 91) && (y + 60 > 150 && y < 200) || ((x + 60 > 440 && x < 441) && (y + 60 > 150 && y < 200)) || (x + 60 > 440 && x < 441 && y > 240) || (x + 60 > 290 && x < 291 && y + 60 > 90 && y < 190)){


					} else {
						if( /*Столкнов т-з и с-з сверху вниз(порядок неважен*/(x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x+65 > a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60)){
						} else {



						if((x+70 > e) && (x < e + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60)){
					 		x += 5;
					 		e += 5;
					 	} else{
					 		
					 		if((x+70 > a) && (x < a + 60 ) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60)){
				 				x += 5;
				 				a += 5;
				 			} else {
					 			x += 10; 

					 			if ((x >= 640) && (y >= 350)){
					 				document.location.href="win.html";
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
	

	if((x < e + 70) && (x + 60 > e) && (((y+55) || (y+35) || (y+15) || y)  >= t) && (y < t+60) && (x < a + 65) && (x + 60 > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s + 60) ||          ((x < a+70) && (x > a) && (((y+55) || (y+35) || (y+15) || y)  >= s) && (y < s+60) && (a < 355) && (a > 330) && ((s + 60 > 90 && s < 200) || s + 60> 300)) ||     ((e < a + 65 && x < e + 70 && e - a > 0 && x > a) && (((y + 60) > t) && (y < t+60)) && (t + 60 > s) && (t < s + 60))  || ((a < e + 65 && x < a + 70 && a - e > 0 && x > a) && (((y + 60) > s) && (y < s+60)) && (s + 60 > t) && (s < t + 60)) ||         (x < 610 && x > 590 && y < 200 && y + 60 > 150) || (x < 360 && x > 330 && y + 60> 90 && y < 200) || (x < 360 && y > 240) || x < 10 || ((e < 10 && x < 65) && (((y + 60) > t) && (y < t +60))) || ((a < 10 && x < 65) && (((y + 60) > s) && (y < s +60)))){

	} else {


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

 function up(){
		 	if(check) {
		 		drawRect1();
		 	}	else {
		 		drawRect();
		 	}
			 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
					check = true;
				}	else { check = false;}	
				 	if((y < t + 70) && (y + 60 > t) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y < s + 65) && (y + 60 > s) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60)     ||    y < 10 || ((t < 10 && y < 65) && (((x + 55) > e) && (x < e + 60))) || ((s < 10 && y < 65) && (((x + 55) > a) && (x < a + 60))) ||       ((t < s + 65 && y < t + 70 && t - s > 0 && y > s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60))  || ((s < t + 65 && y < s + 70 && s - t > 0 && y > s) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60)) || (y < 210 & y + 60 > 190 && ((x + 60 > 100 && x < 350) || (x + 60 > 450 && x < 600))) ||        ((t < 230 && t + 60 > 180 && y < 265 && y + 60 > 250) && (((x + 55) > e) && (x < e + 60)) && ((e + 60 > 100 && e < 350) || (e + 60 > 450 && e < 600))) ||     ((s < 230 && s + 60 > 180 && y < 265 && y + 60 > 250) && (((x + 55) > a) && (x < a + 60)) && ((a + 60 > 100 && a < 350) || (a + 60 > 450 && a < 600)))) {

				 	} else {

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

  function down(){
  	  	if(check != true && x + 60 > 600 && y + 60 > 300){
  	 	 	y -= 10;
		 } else {

			  	if(check){
			  		drawEyesD1();
			  	}	else {
			 		drawEyesD();
				 }

				 	if((e+20 > u) && (e + 10 < u + 60)  && (((t+15) || t)  >= o) && (t + 20 < o+60) && ((a+20 > d) && (a + 10 < d + 60)  && (((s+15) || s)  >= f) && (s + 20 < f+60))){
						check = true;
					}	else { check = false;}	


					 	if((y+70 > t) && (y < t + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= e) && (x < e+60) && (y+65 > s) && (y < s + 60 ) && (((x+55) || (x+35) || (x+15) || x)  >= a) && (x < a + 60)     ||     y + 65 > 600 || ((t + 65 > 600 && y + 65 > 535) && (((x + 55) > e) && (x < e + 60))) || /*Столкновение т-з ящ с ниж стеной*/((s + 65 > 600 && y + 65 > 535) && (((x + 55) > a) && (x < a + 60)))  ||      ((t + 75 > s-10 && y + 60 > s-70 && s - t > 0 && y < s) && (((x + 60) > e) && (x < e+60)) && (e + 60 > a) && (e < a + 60))  || ((s + 75 > t && y + 60 > t-70 && s - t < 0 && y < t) && (((x + 60) > a) && (x < a+60)) && (a + 60 > e) && (a < e + 60)) || (((x + 60 > 100 && x < 350) || (x + 60 > 450 && x < 600)) && (y + 60 > 140 && y < 200)) || (x + 60 > 300 && x < 350 && y + 60 > 80 && y < 100) || (x < 350 && y + 60 > 290) || (x + 60 > 450 && x < 650 && y + 60 > 290) ||     ((t + 60 > 280 && y + 60 > 230) && (((x + 55) > e) && (x < e + 60)) && (e < 350 || (e + 60 > 450))) || ((s + 60 > 280 && y + 60 > 230) && (((x + 55) > a) && (x < a + 60)) && (a < 350 || (a + 60 > 450)))) {

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
					 					document.location.href="level3.html";
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

