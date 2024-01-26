
let playerStat = 'run';

const dropdown = document.getElementById("animations");

dropdown.addEventListener("change", (e) => {
    playerStat = e.target.value;
})

const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

// console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575; // image/12 in px
const spriteHeight = 523;


// let frameX = 0; // horizontally
// let frameY = 0; // vertically image rotate

let gameFrame = 0;
const staggerFrames = 5; // speed control frame  Higher number slower frames

const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "fall",
        frames: 7
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 12
    },
    {
        name: "gethit",
        frames: 4
    },
]

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

// console.log(animationStates);

const playerImage = new Image();
// create html img element

playerImage.src = 'shadow_dog.png';

function animate() {
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
 
   let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerStat].loc.length; // 5 Times slower
   let frameX = spriteWidth * position;
   let frameY = spriteAnimations[playerStat].loc[position].y;
   // ctx.fillRect(100, 50, 100, 100);
   // ctx.drawImage(playerImage, sourceX,sourceY, sourceW, sourceH, destionationX,dy, dw, dh);
   ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

//    if(gameFrame % staggerFrames == 0) { // run after every 5 frames
//     if(frameX < 4) frameX++;
//     else frameX = 0; 
//    }

   gameFrame++;
   requestAnimationFrame(animate);
}

animate();
