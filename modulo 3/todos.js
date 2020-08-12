var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos =  JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
    var textElement = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    var pos = todos.indexOf(todo);

    linkElement.setAttribute('onclick', 'removeLista(' +pos+ ')');
    linkElement.setAttribute('href', '#');


    todoElement.appendChild(textElement);
    listElement.appendChild(todoElement);
    linkElement.appendChild(linkText);
    listElement.appendChild(linkElement);;
    }
}

renderTodos();


function removeLista(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function adicionar() {
    var newTodo = inputElement.value;

    todos.push(newTodo);
    inputElement.value = "";
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}



