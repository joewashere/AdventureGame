import { importSprite } from "../helpers/importSprite.js";
import Character from "./Character.js";

export class MainCharacter extends Character {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });

        this.speed = 3;

        this.sprites = {
            idle: importSprite('../../assets/Character/Char1/Char1_idle_16px.png'),
            attack: importSprite('../../assets/Character/Char1/Char1_Sword_32px.png'),
            walking: importSprite('../../assets/Character/Char1/Char1_walk_16px.png'),
        }
        
        this.sprite = this.sprites.idle
        this.spriteMap = {
            idleFront: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 16,
                    y: 0
                },
                {
                    x: 32,
                    y: 0
                },
                {
                    x: 48,
                    y: 0
                }
            ],
            attack: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 32,
                    y: 0
                },
                {
                    x: 64,
                    y: 0
                },
                {
                    x: 96,
                    y: 0
                }
            ],
            walkForward: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 16,
                    y: 0
                },
                {
                    x: 32,
                    y: 0
                },
                {
                    x: 48,
                    y: 0
                }
            ],
            walkLeft: [
                {
                    x: 0,
                    y: 16
                },
                {
                    x: 16,
                    y: 16
                },
                {
                    x: 32,
                    y: 16
                },
                {
                    x: 48,
                    y: 16
                }
            ],
            walkBack: [
                {
                    x: 0,
                    y: 32
                },
                {
                    x: 16,
                    y: 32
                },
                {
                    x: 32,
                    y: 32
                },
                {
                    x: 48,
                    y: 32
                }
            ],
            walkRight: [
                {
                    x: 0,
                    y: 48
                },
                {
                    x: 16,
                    y: 48
                },
                {
                    x: 32,
                    y: 48
                },
                {
                    x: 48,
                    y: 48
                }
            ]
        };

        this.currentSprite = this.spriteMap.idleFront;
    }

    draw (c) {
        c.drawImage(this.sprite, this.currentSprite[this.frame].x, this.currentSprite[this.frame].y, this.w, this.h, this.pos.x, this.pos.y, this.w, this.h);
    }

    update (c) {
        let frames = this.currentSprite.length - 1;

        if(this.framecount === 15) {
            if(this.frame === frames){
                this.frame = 0;
                if(this.sprite === this.sprites.attack || this.sprite === this.sprites.walking){
                    this.sprite = this.sprites.idle;
                    this.currentSprite = this.spriteMap.idleFront;
                    this.w = 16;
                    this.h = 16;
                }
            } else {
                this.frame++;
            }


            this.framecount = 0;
        }
        this.framecount++;

        this.draw(c);
    }

    attack () {
        this.frame = 0;
        this.sprite = this.sprites.attack;
        this.currentSprite = this.spriteMap.attack;
        this.w = 32;
        this.h = 32;
    }

    move (d) {
        this.walking = true;
        this.sprite = this.sprites.walking;
        switch(d){
            case 'ArrowDown':
                this.pos.y = this.pos.y + this.speed;
                this.currentSprite = this.spriteMap.walkForward;
                break;
            case 'ArrowUp':
                this.pos.y = this.pos.y - this.speed;
                this.currentSprite = this.spriteMap.walkBack;
                break;
            case 'ArrowLeft':
                this.pos.x = this.pos.x - this.speed;
                this.currentSprite = this.spriteMap.walkLeft;
                break;
            case 'ArrowRight':
                this.pos.x = this.pos.x + this.speed;
                this.currentSprite = this.spriteMap.walkRight;
                break;
        }
    }
}