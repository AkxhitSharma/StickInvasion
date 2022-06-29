var clic=document.querySelector(".clic");
var cont1=document.querySelector(".cont1");
var cont2=document.querySelector(".cont2");
var won=document.querySelector(".won");
var lost=document.querySelector(".lost");
var gun=document.querySelector(".gun");
var body=document.querySelector(".bo");
var shot=document.querySelector(".shot");
var head=document.querySelector(".head");

clic.addEventListener("click",start);
function start(){
    clic.classList.add("hide");
    cont1.classList.remove("hide");
    cont2.classList.remove("hide");
    window.requestAnimationFrame(gamplay); 
}
var key = { ArrowLeft: false , ArrowRight: false , a: false};

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);


function keydown(e){
    e.preventDefault();
    key[e.key]=true;
}
function keyup(e){
    e.preventDefault();
    key[e.key]=false;
}

var player=cont1.offsetLeft ;
var bullet=document.querySelector('.bullets');
var play=gun.getBoundingClientRect();
play.x=150;
var target=document.getElementsByTagName("li");


function kill(g){
    var c_rect=cont2.getBoundingClientRect();
    var g_rect=g.getBoundingClientRect();
    var h_rect=head.getBoundingClientRect();
    var s_rect=shot.getBoundingClientRect();

    if(g_rect.x + g_rect.width > c_rect.x + c_rect.width){
        bullet.removeChild(bullet.firstChild);
    }
    if(target.length===0){
        bullet.classList.add('arc');
        bullet.classList.remove('bullet');
        body.classList.add('end');
        cont2.removeChild(cont2.firstChild);
        finale();
    }
    if(h_rect.x + h_rect.width > s_rect.x + s_rect.width ){
        lost.classList.remove('hide');
        cont1.classList.add("hide");
        cont2.classList.add("hide"); 
    }
    
    
}

function launch(){
    lost.classList.remove('hide');
    cont1.classList.add("hide");
    cont2.classList.add("hide"); 
}

function finale(){
    if(target.length===0){
        won.classList.remove('hide');
        //cont1.classList.add("hide");
        //cont2.classList.add("hide");
        
    }

}

won.addEventListener("click",start1);
lost.addEventListener("click",start1);
function start1(){
    location.reload();
}
function gamplay(){
    
    if(key.ArrowLeft && player > 0){
        player -= 5 ;
    }
    if(key.ArrowRight && player < 600){
        player += 5;
    }
    if(key.a && play.x <850){
        play.x += 50 ;
        
    }else{
        play.x= 150 ;
    }
    if(play.x===850){
        play.x= 150 ;
    }

    gun.style.left= play.x+ "px";
    cont1.style.left= player+"px";
    kill(gun);
    window.requestAnimationFrame(gamplay);
}

