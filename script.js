window.onload=function(){
let newtask=document.getElementById('newtask')
let addtask=document.getElementById('addtask')
let todolist=document.getElementById('todolist')
addtask.onclick=function(){
    let item=document.createElement('li')
    // x button
    let xBtn=document.createElement('button')
    xBtn.innerText='❌'
    xBtn.onclick=function(event){
        event.target.parentElement.remove()
    }

    // up button
    let upbtn=document.createElement('button')
    upbtn.innerText='⬆️'
    upbtn.onclick=function(event){
        // event.target is the up button
        // event.target.parentElement is li item
        // event.target.parentElement.parentElement is todolist
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement,
            event.target.parentElement.previousElementSibling

        )
        
    }
    let downbtn=document.createElement('button')
    downbtn.innerText='⬇️'
    downbtn.onclick=function(event){
        // event.target is the up button
        // event.target.parentElement is li item
        // event.target.parentElement.parentElement is todolist
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling,
            event.target.parentElement
        )       
        
    }
    // add span
    let taskspan=document.createElement('span')
    taskspan.innerText=newtask.value
    item.appendChild(xBtn)
    item.appendChild(upbtn)
    item.appendChild(downbtn)
    item.appendChild(taskspan)
    todolist.appendChild(item)
   // todolist.innerHTML+=`<li>${newtask.value}</li>`// this not a good method to make list as the whole list gets refreshed on adding a new element
}
    






}