const arr = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
document.body.appendChild(ul);

for (const string of arr) {
    let li = document.createElement('li');
    li.innerText = `${string}`;
    ul.appendChild(li);
}