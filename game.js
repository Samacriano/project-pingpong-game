class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.paddleLeft = new Paddles(this, 0, this.height / 2 - 100 / 2, 'left');
      this.paddleRight = new Paddles(this, this.width - 20, this.height / 2 - 100 / 2, 'right');
      this.ball = new Ball(this);
      this.rightScore = new Scores(this, 'rightScore');
      this.leftScore = new Scores(this, 'leftScore');
      this.scoreBoard = [0, 0];
      this.loop();
  
    }
  
    collision(b, p) {
  
      let ballTop = b.y - b.radius;
      let ballBottom = b.y + b.radius;
      let ballLeft = b.x - b.radius;
      let ballRight = b.x + b.radius;
  
      let paddleTop = p.y;
      let paddleBottom = p.y + p.height;
  
      if (ballLeft < 21 || ballRight > 779) {
  
        if (!(ballBottom < paddleTop || ballTop > paddleBottom)) {
          return true;
        } else {
          if (p.side === 'right') {
            this.scoreBoard[1]++;
            this.resetBall();
          } else {
            this.scoreBoard[0]++;
            this.resetBall();
          }
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
  
      //this.ball.velocityX = -this.ball.velocityX;
    }
  
  
    drawBackground() {
      const context = this.context;
      const width = this.width;
      const height = this.height;
  
      context.fillStyle = 'rgba(4, 86, 160, 0.5)'; // transparent
      context.fillRect(0, 0, width, height);
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
      this.paddleLeft.sides();
      this.paddleRight.sides();
      this.paddleLeft.newPosition();
      this.paddleRight.newPosition();
      //this.incrementScore();
  
  
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
  
    }
  
  
  
  }