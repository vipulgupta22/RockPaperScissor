const userSelect =(userChoicenum)=>{
    const number = myrandomChoice();
    displayNone(userChoicenum,number);
    displayBlock(number);
    displayResult(userChoicenum,number);
    setTimeout("location.reload(true);",4000);
}

const myrandomChoice =()=>{
    return Math.floor(Math.random()*3);
}

function displayNone(userChoice){
    if(userChoice === 1){
        document.getElementById("rock").style.display = "none";
        document.getElementById("scic").style.display = "none";
    }
    else if(userChoice === 2){
        document.getElementById("rock").style.display = "none";
        document.getElementById("ppr").style.display = "none";
    }
    else{
        document.getElementById("scic").style.display = "none";
        document.getElementById("ppr").style.display = "none";
    }
}

function displayBlock(myChoice){
    document.getElementById("mychoicehead").style.display = "block";
    document.getElementById("mychoice").style.display = "block";
    if(myChoice === 1){
        document.getElementById("rock1").style.display = "none";
        document.getElementById("scic1").style.display = "none";
    }
    else if(myChoice === 2){
        document.getElementById("rock1").style.display = "none";
        document.getElementById("ppr1").style.display = "none";
    }
    else{
        document.getElementById("scic1").style.display = "none";
        document.getElementById("ppr1").style.display = "none";
    }
}

const displayResult = (userChoice,myChoice) =>{
    if(userChoice === 0){
        if(myChoice === 0){
            showResult("Game Draw 😶");
        }
        else if(myChoice === 1){
            showResult("You Lose 😕");
        }
        else{
            showResult("You Win 😍");
        }
    }
    else if(userChoice === 1){
        if(myChoice === 1){
            showResult("Game Draw 😶");
        }
        else if(myChoice === 2){
            showResult("You Lose 😕");
        }
        else{
            showResult("You Win 😍");
        }
    }
    else{
        if(myChoice === 2){
            showResult("Game Draw 😶");
        }
        else if(myChoice === 0){
            showResult("You Lose 😕");
        }
        else{
            showResult("You Win 😍");
        }
    }
}

function showResult(stringShow){
    document.getElementById("result").style.display="grid";
    document.getElementById('resultShow').innerHTML = stringShow ;
}