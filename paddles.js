
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

    

    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y >= this.height || this.y <= this.height) {
            this.speedY = 0;
        }
    }

    sides() {
        //RIGHT SIDE IMAGE AND FUNCTIONALITY
        if (this.side === 'right') {
            const context = this.game.context;
            const rightStick = new Image();
            rightStick.src = 'images/right-stick.png';
            context.drawImage(rightStick, this.x, this.y, 20, 100);
            this.controlRightPaddle();
        }

        //LEFT SIDE IMAGE AND FUNCTIONALITY
        if (this.side === 'left') {
            const context = this.game.context;
            const leftStick = new Image();
            leftStick.src = 'images/left-stick.png';
            context.drawImage(leftStick, this.x, this.y, 20, 100);
            this.controlLeftPaddle();
        }
    }

   

    controlLeftPaddle() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();

            switch (e.keyCode) {
                case 87:
                    //console.log('up', this.speedY)
                    this.speedY = -15;
                    break;
                case 83:
                    //console.log('down', this.speedY)
                    this.speedY = 15;
                    break;
            }
        });

        window.addEventListener('keyup', (e) => {
            e.preventDefault();

            switch (e.keyCode) {
                case 87:
                    //console.log('up', this.speedY)
                    this.speedY = 0;
                    break;
                case 83:
                    //console.log('down', this.speedY)
                    this.speedY = 0;
                    break;
            }
        });

        
    }

    controlRightPaddle() {
        window.addEventListener('keydown', (event) => {
            event.preventDefault();

            switch (event.keyCode) {
                case 38:
                  
                    this.speedY = -7;
                    break;
                case 40:
                    
                    this.speedY = 7;
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            event.preventDefault();

            switch (event.keyCode) {
                case 38:
                    
                    this.speedY = 0;
                    break;
                case 40:
                 
                    this.speedY = 0;
                    break;
            }
        });

    }

}

