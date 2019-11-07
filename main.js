const canvas = document.querySelector('canvas');

const game = new Game(canvas);
// const startBtn = document.querySelector(".startBtn")

// inicial screen picture // missing the text // text to be adde // Press ENTER
window.onload = function () {
    const startScreen = new Image();
    startScreen.src = 'images/opt1.jpg';
    startScreen.addEventListener('load', () => {
        game.context.drawImage(startScreen, 0, 0, 800, 400);
    });
    document.addEventListener('keydown', function (e) {
        if (e.which === 13) {
            game.inicializer();
        }
    });
};