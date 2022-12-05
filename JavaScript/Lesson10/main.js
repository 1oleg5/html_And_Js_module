// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users.forEach(user => {
        let div = document.createElement('div');
        div.innerText = `${user.id} ${user.name} `;
        document.body.appendChild(div);

        let details = document.createElement('button');
        details.innerText = 'user info';

        div.appendChild(details);
            }));

const click = document.button;
click.addEventListener('click', src);

function src() {
}