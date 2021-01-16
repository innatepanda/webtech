const input=document.querySelector('.todo_input')
const button=document.querySelector('.submit_button')
const list=document.querySelector('.todo_list')
const mainbtn=document.querySelector('.main_submit');
const comp=document.querySelector('.completed_list');
button.addEventListener("click", add);
mainbtn.addEventListener("click", submit);


function submit(){
    //event.preventDefault();
    //const namev=document.querySelector('.name');
    alert("submit");
    //location.href='http://stackoverflow.com';
    //const he=document.querySelector('.header');
    //he.innerText=name.value+" ,Welcome";
}
function add(event)
{
    
    
    event.preventDefault();
    if(input.value=="")
    {alert("cannot be empty"); //create something here
    return;}


    const div=document.createElement('div'); //add css later
    div.classList.add("todo")
    
    const li=document.createElement('li');
    var currentTime = (new Date()).toDateString();
    li.innerText= input.value;
    li.innerHTML=currentTime+'<br><br>'+li.innerText;
    input.value="";
    li.classList.add("todo_item");
    //div.append(currentTime);
    div.appendChild(li);

    const checked=document.createElement('button');
    checked.innerHTML='<i class="fas fa-check"></i>'
    checked.classList.add("completed_btn");
    checked.addEventListener("click", deleteFunc);
    

    const trash=document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash"></i>'
    trash.classList.add("delete_btn");
    trash.addEventListener("click", deleteFunc);

    div.appendChild(checked);
    div.appendChild(trash);
    //comp.appendChild(div);
    list.appendChild(div);


}
function deleteFunc(event)
{
    event.preventDefault();
    const item=event.target;
    if(item.classList[0]=="delete_btn")
    {
        
        const parent=item.parentElement;
        
        parent.remove();
    }
    if(item.classList[0]=="completed_btn")
    {
        const parent=item.parentNode;
        parent.classList.toggle("completed");
        
        if(parent.classList[1]=="completed")
        {comp.appendChild(parent);}
        else
        {
            list.appendChild(parent);
        }
    
        
    }

    

}