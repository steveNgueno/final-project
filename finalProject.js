const links = document.querySelectorAll("a");
const iframe = document.getElementById("iframe");
const nav = document.querySelector("nav")
const mediaQuery = window.matchMedia("(max-width: 690px)")

links[1].classList.add("active");
links[0].style.backgroundColor ="white";
links.forEach(link => { 
    link.addEventListener("click", function(e){
        e.preventDefault();
        
        links.forEach(l =>l.classList.remove("active"));     
        const url = this.getAttribute("data-url");
        iframe.src = url;

        setTimeout(() => {
                this.classList.add("active")
        }, 10);        
        
    })
});


function checkScreenSize(event) {
    if (event.matches) {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.classList.remove("active-menu", "remove-menu");
    }
}

function displayMenu() {
    if (mediaQuery.matches) { 
            nav.style.display = "block";
            nav.classList.add("active-menu");
            nav.classList.remove("remove-menu");
        }
}
function toogleMenu(){
    if (mediaQuery.matches) { 
        nav.classList.add("remove-menu");
        nav.classList.remove("active-menu");
        setTimeout(()=> {
            nav.style.display = "none";
        }, 350);
}
}

nav.addEventListener("click", toogleMenu);

checkScreenSize(mediaQuery)
mediaQuery.addEventListener("change", checkScreenSize);