// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход document.documentElement,
// извлекает из него параграфы и возвращает массив из их содержимого.
// Не забудьте очистить данные от концевых пробелов и переводов строк с помощью trim()

// let searchTeg = elem =>{
//     let p = elem.querySelectorAll('p');
//     let mess = [];
//     if(elem.children.body === p.tagName ){;
//         for (const el of p) {
//             mess.push(el.textContent.trim());
//         }
//         return mess;
//     }
// }
// const data = searchTeg(document.documentElement);
// console.log(data);

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Реализуйте логику функции, которая принимает на вход document,
// извлекает из него данные и возвращает объект нужной структуры.
// let extractData = document =>{
//     let titleText = document.querySelector('h1').innerHTML;
//     let descriptionText = document.querySelector('.description').innerHTML;
//     let messArticle=[];
//     let elementOne = document.querySelectorAll('a');
//         for (const el of elementOne) {
//             messArticle.push(el.textContent);
//         }

//     let messDescription=[];
//     let elementTwo = document.querySelectorAll('p');
//         for (const el of elementTwo) {
//             messDescription.push(el.textContent);
//         }
//     let el = {
//         title : titleText,
//         description : descriptionText,
//         items:[
//             {title:messArticle[0] ,description:messDescription[0]},
//             {title:messArticle[1] ,description:messDescription[1]}
//         ]
//     }
//     return el;
// }

// const dataDocument = extractData(document);
// console.log(dataDocument);

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) 
// внутри элемента <div> и оборачивает текст в параграф.

// let serchAndFind = document =>{
// const p = document.createElement("p");
// const nodeText = document.createTextNode('Bam');
// p.appendChild(nodeText);
// const pT = p.cloneNode(true);
// let mess = [];
// let div = document.querySelectorAll('div');
// for (const item of div) {
//     mess.push(item);
// }
// for (let i = 0; i < mess.length; i++) {
//     if(mess[i].innerHTML.length > 0){
//         mess[i].textContent='';
//         mess[i].appendChild(p);
//     }
// }
// for (let i = 0; i < mess.length; i++) {
//     if(mess[i].innerHTML.length == 0){
//         mess[i].appendChild(pT);
//     }
// }
// return document.body.innerHTML;
// };

// const dataSearch = serchAndFind(document);
// console.log(dataSearch);