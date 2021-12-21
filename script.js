'use strict';
// Game Logic :-

let secretnumber = Math.trunc(Math.random()*20) + 1;
let score =20;
let highscore=0;

document.querySelector('.check').addEventListener('click'
,function(){
    const g = Number(document.querySelector('.guess').value);
    if(!g){
        document.querySelector('.message').textContent = '🤷‍♀️ No Number!';
    } else if( g === secretnumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width ='30rem';
        document.querySelector('.number').textContent = secretnumber;
        if(score>highscore){
            highscore= score;
            document.querySelector('.highscore').textContent = highscore ;
        }
    } else if (g !== secretnumber){
        if(score > 1){
            document.querySelector('.message').textContent = g > secretnumber ? '😏 Too High!': '😑 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '😭 You Lose!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
});

document.querySelector('.again').addEventListener('click',
() =>{
    score=20;
    secretnumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score ;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('.number').textContent ='?';
});