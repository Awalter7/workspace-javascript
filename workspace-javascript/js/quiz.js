//event click
function selection(e){
    //element selected

    //event triggered
    e.preventDefault();
    //this.childern[0].childern[0].checked=true;
    var currentclass = this.getAttribute('class')
    if(currentclass = "answer"){
        this.setAttribute('class', "answer selected");
        this.animate([{transform: "rotate(0deg)"},{transform: "rotate(180deg)"}],{duration:3000, fill:"forwards"});
    }
    else{
        console.log("deselect");
        this.setAttribute('class', "answer");
    }
}

//change the style
var elist = document.getElementsByClassName('answer')

for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click', selection, false);
}