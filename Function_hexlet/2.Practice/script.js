// Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых
// строк на английском языке.
// Каждая из дат представлена массивом [2001, 10, 18], 
// в котором первый элемент — это год, второй — месяц, 
// и третий — число. Функция на вход должна принимать любое количество параметров. 
// Если в функцию ничего не было передано, она должна вернуть пустой массив. 


// let convert = (...paramsConvert) => {// использовал spread оператор как аргумент функции
//     let date = 0, resultDate = [];
//     if(paramsConvert.length === 0) return []; если длина массива 0 тогда вывожу пустой массив
//     for (let item of paramsConvert) {перебираю элементы массива при помощи цикла
//         date = new Date(item); создаю экземпляр объекта Date полученного переменной item
//         resultDate.push(date.toDateString()); //пушу всё в новый массив с указанием формата даты.
//     }
//     return resultDate;
// }


// console.log(convert());// []
// console.log(convert([1993, 3, 24]));// ['Sat Apr 24 1993']
// console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n 
// символов строки в обратном порядке. Количество символов передаётся в takeLast() 
// вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, 
// функция должна вернуть null.

// let run = (str) =>{
//     let ln = 4;
//     const takeLast = (el,elLen) => el.length >= elLen ? el.split('').reverse().join('').slice(0,4) : null;
//     return takeLast(str,ln); 
// } 
// console.log(run(''));        // null
// console.log(run('cb'));     // null
// console.log(run('power')); //rewo
// console.log(run('hexlet'));//telx