class Scores {
    constructor(game, position) {
        this.game = game
        this.position = position;
    }



    drawText() {
        const context = this.game.context;
        const width = this.game.width;
        const height = this.game.height;


        if (this.position === 'rightScore') {

            
            context.fillStyle = 'lightblue';
            context.font = '22px Lato';
            context.fillText(`${this.game.scoreBoard[1]}`, width / 4, height / 5);
          
        }

        if (this.position === 'leftScore') {

         
            context.fillStyle = 'lightblue';
            context.font = '22px Lato';
            context.fillText(`${this.game.scoreBoard[0]}`, 3 * width / 4, height / 5);
        }

    }
    
}
