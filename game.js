const impact = new Audio('sounds1/left.mp3');
const impact2 = new Audio('sounds1/right.mp3');
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.paddleLeft = new Paddles(this, 0, this.height / 2 - 100 / 2, 'left');
    this.paddleRight = new Paddles(this, this.width - 40, this.height / 2 - 100 / 2, 'right');
    this.ball = new Ball(this);
    this.rightScore = new Scores(this, 'rightScore');
    this.leftScore = new Scores(this, 'leftScore');
    this.scoreBoard = [0, 0];
    this.elementShadows = new Shadow(this, 3, 3);
    this.mouseHandler();
  }


  // fucntion for the collision between the paddles and the ball
  collision(b, p) {

    let ballTop = b.y - b.radius;
    let ballBottom = b.y + b.radius;
    let ballLeft = b.x - b.radius;
    let ballRight = b.x + b.radius;

    let paddleTop = p.y;
    let paddleBottom = p.y + p.height;

    if (ballLeft < 21 || ballRight > 759) {

      if (!(ballBottom < paddleTop || ballTop > paddleBottom)) {
        impact2.play();
        return true;
      } else {
        if (p.side === 'right') {
          this.scoreBoard[1]++; //increment the score by 1
          this.resetBall(); // reseting the game after scoring goal

        } else {
          this.scoreBoard[0]++; // increment the cores by 1
          this.resetBall(); // reset the ball to the middle of the canvas
        }
        impact2.play(); //play the soound
        return false;
      }
    } else {
      return false;
    }

  }

  //reseting the ball after scoring goal
  resetBall() {
    this.ball.x = canvas.width / 2;
    this.ball.y = canvas.height / 2;

    this.ball.velocityX = 5;
    this.ball.velocityY = 0;
    this.ball.speed = 1;

    this.paddleLeft = new Paddles(this, 0, this.height / 2 - 100 / 2, 'left');
    this.paddleRight = new Paddles(this, this.width - 40, this.height / 2 - 100 / 2, 'right');

    //this.ball.velocityX = -this.ball.velocityX;
  }


  // function to draw the backgrounf of the canvas
  drawBackground() {
    const context = this.context;
    const width = this.width;
    const height = this.height;

    context.fillStyle = 'transparent';
    context.fillRect(0, 0, width, height);
  }

  //inicializer for the initial screen picture
  inicializer() {
    this.loop();
  }





  update() {
    const context = this.context;
    const width = this.width;
    const height = this.height;
    const ball = this.ball;
    const leftPaddle = this.paddleLeft;
    const rightPaddle = this.paddleRight;


    context.clearRect(0, 0, width, height);


    // boundaries on the canvas, stops ball from going out 
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if (ball.y + ball.velocityY > height || ball.y + ball.velocityY < 0) {
      ball.velocityY *= -1;
    }


    //changing the names of the paddles.
    let player = (ball.x < width / 2) ? leftPaddle : rightPaddle;

    // simple computer control commands
    let computerLevel = 0.1;
    leftPaddle.y += (ball.y - (leftPaddle.y + leftPaddle.height / 2)) * computerLevel;

    //setting up the mouse to control the user paddle
  

    //setting  the top and bottom wall boundaries 
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.velocityY = -ball.velocityY;
    }

    //declaring the colision function between the ball and the paddle
    if (this.collision(ball, player)) { // COLIDIU


      if (this.scoreBoard[0] === 5 || this.scoreBoard[1] === 5) {
        alert('GAME OVER!');
        window.location.reload();
        clearInterval(interval); //

      }
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
    this.elementShadows.roundedRect();

    window.requestAnimationFrame(timestamp => this.loop(timestamp));

  }

    // adding mouse controls to the mouse for the user.
    mouseHandler() {
      window.addEventListener('mousemove', (event) => {
          event.preventDefault();
          let rect = canvas.getBoundingClientRect();
  
          this.paddleRight.y = event.clientY - rect.top - this.paddleRight.height/2;
      });
  }


}
