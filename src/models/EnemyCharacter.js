import { importSprite } from "../helpers/importSprite.js";
import Character from "./Character.js";

export class EnemyCharacter extends Character {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });

        this.speed = 3;

        this.sprites = {
            idleFront: importSprite('../../assets/Skeleton/Idle/Skel_idle_down.png'),
            idleLeft: importSprite('../../assets/Skeleton/Idle/Skel_idle_left.png'),
            idleRight: importSprite('../../assets/Skeleton/Idle/Skel_idle_right.png'),
            idleBack: importSprite('../../assets/Skeleton/Idle/Skel_idle_up.png'),
            walkFront: importSprite('../../assets/Skeleton/Walk/Skel_walk_down.png'),
            walkLeft: importSprite('../../assets/Skeleton/Walk/Skel_walk_left.png'),
            walkRight: importSprite('../../assets/Skeleton/Walk/Skel_walk_right.png'),
            walkBack: importSprite('../../assets/Skeleton/Walk/Skel_walk_up.png'),
        };

        this.sprite = this.sprites.idleFront;

        this.spriteMap = {
            idle: [{ x:0, y:0 },{ x:16, y:0 },{ x:32, y:0 },{ x:48, y:0 }]
        };

        this.currentSprite = this.spriteMap.idle;

    }


}