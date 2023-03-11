/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта) yes
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
};

//1
const reclamBox = document.querySelectorAll(".promo__adv img");
reclamBox.forEach((i)=> i.remove());

//2
const genre = document.querySelector(".promo__genre");
genre.textContent = "Драмма";

//3
const bg = document.querySelector(".promo__bg");
bg.style = "background-image:url(./img/bg.jpg)";

//4
movieDB.movies.sort();

const promo_list = document.querySelectorAll(".promo__interactive-item");
promo_list.forEach((i)=> i.remove());
const ul = document.querySelector('.promo__interactive-list');
movieDB.movies.forEach((film,i ) => {
    ul.innerHTML+=`<li class='promo__interactive-item'>${i+1} ${film}<div class="delete"></div></li>`
});



// const boxAdvertisement = document.querySelector('.promo__adv'),                   //присваиваю переменной элемент со страницы под классам .promo__adv
//     boxAdvertisementTitle = boxAdvertisement.querySelector('.promo__adv-title'),//присваиваю переменной элемент со страницы под классам .promo__adv-title
//     boxAdvertisementList = boxAdvertisement.querySelectorAll('img'),            //присваиваю переменной HTMLCollection со страницы под классам .promo__adv
//     boxInfoAboutCinemo = document.querySelector('.promo__bg'),
//     genre = boxInfoAboutCinemo.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list');

// // boxAdvertisementTitle.remove();             // удаляю заголовок при помощи функции remove()   
// // boxAdvertisementList.forEach(item =>{       // через цикл forEach удаляю все рекламные баннеры с сайта
// //     item.remove();                          //item - это каждый элемент в HTMLCollection 
// // });

// genre.textContent = 'драма';                // переприсваиваю значение которое находится в теге div с классом '.promo__genre'
// // const div = document.createElement('div');  //создаю элемент, пока что только в js
// // div.textContent = 'драма';                 //присваиваю этому елементу какой-то текст 
// // div.classList.add('promo__genre');         //добовляю элементу div класс promo__genre
// // infoAboutCinemo[0].replaceWith(div);      //заменяем элемент с нулевым индексом (так как он находится в HTMLCollection) на новый элемент div 

// boxInfoAboutCinemo.style.cssText = 'background-image: url(./img/bg.jpg)';

// movieList.innerHTML = ""; 
// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i+1} ${film}
//             <div class="delete"></div>
//         </li>`;
// });





