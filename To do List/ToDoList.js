
const input= document.getElementById('input');
const toDoList = document.querySelector('.toDoContainer')
// const toDoList = document.querySelector('section');
const submit = document.querySelector('input:last-child');


submit.addEventListener('click', (event) => {
    event.preventDefault();
    const task = document.createElement('p');
    task.innerText = input.value;
    task.classList.add('div_style')
   
    if(input.value !== ''){
        toDoList.appendChild(task);
        input.value= "";
    }
        
    task.addEventListener('click', () => {
        task.style.textDecoration ="line-through";
        task.style.backgroundColor="orange";  
    });

    task.addEventListener('dblclick', () => {
        toDoList.removeChild(task);
    });


});







