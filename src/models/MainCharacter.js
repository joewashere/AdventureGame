import { importSprite } from "../helpers/importSprite.js";
import Character from "./Character.js";

export class MainCharacter extends Character {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });

        this.speed = 3;
        this.life = 100;
        this.coins = 0;

        this.sprites = {
            idle: importSprite('../../assets/Character/Char1/Char1_idle_16px.png'),
            attack: importSprite('../../assets/Character/Char1/Char1_Sword_32px.png'),
            walking: importSprite('../../assets/Character/Char1/Char1_walk_16px.png'),
        }
        
        this.sprite = this.sprites.idle
        this.spriteMap = {
            idleFront: [{x: 0, y: 0},{x: 16, y: 0},{x: 32, y: 0},{x: 48, y: 0}],
            walkForward: [{x: 0, y: 0},{x: 16, y: 0},{x: 32, y: 0},{x: 48, y: 0}],
            walkLeft: [{x: 0, y: 16},{x: 16, y: 16},{x: 32, y: 16},{x: 48, y: 16}],
            walkBack: [{x: 0, y: 32},{x: 16, y: 32},{x: 32, y: 32},{x: 48, y: 32}],
            walkRight: [{x: 0, y: 48},{x: 16, y: 48},{x: 32, y: 48},{x: 48, y: 48}],
            attack: [{x: 0, y: 0},{x: 32, y: 0},{x: 64, y: 0},{x: 96, y: 0}],
        };

        this.currentSprite = this.spriteMap.idleFront;
    }

    attack () {
        this.frame = 0;
        this.sprite = this.sprites.attack;
        this.currentSprite = this.spriteMap.attack;
        this.w = 32;
        this.h = 32;
    }

    move(d) {
        this.walking = true;
        this.sprite = this.sprites.walking;
    
        const directionMap = {
          ArrowDown: {
            posChange: { y: this.speed },
            sprite: this.spriteMap.walkForward
          },
          ArrowUp: {
            posChange: { y: -this.speed },
            sprite: this.spriteMap.walkBack
          },
          ArrowLeft: {
            posChange: { x: -this.speed },
            sprite: this.spriteMap.walkLeft
          },
          ArrowRight: {
            posChange: { x: this.speed },
            sprite: this.spriteMap.walkRight
          }
        };
    
        const direction = directionMap[d];
        if (!direction) return;
    
        this.pos.x += direction.posChange.x || 0;
        this.pos.y += direction.posChange.y || 0;
        this.currentSprite = direction.sprite;
      }
}