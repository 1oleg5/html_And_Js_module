// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули



let t = document.createElement('div');
t.className = 'target';
document.body.appendChild(t);

let apiURL = 'https://jsonplaceholder.typicode.com/users';

fetch(apiURL)
    .then(response => response.json())
    .then((users) => users.forEach(user => {
        let div = document.createElement('div');
        div.className = 'div';
        let h2 = document.createElement('h2');
        h2.innerText = `${user.id} ${user.name}`;
        let details = document.createElement('button');
        details.innerText = 'user_info';
        details.className = 'knp';
        t.appendChild(div);
        div.append(h2, details);
        details.onclick = function () {
            location.href = 'user-details.html?id=' + user.id;
        }
    }));