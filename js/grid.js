// find the grid canvas 
var gridCanvas = document.querySelector('#grid');

//get the drawing context

var gridCtx = gridCanvas.getContext('2d');

gridCtx.strokeStyle = 'red';
gridCtx.lineWidth = 1 ;

//calculate the spread
var numLines = 10;
var spread = gridCanvas.width/numLines;

for( var i = 0; i< numLines ; i++){
	gridCtx.moveTo(i*spread,0);
	gridCtx.lineTo(i*spread,gridCanvas.height);
}

for (var i = 0; i < numLines; i++) {
	gridCtx.moveTo(0, i*spread);
	gridCtx.lineTo(gridCanvas.width,i*spread);
}

gridCtx.stroke();