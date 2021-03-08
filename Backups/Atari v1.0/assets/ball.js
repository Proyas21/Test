export default class Ball{
    constructor(){
        this.radius = 10;
        
        this.possition = {
            x:50,
            y:50
        }
    }

    draw(ctx){
        ctx.arc(this.possition.x, this.possition.y, this.radius, 0, Math.PI*2);
        ctx.fill();
    }
}