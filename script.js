const todoList = ['Wash dishes', 'Watch movie'];

function rendertodoHtml() {
  let todolistHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<li>${todo}</li>`;
    todolistHtml += html;
  }
  //   console.log(todolistHtml);
  document.querySelector('.todolist-items').innerHTML = todolistHtml;
}

rendertodoHtml();

function addToDoItem() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  //   console.log(todoList);
  inputElement.value = '';
  rendertodoHtml();
}
