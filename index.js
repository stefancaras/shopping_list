const container = document.querySelector('#container');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

const sortListChildren = (n1, n2) => {
    [...list.children]
        .sort((a, b) => a.textContent > b.textContent ? n1 : n2)
        .forEach(node => list.appendChild(node));
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('#btn-add').click();
    }
});

container.addEventListener('click', (e) => {
    if (e.target.id === 'btn-add' && input.value !== "") {
        const array = input.value.split(/[,<>]/);
        array.forEach(el => {
            if (el !== "") {
                list.innerHTML += `
                    <div class="item">
                        <span>${el.trim().toLowerCase()}</span>
                        <button class="btn-strike">Taie</button>
                    </div>`
                input.value = '';
            }
        });
    } else if (e.target.classList.contains('btn-sort-up')) {
        sortListChildren(1, -1);
    } else if (e.target.classList.contains('btn-sort-down')) {
        sortListChildren(-1, 1);
    } else if (e.target.id === 'btn-new-list') {
        list.innerHTML = "";
    } else if (e.target.classList.contains('btn-strike')) {
        e.target.parentNode.classList.toggle('bg-dark');
        e.target.parentNode.childNodes[1].classList.toggle('strike');
        e.target.classList.toggle('bg-white');
        e.target.textContent = 'Revino';
        if (!e.target.parentNode.classList.contains('bg-dark')) {
            e.target.textContent = 'Taie';
        }
    }
});