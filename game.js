const impact = new Audio('sounds1/left.mp3');
const impact2 = new Audio('sounds1/right.mp3');
class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.paddleLeft = new Paddles(this, 100, this.height / 2 - 100 / 2, 'left');
      this.paddleRight = new Paddles(this, this.width - 100, this.height / 2 - 100 / 2, 'right');
      this.ball = new Ball(this);
      this.rightScore = new Scores(this, 'rightScore');
      this.leftScore = new Scores(this, 'leftScore');
      this.scoreBoard = [0, 0];
      this.spaceShip = new Player(this);
      this.sideBarTop = new Sides(this, 3, 3);
  
    }
  
    collision(b, p) {
  
      let ballTop = b.y - b.radius;
      let ballBottom = b.y + b.radius;
      let ballLeft = b.x - b.radius;
      let ballRight = b.x + b.radius;
  
      let paddleTop = p.y;
      let paddleBottom = p.y + p.height;
  
      if (ballLeft < 120 || ballRight > 700) {
  
        if (!(ballBottom < paddleTop || ballTop > paddleBottom)) {
          impact2.play();
          return true;
        } else {
          if (p.side === 'right') {
            this.scoreBoard[1]++;
            this.resetBall();

          } else {
            this.scoreBoard[0]++;
            this.resetBall();
          }
          impact2.play();
          return false;
        }
      } else {
        return false;
      }
  
    }
  
    resetBall() {
      this.ball.x = canvas.width / 2;
      this.ball.y = canvas.height / 2;
  
      this.ball.velocityX = 5;
      this.ball.velocityY = 0;
      this.ball.speed = 1;

      this.paddleLeft = new Paddles(this, 100, this.height / 2 - 100 / 2, 'left');
      this.paddleRight = new Paddles(this, this.width - 100, this.height / 2 - 100 / 2, 'right'); 
  
      //this.ball.velocityX = -this.ball.velocityX;
    }
  
  
    drawBackground() {
      const context = this.context;
      const width = this.width;
      const height = this.height;
  
      context.fillStyle = 'rgba(128, 120, 121, 0.2)';
      context.fillRect(0, 0, width, height);
    }

    inicializer(){
      this.loop();
    }
  
  
  
    update() {
      const context = this.context;
      const width = this.width;
      const height = this.height;
      const ball = this.ball;
      const leftPaddle = this.paddleLeft;
      const rightPaddle = this.paddleRight;
  
      // let score = [];
  
      //   if (this.ball.x - this.ball.radius < 0){
      //     //the computer win 
      //     this.score++;
      //     this.resetBall();
  
      // } else if (this.ball.x + this.ball.radius > canvas.width){
      //     // the user wins
      //     this.score++;
      //     this.resetBall();
      // }
  
  
  
      context.clearRect(0, 0, width, height);
  
  
      // boundaries on the canvas, stops ball from going out 
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
  
      if (ball.y + ball.velocityY > height || ball.y + ball.velocityY < 0) {
        ball.velocityY *= -1;
      }
  
  
      // COLISION DETECTION
  
      let player = (ball.x < width / 2) ? leftPaddle : rightPaddle;
  
      if (this.collision(ball, player)) { // COLIDIU
  
        //where the ball hit the player
        this.ball.velocityX *= -1.1;
  
        this.ball.velocityY = Math.floor(Math.random() * 10 - 5);
      }
  
  
  
    }
  
    loop(timestamp) {
  
      this.update();
      this.drawBackground();
      this.ball.draw();
      this.rightScore.drawText();
      this.leftScore.drawText();
      this.spaceShip.enemy();
      this.paddleLeft.sides();
      this.paddleRight.sides();
      this.paddleLeft.newPosition();
      this.paddleRight.newPosition();
      this.sideBarTop.roundedRect( this.width/2, this.height/2, 25, 25, 15);
      //this.incrementScore();
  
  
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
  
    }


  
  
  
  }