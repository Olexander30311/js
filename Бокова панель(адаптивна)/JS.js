const menu = document.querySelector('#menu');
const btn = document.querySelector('#btn1');

btn.addEventListener("click", function () {
    if (menu.classList.contains('clear')) {
        menu.classList.remove('clear')
    } else {
        menu.classList.add('clear')
    }
});