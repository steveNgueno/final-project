const generate_btn = document.querySelector('.generate');
const copy_btn = document.querySelector('.copy');
const field = document.querySelector('.field');


copy_btn.onclick = function() {

    if(field.textContent == ""){
        alert("Please generate a password");
    }else{
        navigator.clipboard.writeText(field.textContent);
        alert("Password copied!");
    }
};

function generator(){
    let password = "";
    const allCharacters = [];
    let num = 0;

    for(let j = 33 ; j<= 126; j++){
    allCharacters.push(String.fromCharCode(j));
    }
    for(let i = 0; i<16; i++){
        num = Math.floor(Math.random()*94)
        password += allCharacters[num]; 
    }

    field.textContent = password;
    copy_btn.style.backgroundColor= "#7c7a7a";
    copy_btn.style.color= "#fff";
    
   console.log(allCharacters) 
}
