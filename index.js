console.log("Welcome to Tic Tac Toe")
let music = new Audio("music-for-game-fun-kid-game-163649.mp3")
let audioTurn = new Audio("achievement-video-game-type-1-230515.mp3")
let gameover = new Audio("game-over-arcade-6435.mp3")
let isgameover = false

let turn = "X"

//change the turn
const changeturn = ()=>{
    return turn === "X"?"O":"X"
}

//to check for win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext ')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won "
            isgameover = true
            document.querySelector(".imgbox ").getElementsByTagName('img')[0].style.width = "200px"
            gameover.play()
         }
         
    })

}

//Gmae Logic
let boxes = document.getElementsByClassName("box"); 
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if (boxtext.innerText = " "){
            boxtext.innerText = turn;
            turn =  changeturn();
            audioTurn.play();
            checkwin(); 
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn; 
            }
            
        }
    })
})

//Reset logic
reset.addEventListener('click', ()=>{
     let boxtexts = document.querySelectorAll('.boxtext');
     Array.from(boxtexts).forEach(element => {
        element.innerText = ""

     });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn; 
    document.querySelector(".imgbox ").getElementsByTagName('img')[0].style.width = "0px"
})