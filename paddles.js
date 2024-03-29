class Paddles {
    constructor(game, x, y, side) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.widht = 20;
        this.height = 100;

        this.speedX = 0;
        this.speedY = 0;

        this.side = side;
    }


    //FUNCTION TO SET NEW POSITION FOR THE PADDLES 
    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y >= this.height || this.y <= this.height) {
            this.speedY = 0;
        }
    }

    //FUNCTION TO DESIGN THE 2 DIFFERENT PADS ON THE CANVAS
    sides() {
        //RIGHT SIDE IMAGE AND FUNCTIONALITY
        if (this.side === 'right') {
            const context = this.game.context;
            const rightStick = new Image();
            rightStick.src = 'images/right-stick.png';
            context.drawImage(rightStick, this.x, this.y, 20, 100);
        }

        //LEFT SIDE IMAGE AND FUNCTIONALITY
        if (this.side === 'left') {
            const context = this.game.context;
            const leftStick = new Image();
            leftStick.src = 'images/left-stick.png';
            context.drawImage(leftStick, this.x, this.y, 20, 100);
        }
    }

}