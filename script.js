import GameController from "./src/index.js";

const canvas = document.getElementById('stage');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

const controller = new GameController();

function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    let player = controller.player;
    controller.drawBackground(c, canvas.width, canvas.height);
    player.update(c);
}

animate();