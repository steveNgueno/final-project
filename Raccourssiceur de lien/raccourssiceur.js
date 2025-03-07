const input = document.getElementById('input');
const invalid = document.querySelector('.invalid');
const warning= document.querySelector('.div2 p');



async function shortener(){
    if(!input.value == ""){
        warning.style.display = "none";

        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(input.value)}`)

        if(response.ok){
            const data = await response.text();
            invalid.innerHTML = data;
            invalid.style.display = 'block';
        }else{
            invalid.innerHTML = 'invalid link';
        }
        
    }else{
        warning.style.display = "block";
        invalid.style.display = "none";
    }
}