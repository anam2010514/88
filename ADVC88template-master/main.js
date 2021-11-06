
var canvas = new fabric.Canvas("mycanvas");

ball_x = 30;
ball_y = 30;
hole_x = 400;
hole_y = 800;
 
var hole_obj = "";
var ball_obj = "";



function load_img()
	{
		fabric.Image.fromURL("golf-h.png", function(Img) {
			hole_obj = Img;
	
			hole_obj.scaleToWidth(50);
			hole_obj.scaleToHeight(50);
			hole_obj.set({
	top:hole_y,
	left:hole_x
			})
	
			canvas.add(hole_obj);
		});
	
	new_image();
}
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		ball_obj=Img;
ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >= 0)
    {
        ball_y = ball_y - hole_y;
        canvas.remove(ball_obj);
        new_image();
    }
	}

	function down()
	{
		if (ball_y <= 550)
    {
        ball_y = ball_y + hole_y;
        canvas.remove(ball_obj);
        new_image();
    }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - hole_x;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + hole_x;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	


