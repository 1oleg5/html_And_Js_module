// let url = new URL(location.href);
// let id = url.searchParams.get("id");
//
//
// fetch('https://jsonplaceholder.typicode.com/users/' + id)
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         let div = document.createElement('div');
//         let h2 = document.createElement('h2');
//         h2.innerText = `${value.name} ${value.username} ${value.email} ${value.address.street} ${value.address.suite} ${value.address.city} ${value.address.zipcode} ${value.address.geo.lat} ${value.address.geo.lng} ${value.phone} ${value.website} `;
//         let btn = document.createElement('button');
//         btn.innerText = 'post of current user';
//
//         document.body.appendChild(div);
//         div.append(h2, btn);
//     });