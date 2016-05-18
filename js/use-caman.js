var photoCanvas = document.querySelector('#photo');

var photoCtx = photoCanvas.getContext('2d');

// GET AN IMAGE FROM FLICKR 
var image = new Image();

image.src ='http://loremflickr.com/200/200';
image.onload = function(){
	//Image is ready to be manipulated/used 

	photoCtx.drawImage(image,0,0);

}

Caman("#filters", "img/200.jpeg", function () {
  // manipulate image here
  this.sepia();
  this.brightness(-10);
  this.render();
});