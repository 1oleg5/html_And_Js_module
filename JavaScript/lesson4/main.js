// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>asd</div>`);
// }


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>qwe ${i}</div>`);
// }


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>okten</h1>`);
//     i++;
// }


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>okten ${i}</h1>`);
//     i++;
// }


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`)
// }
// document.write(`</ul>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// let products = [
//     {
//         title: 'Coca-Cola',
//         price: 39,
//         image: 'https://arizona.pl.ua/image/catalog/napitki/kola1l.png'
//     },
//     {
//         title: 'Fanta',
//         price: 40,
//         image: 'https://icf.listex.info/med/d4c65da4-05dd-be43-29d4-d220f8c441f6.jpg'
//     },
//     {
//         title: 'Sprite',
//         price: 32,
//         image: 'https://positano.lv/wp-content/uploads/2021/11/sprite-0.5-newest.png'
//     },
//     {
//         title: 'Schweppes',
//         price: 43,
//         image: 'data:image/jpeg;base64,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'
//     },
// ];
// for (const product of products) {
//     document.write(`
//  <div class="product-card">
//         <h3 class="product-title">${product.title} ___ ${product.price}</h3>
//         <img src="${product.image}" alt="product image" class="product-image">
// </div>
// `);
// }





// є масив

// let users = [
//     {name: 'vasyl', age: '31', status: false},
//     {name: 'petya', age: '30', status: true},
//     {name: 'kolya', age: '29', status: true},
//     {name: 'olga', age: '28', status: false},
//     {name: 'max', age: '30', status: true},
//     {name: 'anya', age: '31', status: false},
//     {name: 'oleg', age: '28', status: false},
//     {name: 'andrey', age: '29', status: true},
//     {name: 'masha', age: '30', status: true},
//     {name: 'olga', age: '31', status: false},
//     {name: 'max', age: '31', status: true},
// ];

// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }

// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

// for (const user of users) {
//     if (user.age > 30){
//     console.log(user);
//     }
// }

