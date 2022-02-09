
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillStyle = 'rgba(255,0,0,0.2)';
ctx.fillRect(100,100,100,100);
ctx.fillStyle = 'rgba(0,0,255,0.2)';
ctx.fillRect(400,100,100,100);
ctx.fillStyle = 'rgba(0,255,0,0.5)';
ctx.fillRect(300,300,100,100);

//Line
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(300,100);
ctx.lineTo(400,300);
ctx.strokeStyle = "red";
ctx.stroke();

// Arc / Circle
// ctx.beginPath();
// ctx.arc(300,300,30,0,Math.PI * 2,false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

for (let i = 0; i < 100; i++) {
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let color = "blue";
ctx.beginPath();
ctx.arc(x,y,30,0,Math.PI * 2,false);
ctx.strokeStyle = color;
ctx.stroke();

}













