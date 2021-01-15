const input=document.querySelector('.todo_input')
const button=document.querySelector('.submit_button')
const list=document.querySelector('.todo_list')

button.addEventListener("click", add);



function add(event)
{
    
    
    event.preventDefault();
    if(input.value=="")
    {alert("cannot be empty"); //create something here
    return;}


    const div=document.createElement('div'); //add css later
    div.classList.add("todo")
    
    const li=document.createElement('li');
    li.innerText= input.value;
    input.value="";
    li.classList.add("todo_item");
    div.appendChild(li);

    const checked=document.createElement('button');
    checked.innerHTML='<i class="fas fa-check"></i>'
    checked.classList.add("completed_btn");

    div.appendChild(checked);

    const trash=document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash"></i>'
    trash.classList.add("delete_btn");
    trash.addEventListener("click", deleteFunc);

    div.appendChild(trash);
    list.appendChild(div);


}
function deleteFunc(event)
{
    event.preventDefault();
    const item=event.target;

}