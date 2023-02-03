import CharacterController from "./controllers/CharacterController.js";
import EnemyController from "./controllers/EnemyController.js";
import ItemController from "./controllers/ItemController.js";
import MapController from "./controllers/MapController.js";
import UserInterface from "./controllers/UIController.js";

export default class GameController {
    constructor () {
        this.player = new CharacterController({ x:55, y:55, w:16, h:16 });
        this.enemy = new EnemyController({ x:155, y:155, w:16, h:16 });
        this.items = new ItemController();
        this.ui = new UserInterface();
        this.map = new MapController();

        this.items.generateItems('coin', 20);
        this.items.generateItems('heart', 2);
    }

    updateFrame (c, w, h) {
        c.clearRect(0, 0, w, h);
        this.map.drawBackground(c, w, h);
        this.ui.update(c, this.player.life, this.player.coins);
        this.enemy.update(c, this.player);
        this.player.update(c);
        this.items.update(c, this.player);

        if(this.player.life === 0){
            this.ui.gameOver(c);
        }
    }
}