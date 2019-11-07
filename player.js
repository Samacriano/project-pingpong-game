class Player {
    constructor(game){
        this.game = game;
    }

    enemy(){
        const context = this.game.context;
        const enemyShip = new Image();
        enemyShip.src = '';
        context.drawImage(enemyShip, canvas.width/2, canvas.height/2, 100, 100);
    }

 
}

