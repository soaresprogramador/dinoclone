const dino = document.querySelector('.dino');

function handleKeyup(event){
    if (event.keyCode ===32){
        jump();
    }
}

function jump() {
    let position = 0;
  
    let upInterval = setInterval(() => {
      if (position >= 150) {

        // Descer
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {

        // Subir
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20);
  }

document.addEventListener('keyup', handleKeyup);