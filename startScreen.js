window.onload = function () {
    const startScreen = new Image();
    startScreen.src = 'images/opt1.jpg';
    startScreen.addEventListener( 'load', () => {
      game.context.drawImage(startScreen, 0, 0, 800,400);
    });
    document.addEventListener('keydown', function(e) {
      if(e.which === 13){
        game.gameOver();
      }
    });
 };