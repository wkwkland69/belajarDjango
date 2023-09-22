const btnSubmit = document.getElementById('btnSubmit').addEventListener('click', inputTodo);

const form = document.getElementById('todoCreate').addEventListener('submit', (e) => {
    e.preventDefault();
});

const parentList = document.getElementById('todoList');

function inputTodo() {

    const txtString = document.getElementById('txtString').value ;
    const txtEmpty = document.getElementById('txtString').value = "" ; 
    const list = document.createElement('li');
    const btnRemove = document.createElement('input')
    btnRemove.setAttribute('type', 'button');
    btnRemove.setAttribute('id', 'btnRemove');
    btnRemove.setAttribute('value', "Delete");
    btnRemove.addEventListener('click', removeTodo);

    const todo = [];

    todo.push(txtString);

    for (element of todo) {
        list.innerHTML = element

        if(element === '') { 
            alert('isi dulu cuyy'.toUpperCase())
            return false
        }
    }

    function removeTodo() {
        list.parentNode.removeChild(list)
    }

    parentList.appendChild(list, btnRemove);
    list.appendChild(btnRemove)
}