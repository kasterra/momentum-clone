const BODY = document.querySelector('body');

function init(){
    const randomnum = Math.floor(Math.random() * 7) + 1;
    const img = new Image();
    img.src = `image/${randomnum}.jpg`;
    img.classList.add("bgImage");
    BODY.prepend(img);
}

init();