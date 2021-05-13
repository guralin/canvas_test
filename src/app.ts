// <>これ何？
// <> https://usefuledge.com/ts-htmlinput-element-error.html
const canvas = <HTMLCanvasElement> document.getElementById("game");
const context = <CanvasRenderingContext2D>canvas.getContext("2d");
//const canvas: HTMLCanvasElement = document.getElementById("game");
//const context:CanvasRenderingContext2D = canvas.getContext("2d");

const monitan_img = new Image();
monitan_img.src = "../src/Yb3hi6RQ_400x400.jpg";

context.fillStyle = 'green';
context.fillRect(10, 10, 150, 100);
context.drawImage(monitan_img,10,10);


