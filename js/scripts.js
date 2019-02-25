console.log("hello"); //you can add console.log to see if your code is actually running 
window.onload = init; //event 1 

function init(){
	window.alert('Time for pizza!');

	var title = document.getElementById("title"); 
	var title2 = document.getElementById("title2"); 
	var name ="pizza"; 
	var section1 = document.getElementById("section1"); 
	var section2 = document.getElementById("section2"); 
	var section3 = document.getElementById("section3"); 
	var section4 = document.getElementById("section4"); 
	var section5 = document.getElementById("section5"); 
	var section6 = document.getElementById("section6"); 
	var section7 = document.getElementById("section7");
	var section8 = document.getElementById("section8");  		
	var orange = true;
	var blue=false; 

		if (orange ==true){
 	title.className = "main-title enlarge";
	title.style.backgroundColor = "#ff7549"; 
	title.innerHTML ="<em>Hungry?</em>";  
	document.onscroll = function(){ //event 2 
		var scrollPos = window.scrollY; 
		var wHeight = window.innerHeight; 
		blue=false; 
		console.log(window.scrollY); 
		if (scrollPos >=10 && scrollPos <=500){
			title.innerHTML = "let's start with some plain cheese"; 
		}else if(scrollPos >= 600 && scrollPos <= 800){
	title.innerHTML = "zesty pepperoni....."; 	
		}else if(scrollPos >= 1300 && scrollPos <=1500){
	title.innerHTML = "spicy jalapeños!"; 	
		}else if(scrollPos >= 2000 && scrollPos <=2250){
	title.innerHTML = "flavourful olives"; 	
		}else if(scrollPos >= 2700 && scrollPos <=2950){
	title.innerHTML = "some SHROOMS"; 	
		}else if(scrollPos >= 3392 && scrollPos <=3500){
	title.innerHTML = "....and more cheese!"; 	
		}else {
	title.innerHTML = "  "; 	
		}
	}
}
if(blue==true){
	title2.className = "main-title2 enlarge2";
	title2.style.backgroundColor = "#49b8ff";
	title2.innerHTML ="<em>Hungry?</em>";  

	document.onscroll = function(){ //event 2 
		var scrollPos = window.scrollY; 
		var wHeight = window.innerHeight; 
		blue=true; 
		orange=false; 
		console.log(window.scrollY); 
		if (scrollPos >=10 && scrollPos <=500){
			title2.innerHTML = "tasty big cookie"; 
		}else if(scrollPos >= 600 && scrollPos <= 800){
	title2.innerHTML = "the sweetest berries"; 	
		}else if(scrollPos >= 1300 && scrollPos <=1500){
	title2.innerHTML = "crunchy green m&m's"; 	
		}else if(scrollPos >= 2000 && scrollPos <=2250){
	title2.innerHTML = "chocolatey kisses"; 	
		}else if(scrollPos >= 2700 && scrollPos <=2900){
	title2.innerHTML = "gooey marshmallows"; 	
		}else if(scrollPos >= 3392 && scrollPos <=3500){
	title2.innerHTML = "....and sprinkles to finish!"; 	
		}else {
	title2.innerHTML = "  "; 	
		}
	}
}


}