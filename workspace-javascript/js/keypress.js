//event displays keycode 
function showKeyCode(e){
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "Last key in ASCII code: "+ e.keyCode;
}
//register event
$('#message').keyup(showKeyCode);






//event 's' moves + symbol
var posX= 100;
var posY= 10;

function move(e){
    if(e.key="s"){
        //animation
        $('img').animate({left:"400px"}, 500, 'linear');
    }
    else if(e.key="ArrowUP"){
        $('img').animate({up:"400px"}, 500, 'linear');
    }
    else if(e.key="ArrowDown"){
        $('img').animate({down:"400px"}, 500, 'linear');
    }
}
//register event
document.addEventListener('keydown',move);





//event click shows position
function showMouse(e){
    var lastKeyE= document.getElementById('lastKey');
    lastKeyE.textContent = "position("+ e.pageX +", "+ e.pageY +")";
}
//register
document.addEventListener('click',showMouse);