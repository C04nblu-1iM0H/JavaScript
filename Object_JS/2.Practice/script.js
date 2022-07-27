// Реализуйте функцию, которая считает количество слов в предложении,
// и возвращает объект. В объекте свойства — это слова (приведенные к нижнему регистру),
// а значения — это то, сколько раз слово встретилось в предложении.
// Слова в предложении могут находиться в разных регистрах.
// Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.

// const text1 = 'one two three two ONE one wow';
// const text2 = 'another one sentence with strange Words words';
// const text3 = '';
// const result = {};

// let countWords = (coll) =>{
//     if(coll === '') return result;
//     let registr = coll.toLowerCase();
//     let arr = registr.split(' ');
//     for (const item of arr) {
//         if(result.hasOwnProperty(item)){
//             result[item] += 1;
//         }else{
//             result[item] = 1;
//         }
//     }
//     return result;
// } 

// console.log(countWords(text1));


/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Реализуйте функцию, которая формирует из переданного объекта другой объект,
// включающий только указанные свойства. Параметры:
// Исходный объект
// Массив имен свойств

// const data = {
//     user: 'ubuntu',
//     cores: 4,
//     os: 'linux',
// };

// // const data2={}

// let pick = (obj, expectedKey) =>{
//     const result = {};
//     if(Object.keys(obj).length === 0) return result;
//     const entries = Object.entries(obj);
//     for (const [key,value] of entries) {
//         for (const keys of expectedKey) {
//             if(key === keys){
//                 result[keys] = value;
//             }
//         }
//     }
//     return result;

// }

// console.log(pick(data,['user']));
// console.log(pick(data,['user', 'os']));
// console.log(pick(data,[]));
// console.log(pick(data,['none', 'cores']));