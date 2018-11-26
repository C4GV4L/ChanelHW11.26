function makeAppear(){ 
    let hiddenDiv = document.getElementById("hiddenDiv"); 
    let magicButton = document.getElementById("youBrokeBroke");   
    if(hiddenDiv.style.display =="none"){
        hiddenDiv.style.display = "block"; 
        magicButton.innerHTML = "Play Again!";
    } else {
        hiddenDiv.style.display = "none";
        magicButton.innerHTML = "-X to $150.00";   
    }
}

function makeAppear1(){ 
    let hiddenDiv1 = document.getElementById("hiddenDiv1"); 
    let whiteMagic = document.getElementById("youBroke");
    if(hiddenDiv1.style.display =="none"){
        hiddenDiv1.style.display = "block"; 
        whiteMagic.innerHTML = "Play Again!"; 
    } else {
        hiddenDiv1.style.display = "none";
        whiteMagic.innerHTML = "$150 to $1,000"; 
    }
}

function makeAppear2(){
    let hiddenDiv2 = document.getElementById("hiddenDiv2"); 
    let blueMagic = document.getElementById("youGotMoney");
    if(hiddenDiv2.style.display == "none"){ 
        hiddenDiv2.style.display = "block"; 
        blueMagic.innerHTML = "Play Again!"; 
    } else {
        hiddenDiv2.style.display = "none";  
        blueMagic.innerHTML = "$1,000 to $10,0000";
    }
}


function makeAppear3(){
    let hiddenDiv3 = document.getElementById("hiddenDiv3");
    let blackMagic= document.getElementById("OkYoureRich");
        if (hiddenDiv3.style.display == "none") { 
            hiddenDiv3.style.display = "block"
            blackMagic.innerHTML = "Play Again!"  
        } else { 
            hiddenDiv3.style.display = "none"
            blackMagic.innerHTML = " $10,000 +"
        }
}


function popChange() {
    let popIT = document.getElementById('heading1');
    let movingDiv = document.getElementById("niceMoney");
        popIT.style.backgroundColor = 'purple';
        popIT.style.color = 'white';
        popIT.style.fontSize = '4rem';
        movingDiv.style.transition = "ease-in-out";
        movingDiv.style.display = 'block';
}
    

