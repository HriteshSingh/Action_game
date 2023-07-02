score=0;
cross=true;

let audio0=new Audio('music.mp3');
let audio1=new Audio('gameover.mp3');
setTimeout(()=>{
    audio0.play();
},1000)


document.onkeydown= function(e){
    console.log("keycode is:", e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino')
        dino.classList.add('animateDino')
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino')
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino')
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= (dinoX - 112) + "px";
    }
    setTimeout(()=>{
        dino.classList.remove('animateDino')
    },700)
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML="GameOver - Reload to Start"
        obstacle.classList.remove('obstacleAni')
        audio1.play();
        setTimeout(()=>{
            audio1.pause();
            audio0.pause();
        },1000)
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)

        setTimeout(()=>{
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur + 's';
        },500);
    }
},10);

function updateScore(score){
    ScoreCont=document.querySelector('.ScoreCont');
    ScoreCont.innerHTML="Your Score : " + score;
}