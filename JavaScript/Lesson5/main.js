// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a, b) => a + b;
// console.log(calc(10, 20));


// створити функцію яка обчислює та повертає площу кола з радіусом r

// let Pi = 3.14;
// function foo(Pi, r) {
//     return Pi * r * r;
// }
// console.log(foo(Pi, 10));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function foo(h,r) {
//     return 2 * 3.14 * r * (h + r);
// }
// console.log(foo(2, 5));

// створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4];
// function foo(arr) {
//     console.log(arr);
// }
// foo(array);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function writer(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// writer('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque eum impedit.')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(block) {
//     document.write(`<ul>
// <li>${block}</li>
// <li>${block}</li>
// <li>${block}</li>
// </ul>`);
// }
// foo('okten school');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(text,number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// foo('okten school', 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1,'okten',true];
// function foo(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foo(array);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 32
//     },
//     {
//         id: 2,
//         name: 'Jack',
//         age: 31
//     },
//     {
//         id: 3,
//         name: 'Jimmy',
//         age: 33
//     },
// ];
// function foo(user) {
//     for (const userElement of user) {
//         document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`)
//     }
// }
// foo(users);

// створити функцію яка повертає найменьше число з масиву

// let array = [10,8,54,846];
// function foo(arr) {
//    let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(foo(array));

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [5,25,40,57];
// function foo(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(foo(array));