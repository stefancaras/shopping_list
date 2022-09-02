let container = document.querySelector('#container');
let input = document.querySelector('#input');
let buttonAdd = document.querySelector('#buttonAdd');
let list = document.querySelector('#list');

container.addEventListener('click', where);

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      buttonAdd.click();
    }
});

function where(event) {
    const clickedElement = event.target;
    if (clickedElement.id == 'buttonAdd' && input.value != "") {
        const div = document.createElement('div');
        const button = document.createElement('button');
        div.classList.add('item');
        div.innerText = input.value.toLowerCase();
        button.id = 'buttonStrike';
        button.innerText = 'Taie';
        div.append(button);
        list.prepend(div);
        input.value = '';
    } else if (clickedElement.id == 'buttonSU') {
        [...list.children]
        .sort((a,b)=>a.innerText>b.innerText?1:-1)
        .forEach(node=>list.appendChild(node));
    } else if (clickedElement.id == 'buttonSD') {
        [...list.children]
        .sort((a,b)=>a.innerText<b.innerText?1:-1)
        .forEach(node=>list.appendChild(node));
    } else if (clickedElement.id == 'buttonDelete') {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {item.remove()});
    } else if (clickedElement.id == 'buttonStrike') {
        clickedElement.parentNode.classList.toggle('strike');
        clickedElement.innerText = '';
        if (!clickedElement.parentNode.classList.contains('strike')) {
            clickedElement.innerText = 'Taie';
        }
    }
};