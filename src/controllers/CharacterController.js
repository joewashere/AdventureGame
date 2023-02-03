import { MainCharacter } from "../models/MainCharacter.js";

export default class CharacterController extends MainCharacter {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });
        this.life = 100;

        // Handle the character movement with the arrow keys
        document.addEventListener('keydown',(e) => {
            this.move(e.key);
        });

        // Handle the attack action with the space bar
        document.addEventListener('keydown', (e) => {
            if(e.key === ' ') {
               this.attack();
            }
        });
    }

    update (c) {
        super.update(c);
    }
}