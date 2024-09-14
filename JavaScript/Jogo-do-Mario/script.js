const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); // Cada vez que apertar uma tecla, a classe jump será adicionada a classe mario
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500) //Cria uma função que depois de um tempo, removerá a classe jump
}

const loop = setInterval (() => {

    

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Se entrar no if, o jogo acabou.
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = '/images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', jump); // Criando um evento com a função jump