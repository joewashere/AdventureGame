import { EnemyCharacter } from "../models/EnemyCharacter.js";

export default class EnemyController extends EnemyCharacter {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });
    }

    update(c){
        super.update(c);
    }
}