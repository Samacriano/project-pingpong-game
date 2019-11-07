 class Ball {
  constructor(game) {
    this.game = game;

    this.x = 40;
    this.y = 120;

    this.velocityX = 5;
    this.velocityY = 5;

    this.speed = 3;

    this.radius = 10;
    this.color = 'pink';
  }

  draw() {
    const context = this.game.context;

    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();

  }


}