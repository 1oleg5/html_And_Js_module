// - Знайти та вивести довижину настипних стрінгових значень

let h = 'hello world';
let l = 'lorem ipsum';
let j = 'javascript is cool';

console.log(h.length);
console.log(l.length);
console.log(j.length);

// - Перевести до великого регістру наступні стрінгові значення

console.log(h.toUpperCase());
console.log(l.toUpperCase());
console.log(j.toUpperCase());

// Перевести до нижнього регістру наступні стрінгові значення

let h1 = 'HELLO OKTEN';
let l1 = 'LOREM IPSUM';
let j1 = 'JAVASCRIPT IS COOL';

console.log(h1.toLowerCase());
console.log(j1.toLowerCase());
console.log(l1.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

let trim = str.trim()
console.log(trim);

// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strR = 'Ревуть воли як ясла повні';
const stringToArray = (str) => str.split(' ');
console.log(stringToArray(strR));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let map = numbers.map(value => {
    return value + '';
});
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = nums.sort((a, b) => {
    return a - b;
});
console.log(sortNums);

let sortNums1 = nums.sort((a, b) => {
    return b - a;
});
console.log(sortNums1);



// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration));

let filters = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filters);



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let deckOfCards = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    }
];

let find = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(find);

// - всі шістки

let filter = deckOfCards.filter(value => value.value === '6');
console.log(filter);

// - всі червоні карти

let filter1 = deckOfCards.filter(value => value.color === 'red');
console.log(filter1);

// - всі буби

let filter2 = deckOfCards.filter(value => value.cardSuit === 'diamond');
console.log(filter2);

// - всі трефи від 9 та більше

let filter3 = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > 8 || typeof value.value === 'string' &&
    value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
console.log(filter3);
