var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('1660969731216.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(500);
	block_image_object.scaleToHeight(500);
	block_image_object.set({
	top:0,
	left:0
	});
	canvas.add(block_image_object);
	});
	
}
function next(){
	window.location="index1.html";
	}
function playSound(){
	x.play();
}

