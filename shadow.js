class Shadow{
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    //ADDS SHADOW TO ALL OBJECTS ON THE SCREEN

    roundedRect() {

        const context = this.game.context;

        context.fillStyle = 'rgba(227, 39, 136, 0.5)';
        context.shadowColor = 'rgb(227, 39, 136)';
        context.shadowBlur = 10;
        context.shadowOffsetX = 15;
        context.shadowOffsetY = 15;
        context.fill();

    }

}