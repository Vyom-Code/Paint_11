var mouseEvent="empty";


canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
width=4;
radius=10;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{
    color= document.getElementById ("color").value;
    width_of_the_line= document.getElementById("line_width").value;
radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUP", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mosueUP"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)

{
    current_postion_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y= e.cilentY - canvas.offsetTop;

    if (mouseEvent=="mouseDown") 
{
        ctx.beginPath()
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_the_line;
   
    

    console.log("Current postion of x and y coordiantes");
    console.log("x= "+ current_postion_of_mouse_x + "y =" + current_postion_of_mouse_y);
    ctx.arc(current_postion_of_mouse_x, current_postion_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}


}

