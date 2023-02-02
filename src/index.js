import CharacterController from "./controllers/CharacterController.js";
import EnemyController from "./controllers/EnemyController.js";
import ItemController from "./controllers/ItemController.js";
import UserInterface from "./controllers/UIController.js";
import { importSprite } from "./helpers/importSprite.js";

export default class GameController {
    constructor () {
        this.player = new CharacterController({ x:55, y:55, w:16, h:16 });
        this.enemy = new EnemyController({ x:155, y:155, w:16, h:16 });
        this.items = new ItemController();
        this.ui = new UserInterface();
    }

    drawBackground (c, w, h) {
        let img = importSprite('../assets/Other/Misc/Grass.png');
        let rock = importSprite('../assets/Other/Misc/Rock.png');
        c.drawImage(img, 0, 16, w, h);
        c.beginPath();
        c.lineWidth = 16;
        c.strokeStyle = c.createPattern(rock, 'repeat');

        // Draw Border

        // Left Side
        c.moveTo(7,16);
        c.lineTo(7, h);
        c.stroke();

        // Top
        c.moveTo(0,22);
        c.lineTo(w-5, 22);
        c.stroke();

        // Right side
        c.moveTo(w-13, h);
        c.lineTo(w-13, 16);
        c.stroke();

        // Bottom
        c.moveTo(0, h-5);
        c.lineTo(w-5, h-5);
        c.stroke();
    }

    updateFrame(c, w, h){
        c.clearRect(0, 0, w, h);
        this.drawBackground(c, w, h);
        this.ui.update(c, 100, this.player.coins);
        this.enemy.update(c);
        this.player.update(c);
        this.items.update(c, this.player);
    }
}