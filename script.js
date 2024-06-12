let boxx = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector(".msg");

let turnO = true;

const winpatt =[

[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 4, 6],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8],

]


const resetgame = () => {
    turnO = true;
    enablelebox();
    msgcont.classList.add("hidden");
    };



 
boxx.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("clicked - box");
        if(turnO === true) {

            box.style.backgroundImage = "url('images/Modi\ 2.jpg')"
        box.style.backgroundSize = "cover"
            turnO = false;
           box.innerText= "Modi Ji"
           box.style.color = "rgba(250, 235, 215, 0)"
            
        } else {
        
            turnO = true;
           box.style.backgroundImage = "url('images/raahul\ 2.jpg')"
           box.style.backgroundSize = "cover";
           box.innerText= "Rahul Ji"
            box.style.color = "rgba(250, 235, 215, 0)"

        }

        box.disabled = true;
        checkWin();
  });
});


const disablebox = () => {
    for(let box of boxx){
box.disabled = true;

    }
};


function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

 
const enablelebox = () => {
    for(let box of boxx){
box.disabled = false;
    box.style.backgroundImage = "url('images/paper.jpg')" ;
}};

const show_win = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.color = "white"
    msgcont.classList.remove("hidden");
    disablebox();
    scrollToTop();
}





const checkWin = () => {
    for(pattern of winpatt) {
        
              let pos1val = boxx[pattern[0]].innerText;
              let pos2val = boxx[pattern[1]].innerText;
              let pos3val = boxx[pattern[2]].innerText;
            
if(pos1val != "" && pos2val != "" && pos3val != "") {
    if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner is", pos1val);
        
        show_win(pos1val);

            };
        };
    };
};



reset.addEventListener("click", function() {
    location.reload();
})

newgame.addEventListener("click", function() {
    location.reload();
});
