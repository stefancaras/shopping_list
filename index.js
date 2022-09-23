const container = document.querySelector('#container');
const input = document.querySelector('#input');
const buttonAdd = document.querySelector('#buttonAdd');
const list = document.querySelector('#list');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      buttonAdd.click();
    }
});

container.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === 'buttonAdd' && input.value != "") {
        let array = input.value.split(',');
        array.forEach(el => {
            if (el != "") {
                const div = document.createElement('div');
                const button = document.createElement('button');
                div.classList.add('item');
                div.textContent = el.trim().toLowerCase();
                button.classList.add('buttonStrike');
                button.textContent = 'Taie';
                div.append(button);
                list.prepend(div);
                input.value = '';
            }
        });
    } else if (clickedElement.classList.contains('buttonSU')) {
        [...list.children]
        .sort((a,b) => a.textContent > b.textContent ? 1 : -1)
        .forEach(node => list.appendChild(node));
    } else if (clickedElement.classList.contains('buttonSD')) {
        [...list.children]
        .sort((a,b) => a.textContent < b.textContent ? 1 : -1)
        .forEach(node => list.appendChild(node));
    } else if (clickedElement.id === 'buttonDelete') {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {item.remove()});
    } else if (clickedElement.classList.contains('buttonStrike')) {
        clickedElement.parentNode.classList.toggle('strike');
        clickedElement.textContent = '';
        if (!clickedElement.parentNode.classList.contains('strike')) {
            clickedElement.textContent = 'Taie';
        }
    }
});