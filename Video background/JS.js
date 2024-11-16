const qestions = document.querySelector('#r2');
const menu = document.querySelector('#r3');
const video = document.querySelector('#r4');

qestions.addEventListener('click', () => {
    if(menu.classList.contains('switch')==true){
        menu.classList.remove('switch');
        video.play();
    } else{
        menu.classList.add('switch')
        video.pause();

    }
})