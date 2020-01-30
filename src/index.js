document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", function(event){
    let ul = document.getElementById('tasks');
    let input = document.getElementById('new-task-description').value;
    let priority = document.getElementById("priority").value;
    
    let li = document.createElement('li');
    li.innerHTML = 
        `<span style="color:${priority}" value="${priority}">${input}</span>
        <button class="delete">&times;</button>`
    ul.appendChild(li);
    event.preventDefault()
    let deleteButtons = Array.from(document.getElementsByClassName("delete"))
  
    deleteButtons.forEach(function(button){
      button.addEventListener("click", function(event){
        let li = event.target.parentNode;
        li.remove();
      })

    })

  })
  let button = document.getElementById("sort")
  button.addEventListener("click", function(event){
    let todos = document.querySelectorAll("li")
    let sortedList = todos.sort(function (li){

    })
  })
});