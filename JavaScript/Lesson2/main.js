// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let a = [{name: 'John'},85,96,false,332,true,412,'okten',[1,5,87],11];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'Simpsons',
    pageCount: '249',
    genre: 'Comedy'
}


const book2 = {
    title: 'English',
    pageCount: '127',
    genre: 'Study'
}

 const book3 = {
    title: 'Geography',
    pageCount: '278',
    genre: 'Study'
}
console.log(book1, book2, book3,);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age



let books1 = {
    title: 'Ghost',
    pageCount: '847',
    genre: 'Fantasy',
    authors: [
        {name: 'Judy',
        age:32
        }
    ]
}


let books2 = {
    title: 'How to build a house',
    pageCount: '952',
    genre: 'Engineering',
    authors: [
        {name: 'Antony S',
            age: '28'}
    ]
}


let books3 = {
    title: 'Love story',
    pageCount: '246',
    genre: 'Love',
    authors: [
        {name: 'Jessika K',
        age: '56'}
    ]
}
console.log(books1, books2, books3);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача



let n10 = [
    {name: 'Vasyl', username: 'Vasilius', password: 1234},
    {name: 'Jessika', username: 'Jess', password: 4321},
    {name: 'John', username: 'Jjj', password: 2314},
    {name: 'Sergey', username: 'OnlyS', password: '1qa3'},
    {name: 'Ivan', username: 'Ivan1987', password: 8520},
    {name: 'Artem', username: 'Artemon25', password: 44601},
    {name: 'Tamila', username: 'Ta_mila', password: 74213},
    {name: 'Viktor', username: 'V12', password: 371327},
    {name: 'Gennadiy', username: 'Tachka17', password: 13752},
    {name: 'Volodymyr', username: 'Vovan55', password: 1723}
]
console.log(n10[0].password);
console.log(n10[1].password);
console.log(n10[2].password);
console.log(n10[3].password);
console.log(n10[4].password);
console.log(n10[5].password);
console.log(n10[6].password);
console.log(n10[7].password);
console.log(n10[8].password);
console.log(n10[9].password);