
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWidth=2;

ctx.arc(150,200,50,0,2* Math.PI); 

ctx.stroke();

canvas.addEventListner("mousedown",my_mousedown);

function my_mousedown(e)
{
  color=document.getElementById("color").value;
  console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
   mouse_y=e.clientY-canvas.offsetTop;

   console.log("X="+ mouse_x +  ",Y="+ mouse_y );

   circle(mouse_x,mouse_y);


}

function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,80,0,2* Math.PI);
ctx.stroke();

}


