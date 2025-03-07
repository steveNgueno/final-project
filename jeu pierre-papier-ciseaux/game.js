const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const state = document.getElementById("winOrLose");
const imgY = document.querySelector('.img_you');
const imgC = document.querySelector('.img_computer')

let elements = ["📄", "🪨", "✂"];

rock_btn.addEventListener('click', ()=>{
   displayElements(1);
   isLoseOrWin();
});

paper_btn.addEventListener('click', ()=>{
    displayElements(0);
    isLoseOrWin();
  
});

scissors_btn.addEventListener('click', ()=>{
    displayElements(2);
    isLoseOrWin();
  
})

function displayElements(num){
    imgY.innerText = elements[num];
    imgC.innerText = elements[Math.floor(Math.random()*3)]; 
}
function isLoseOrWin(){
    if(imgY.innerText == "📄" && imgC.innerText == "✂"|| imgY.innerText == "🪨" && imgC.innerText == "📄" || imgY.innerText == "✂" && imgC.innerText == "🪨"){
        state.innerText = "LOSE!";
    }else if(imgY.innerText == imgC.innerText){
        state.innerText= "EQUAL!"
    }else{
        state.innerText = "WIN!";
    }

}