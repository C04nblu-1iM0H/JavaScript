// Реализуйте и экспортируйте по умолчанию функцию, 
// которая нормализует имена классов для всех элементов на странице.
// В данном случае это означает, что происходит преобразование всех классов, 
// написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter

// let camelCaseFun = document => {
//     let Dom = document.body.getElementsByTagName('*');
//     let massiv = [];
//         for (const item of Dom) {
//             massiv.push(item);
//         }
//         mes=[];
//     for (let i = 0; i < massiv.length; i++) {
//         if(massiv[i].hasAttribute('class')){
//             let el = massiv[i].getAttribute('class').split('-')
//             .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
//             let elem = el.split('_')
//             .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
//             console.log(elem);
//             massiv[i].setAttribute('class',elem);
//         }
//         mes.push(massiv[i]);
//     }
//     return mes;
// }

// const camelCase = camelCaseFun(document);
// console.log(camelCase);