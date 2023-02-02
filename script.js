import GameController from "./src/index.js";

const canvas = document.getElementById('stage');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

const controller = new GameController();

function animate(){
    requestAnimationFrame(animate);
    controller.updateFrame(c, canvas.width, canvas.height);
}

animate();