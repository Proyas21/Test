export default class Paddle{
    constructor (game){
        this.height=10;
        this.width=70;
        this.limit=game.width - this.width-this.height;
        this.speed=0;
        this.maxspeed=100;

        this.possition={
            x:game.width/2 - this.width/2,
            y:game.height - this.height*2
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
        if(this.possition.x >= this.limit)
            this.possition.x = this.limit;
        if(this.possition.x <= this.height)
            this.possition.x = this.height;

        this.possition.x += this.speed/deltaTime;
    }

    draw(ctx){

        ctx.fillRect(this.possition.x, this.possition.y, this.width, this.height);
        
    }
}