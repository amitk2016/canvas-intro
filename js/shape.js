var shapesCanvas = document.querySelector('#shapes');

var shapesContext = shapesCanvas.getContext('2d');

// Draw a rectangle
shapesContext.fillStyle = '#00b9ff';
shapesContext.fillRect(10, 10, 100, 20);
shapesContext.fillRect(10, 40, 150, 50);

shapesContext.fillStyle = 'rgba(100,0,0,0.5)';
shapesContext.fillRect(20, 50, 150, 50);

shapesContext.strokeStyle = '#333333';
shapesContext.lineWidth= 2;
shapesContext.moveTo(50, 150);
shapesContext.lineTo(100, 150);
shapesContext.lineTo(120,170);
shapesContext.lineTo(140,130);
shapesContext.stroke();