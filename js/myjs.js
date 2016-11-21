var imagecount = 1;
var total = 4;
var suivant = document.getElementById('suivant');
var retour = document.getElementById('precedent');
var num1 = document.getElementById('img1');
var num2 = document.getElementById('img2');
var num3 = document.getElementById('img3');
var num4 = document.getElementById('img4');
s = 1;
r = -1;
var Image = document.getElementById('img');


// slider avant/arriere

function slide(x) {
	
	imagecount = imagecount + x;
	if(imagecount > total) {
		imagecount = 1;
	};
	if (imagecount < 1) {
		imagecount = total;
	};
	Image.src = 'photos/img' + imagecount + ".jpg";


}

// defilement auto


document.getElementById('start').onclick = function () {
	console.log('slider start');
slideA = setInterval(function (){

	
	imagecount = imagecount + 1;
	if(imagecount > total) {
		imagecount = 1;
	};
	if (imagecount < 1) {
		imagecount = total;
	};
	Image.src = 'photos/img' + imagecount + ".jpg";
}, 1500);
};


// Stopper deplacement 


 document.getElementById("stop").onclick = function () {
    clearInterval(slideA);
	console.log('slider arrete')
  };


// Click sur suivant et précédent 

  suivant.onclick = function () {
	  slide(s);
  };

  retour.onclick = function () {
	  slide(r);
  };

// Click sur le numéro des images

num1.onclick = function () {
	Image.src = 'photos/img' + 1 + ".jpg";
};
num2.onclick = function () {
	Image.src = 'photos/img' + 2 + ".jpg";
};
num3.onclick = function () {
	Image.src = 'photos/img' + 3 + ".jpg";
};
num4.onclick = function () {
	Image.src = 'photos/img' + 4 + ".jpg";
};