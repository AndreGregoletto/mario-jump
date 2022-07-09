const restart = document.getElementById('restart').hidden = true;
const score   = document.getElementById('score');
const mario   = document.querySelector('.mario');
const pipe    = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } ,500);
}

var count = 0;

function contador() {
    count++;
    score.innerHTML = count
}

const loop = setInterval(() => {
    const pipePosition  = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left      = `${pipePosition}px`;
    
        mario.style.animation = 'none';
        mario.style.bottom    = `${marioPosition}px`;
    
        mario.style.marginBottom = '30px';
        mario.style.marginLeft   = '50px';
        mario.style.width        = '75px';
        mario.src                = 'image/game-over.png';

        restart = document.getElementById('restart').hidden = false;

        clearInterval(loop);
    }
    
} , 10);

document.addEventListener('keydown', jump);
