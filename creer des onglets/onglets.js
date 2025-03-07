let div = document.querySelectorAll("div");
let a = document.querySelectorAll("a");

a[0].classList.add("active")
div[0].style.display = "flex";
for(let i = 0; i < a.length; i++){
    a[i].addEventListener("click", function(e){
        e.preventDefault(); 

        div.forEach(div => div.style.display = "none");

        a.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

        div[i].style.display = "flex";

    
    });
}