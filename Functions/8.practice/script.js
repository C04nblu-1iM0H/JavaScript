/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

'use strict';

let numberOfFilms;

function start(){
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    generes: [],
    privat: false
};

function rememberMyFilms(objMovies){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов ?', ''),
              b = prompt('На сколько оцените его ?', '');
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            objMovies[a] = b;
            console.log('done');
        }else{
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms(personalMovieDB.movies);

function detectPersenalLevel(count){
    if(count < 10){
        console.log("Посмотренно довольно мало фильмов");
    }else if(count >= 10 && count < 30 ){
        console.log("Вы классический зритель");
    }else if(count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}

detectPersenalLevel(personalMovieDB.count);

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        let gener;
        while(gener == '' || gener == null || gener instanceof String || !isNaN(gener)){
            gener = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.generes[i-1] = gener;
        }
    }
}

writeYourGenres();

