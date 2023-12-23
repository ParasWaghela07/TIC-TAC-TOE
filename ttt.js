let turn="X";
let gameover=false;

function changeTurn(){
    if(turn=="X"){
        turn="O";
    }
    else{
        turn="X";
    }
}

function checkWin(){
    let arr=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let SabBoxes=document.getElementsByClassName("col");

    arr.forEach(e=>{
        if((SabBoxes[e[0]].innerText===SabBoxes[e[1]].innerText) && (SabBoxes[e[1]].innerText===SabBoxes[e[2]].innerText) && SabBoxes[e[0]].innerText!==""){
            document.getElementById("bari").innerText= SabBoxes[e[0]].innerText + "  WON  ";
            gameover=true;
        }
    })
}


let allBoxes=document.getElementsByClassName("col");
Array.from(allBoxes).forEach(box=>{ // box is iterator targets every cell one by one in loop
  
    box.addEventListener('click',function(){
        if (gameover) {
            return; // Exit the loop by returning early if game is over
        }
        if(box.innerText===''){
            box.innerText=turn;
            changeTurn();
            checkWin();
            if(gameover!=true){
                document.getElementById("bari").innerText = "TURN FOR : " + turn;
            }
        }
    });
})

let resetGame=document.getElementById("reset");

resetGame.addEventListener('click',function(){
    gameover=false;
    let ajao=document.getElementsByClassName("col");
    Array.from(ajao).forEach(it=>{
    it.innerText="";
})
})


