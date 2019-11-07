class Sides {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    roundedRect( x, y, width, height, radius) {

        const context = this.game.context;

        
        
        context.beginPath();
        context.moveTo(x, y + radius);
        context.lineTo(x, y + height - radius);
        context.arcTo(x, y + height, x + radius, y + height, radius);
        context.lineTo(x + width - radius, y + height);
        context.arcTo(x + width, y + height, x + width, y + height-radius, radius);
        context.lineTo(x + width, y + radius);
        context.arcTo(x + width, y, x + width - radius, y, radius);
        context.lineTo(x + radius, y);
        context.arcTo(x, y, x, y + radius, radius);
        context.stroke();
      
        context.fillStyle = 'rgba(227, 39, 136, 0.5)';
        context.shadowColor = 'rgb(227, 39, 136)';
        context.shadowBlur = 10;
        context.shadowOffsetX = 15;
        context.shadowOffsetY = 15;
        context.fill();

    }
          
}