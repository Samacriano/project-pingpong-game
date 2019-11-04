class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.paddle = new LeftPaddle(this);
      this.paddleRight = new RightPaddle(this);
      this.ball = new Ball(this);
      this.loop();
    }
  
    drawBackground() {
      const context = this.context;
      const width = this.width;
      const height = this.height;
      
      context.fillStyle = 'green';
      context.fillRect(0, 0, width, height);
    }
    
    update() {
      const context = this.context;
      const width = this.width;
      const height = this.height;
      const ball = this.ball;
  
      // this.velocityX = 0.1;
      // this.velocityY = 0.2;
  
      context.clearRect(0, 0, width, height);
      
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      
      if (ball.y + ball.velocityY > height || ball.y + ball.velocityY < 0) {
        ball.velocityY *= -1;
      }
      if (ball.x + ball.velocityX > width || ball.x + ball.velocityX < 0) {
        ball.velocityX *= -1;
      }
    }
    
    loop (timestamp) {
      this.update();
      this.drawBackground();
      this.ball.draw();
      this.paddle.user1();
      this.paddleRight.user2();
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  }
  
  
  
  class Ball {
    constructor(game) {
      this.game = game;
  
      this.x = 40;
      this.y = 120;
  
      this.velocityX = 2;
      this.velocityY = 5;
  
      this.radius = 15;
      this.color = 'yellow';
    }
  
    draw () {
      const context = this.game.context;
  
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    }
  }
  
  class LeftPaddle {
    constructor(game){
      this.game = game;
      this.width = game.width;
      this.height = game.height;
  
      this.x = 0;
      this.y = this.height/2 - 100/2;
  
      this.width = 20;
      this.height = 100;
    }
  
      user1() {
        const context = this.game.context;
        const width = this.width;
        const height = this.height;
  
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, width, height);
      }
  
    }
  
    class RightPaddle {
      constructor(game){
        this.game = game;
        this.width = game.width;
        this.height = game.height;
    
        this.x = this.width - 20;
        this.y = this.height/2 - 100/2;
    
        this.width = 20;
        this.height = 100;
      }
    
        user2() {
          const context = this.game.context;
          const width = this.width;
          const height = this.height;
    
          context.fillStyle = 'red';
          context.fillRect(this.x, this.y, width, height);
        }
    
      }
    
  
  
  const canvas = document.querySelector('canvas');
  
  const game = new Game(canvas);
  
  
  
  
  
  