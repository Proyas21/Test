import Paddle from './paddle.js';
import Ball from './ball.js'
import InputHandler from './input.js';
//#region canvas things
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;
//#endregion

let paddle = new Paddle(canvas);
let ball = new Ball();
let input = new InputHandler(paddle);

let lasttime = 0;
paddle.draw(ctx);

function gameLoop(timestamp){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    let deltaTime = timestamp-lasttime;
    lasttime = timestamp;

    paddle.update(deltaTime);
    paddle.draw(ctx);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();