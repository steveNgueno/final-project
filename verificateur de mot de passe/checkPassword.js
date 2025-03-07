const password = document.getElementById('Password');
const div = document.querySelector('.div2');
const change = document.querySelectorAll('.dynamicParagraph');
const uppercase = /[A-Z]/;
const lowercase = /[a-z]/;
const number = /[0-9]/;

password.addEventListener('click', () =>{
    div.style.display = "block";
    
    password.addEventListener("input", (e) =>{
    
    const input = e.target.value; 
    if(lowercase.test(input)){
       after(0);
    }else {
        before(0);
    }

    if(uppercase.test(input)){
        after(1);
    }else{
        before(1);
    }

    if(number.test(input)){
        after(2);
    }else{
        before(2);
    }

    if(input.length >= 8){
       after(3); 
    }else{
        before(3);
    }
})


})
 document.addEventListener('click', (e) =>{
    if(!password.contains(e.target) && !password.contains(e.target.value)){
      div.style.display = "none";  
    }
        

});
function after(num){
    change[num].style.color = "green";
    change[num].classList.replace("dynamicParagraph", "change"); 
}
function before(num){
    change[num].style.color = "red";
    change[num].classList.replace("change", "dynamicParagraph");
}