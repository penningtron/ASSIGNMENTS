    
    
    

    
    document.getElementById('submitBtn').addEventListener('click', function(){
            let todos = document.getElementsByName('todo');
            let allChecked = true;
            console.log(todos)

            for (let i = 0; i < todos.length; i++) {
                if (!todos[i].checked){
                    allChecked = false;
                    break;
                }
            }

            if (allChecked) {
                alert("All todos are checked!!");


            } else {
                alert('Please get your shit done!!');
            }



        });

    document.addEventListener('DOMContentLoaded', function(){
        const form = document.getElementById('todoInput');
        const todoList = document.getElementById('todoList');
        form.addEventListener('submit', function(event) {

            event.preventDefault(); // prevent form submissions 

            const todoItemInput = document.getElementById('todoItem');
            const todoItemValue = todoItemInput.value.trim();

            if (todoItemValue !== ''){
                // create a new list item
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                <input type="checkbox" name="todo" value="${todoItemValue}">
                ${todoItemValue}
            `;

            // append the new list item to the list
            todoList.appendChild(listItem);

            // reset the input field
            todoItemInput.value = '';
            } else {
                alert('Enter an item.')
            }
        });
        

    });

    