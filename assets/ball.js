import {detectCollision} from './detectCollision.js';

export default class Ball{
    constructor(game, paddle){
        this.diameter = 30;
        this.limit = {x: game.gameWidth - paddle.height, y: game.gameHeight}
        this.invline = paddle.height;
        this.position = {x:400, y:450};
        this.speed = {x:100, y:-100};
        this.ball = document.getElementById("ball");
        this.ball.height = 100;
        this.game = game;
    }
    reset(){
        this.position = {x:400, y:450};
        this.speed = {x:0, y:0}; 
    }
    draw(ctx){
        //ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, 1);
        //ctx.fill();
        ctx.drawImage(this.ball, this.position.x-this.diameter/2, this.position.y, this.diameter, this.diameter);
    }

    update(deltaTime){
        this.position.x += this.speed.x/deltaTime;
        this.position.y += this.speed.y/deltaTime;

        if(this.position.x >= this.limit.x || this.position.x <= this.invline){
            this.speed.x *= -1;
        }
        if(this.position.y <= this.invline || detectCollision(this, this.game.paddle)){
            this.speed.y *= -1;
        }
        if(this.position.y > this.limit.y){
            console.log("It's over bro");
            this.game.state_Over = true;
            this.reset();
        }

    }
}