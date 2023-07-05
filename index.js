import * as Phaser from 'phaser';
import PlayScene from './src/states/PlayScene';

class Game extends Phaser.Game {
  constructor() {
    super({
      name: 'app',
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'matter',
        matter: {
          gravity: { y: 0 }, // Change this value to the desired gravity
          debug: true, // Set this to true to view physics debug lines
        },
      },
      scene: [PlayScene],
    });
  }
}

window.game = new Game();
