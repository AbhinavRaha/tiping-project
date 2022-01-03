canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90; 
background_image = "mars.jpg";

rover_image = "rover.png"; 

rover_x = 10;
rover_y = 10;

function add()
{
background_image_tag=new Image();
background_image_tag.onload=uploadBackground;
background_image_tag.src=background_image;

rover_image_tag=new Image();
rover_image_tag.onload=addRover;
rover_image_tag.src=rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function addRover()
{
    ctx.drawImage(rover_image_tag, rover_x, rover_y,rover_width, rover_height);
}


window.addEventListener("keydown",myrover);
function myrover (e)
{
var ascii_value=e.keyCode;
console.log(ascii_value);
if(ascii_value=='37')
{
left();
}
if(ascii_value=='39')
{
right();
}
if(ascii_value=='38')
{
up();
}
if(ascii_value=='40')
{
down();
}
}

function up()
{
    if(rover_y >=0) { rover_y = rover_y - 10;
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); addRover(); } 
}

function down()
{
    if(rover_y <=500) { rover_y = rover_y + 10;
         console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); addRover(); } 
}
function left()
{
    if(rover_x >=0) { rover_x = rover_x- 10;
         console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); addRover(); } 
}
function right()
{
    if(rover_x <=700) { rover_x= rover_x + 10;
         console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
    uploadBackground(); addRover(); } 
}