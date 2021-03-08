import Paddle from './paddle.js';                                             //console.log("game.js");
import Ball from './ball.js';
import InputHandler from './input.js';
import {buildLevel, level1} from './levels.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.autoPlay = 0;
        this.bricks = buildLevel(this, level1);
        this.state_Over = false;
    }

    start(){
        //console.log("game.js > start()");

        this.paddle = new Paddle(this);
        this.ball = new Ball(this, this.paddle);

        this.gameObjects = [this.paddle, this.ball, ...this.bricks];
        new InputHandler(this.paddle);
    }

    draw(ctx){
        //console.log("game.js > draw()");
        this.gameObjects.forEach((object)=>{object.draw(ctx);});
    }

    update(deltaTime){
        //console.log("game.js > update()");
        this.gameObjects = this.gameObjects.filter(objects => !objects.dead);
        this.gameObjects.forEach((object)=>{object.update(deltaTime);});

        
    }

}