const start_btn = document.getElementById('start');
const boule = document.querySelector('.boule');
const jump_btn = document.getElementById('jump');
const avatar = document.getElementById('avatar');
const place = document.querySelector('.space-play');

start_btn.addEventListener('click', () =>{
   
    jump_btn.disabled= false;
    boule.classList.remove('boule_animation');
    
    setTimeout(()=>{
        boule.classList.add('boule_animation');
        boule.style.animationPlayState = 'running';
        checkCollision();
    }, 1000);


});

     
jump_btn.addEventListener('click',() => {

    avatar.classList.add('avatar_animation'); 
    avatar.addEventListener('animationend', () => {
        avatar.classList.remove('avatar_animation');
    })
       
});



function checkCollision() {
      setInterval(() => {

        let positionBoule = boule.getBoundingClientRect();
        let positionAvatar = avatar.getBoundingClientRect();
  
        if (positionAvatar.right > positionBoule.left &&
            positionAvatar.left < positionBoule.right &&
            positionAvatar.bottom > positionBoule.top &&
            positionAvatar.top < positionBoule.bottom) {

            boule.style.animationPlayState = 'paused';
            jump_btn.disabled= true;
            
        }
    }, 1);
}

