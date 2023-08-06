import Phaser from 'phaser';
import Player from '../Controls.js'; 

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.on('load_error', function (file) {
      console.error('Error loading file: ', file.src);
  });
  
  this.load.image('doomguy', './src/states/objects/doomguy.png');// replace with the path to your player's image
  }

  create() {
    // Instantiate a player at the center of the screen
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height / 2, 'doomguy');
  }

  update() {
    // Update the player's movement each frame
    this.player.update();
  }
}
