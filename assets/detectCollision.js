export function detectCollision(ball, object){

    let bottomOfBall = ball.position.y + ball.diameter;
    let topOfBall = ball.position.y;
    let leftOfBall = ball.position.x;
    let rightOfBall = ball.position.x + ball.diameter;

    let topOfObject = object.position.y;
    let bottomOfObject = object.position.y + object.height;
    let leftOfObject = object.position.x;
    let rightOfObject = object.position.x + object.width;

    if(
        bottomOfBall >= topOfObject && 
        topOfBall <= bottomOfObject &&
        leftOfBall <= rightOfObject &&
        rightOfBall >= leftOfObject
        ){
            return true;
        } else {
            return false;
    }


}