const operation = document.querySelector(".operation");
const score = document.querySelector(".score");
const input = document.getElementById("answer");
const submit = document.querySelector(".submit");
const restart = document.querySelector(".restart");
const mention = document.querySelector(".mention");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");


let number1= Math.floor(Math.random()*10);
let number2 = Math.floor(Math.random()*10);
let point = 0;
   
function quiz(){

    operation.innerHTML = number1 +" + "+ number2;

    submit.addEventListener("click", () => {
    const sum = number1 + number2;
    const answer = input.value;
    
        if(sum == answer){
            mention.style.display = "block";
            point ++;
           displayOperation(); 

        }else{
            div2.style.display = "flex";
            div1.style.display = "none";
        }

        score.innerText = point;
     
    });
    restart.addEventListener("click", () => {
        div2.style.display = "none";
        div1.style.display = "flex";
        mention.style.display = "none";
        displayOperation();
        point = 0; 
    })

}

function displayOperation(){
    input.value= '';
    number1= Math.floor(Math.random()*10);
    number2 = Math.floor(Math.random()*10);
    operation.innerHTML = number1 +" + "+ number2 
}

quiz();

    
