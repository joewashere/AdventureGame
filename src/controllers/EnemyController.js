import { EnemyCharacter } from "../models/EnemyCharacter.js";

export default class EnemyController extends EnemyCharacter {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });
    }

    update (c, player) {
        super.update(c);
        if(Math.abs(player.pos.x - this.pos.x) < 100 && Math.abs(player.pos.y - this.pos.y) < 100){
            this.sprite = this.sprites.walkFront;

            if(player.pos.x > this.pos.x){
                this.pos.x++;
            } else {
                this.pos.x--;
            }

            if(player.pos.y > this.pos.y){
                this.pos.y++;
            } else {
                this.pos.y--;
            }

            if(Math.abs(player.pos.x - this.pos.x) < 10 && Math.abs(player.pos.y - this.pos.y) < 10 && player.life !== 0){
                player.life--;
            }
        } else {
            this.sprite = this.sprites.idleFront;
        }
    }
}