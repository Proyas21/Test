export default class Paddle{
    constructor (game){
        this.height=10;
        this.width=70;
        this.limit=game.gameWidth - this.width-this.height;
        this.speed=0;
        this.maxspeed=150;
        this.game = game;
    
        this.position={
            x:game.gameWidth/2 - this.width/2,
            y:game.gameHeight - this.height*2
        }
    }

    moveLeft(){
        this.speed = -this.maxspeed;
    }


    moveRight(){
        this.speed = this.maxspeed;
    }

    stop(){
        this.speed = 0;
    }

    update(deltaTime){
        if(!deltaTime)
            return;
        if(this.position.x >= this.limit)
            this.position.x = this.limit;
        if(this.position.x <= this.height)
            this.position.x = this.height;

        this.position.x += this.speed/deltaTime;

        if(this.game.autoPlay){
            this.position.x = this.game.ball.position.x - this.width/2;
        }
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}