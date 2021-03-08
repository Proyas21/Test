import Game from './assets/game.js';                                             //console.log("index.js");

//#region canvas things
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;
//#endregion

let game = new Game(canvas.width, canvas.height);
newGame()
function newGame(){
    game = new Game(canvas.width, canvas.height);
    game.start();
}


function gameOver(){
    //console.log("index.js > gameOver()");
    document.addEventListener("keydown", (event) => {
        switch(event.keyCode){
            case 32:
                newGame();
                break;
        }
    });
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = "30px Arial";
    ctx.fillText("Game over", canvas.width*0.4, canvas.height/2);
    ctx.font = "15px Arial";
    ctx.fillText("Press \"Space\" to start a new game", canvas.width*0.35, canvas.height*0.55);
}




let lasttime = 0;
function gameLoop(timestamp){
    //console.log("index.js > gameLoop()");
    ctx.fillStyle = '#000';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let deltaTime = timestamp-lasttime;
    lasttime = timestamp;

    game.draw(ctx);
    game.update(deltaTime);
  
    if(game.state_Over){
        gameOver();
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
