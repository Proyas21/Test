import {detectCollision} from './detectCollision.js'

export default class Brick{
    constructor(game, position){
        this.height = 15;
        this.width = 40;
        this.position = position;
        this.game = game;
        this.dead = false;
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(){

        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y *= -1;
            this.dead = true;        
        }
    }
}