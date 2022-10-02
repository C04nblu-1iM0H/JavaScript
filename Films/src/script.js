'use strict';

const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов ?', '').trim(),
                  b = prompt('На сколько оцените его ?', '').trim();
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log('Error');
                i--;
            }
        }
    },
    detectPersenalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Посмотренно довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },

    toggleVisibleMyDB:function(){ //показывает или скрывает наш объект
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },

    showMyDB:function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 2; i++) {
            // let genre = +prompt(`Ваш любимый жанр под номером ${i}`).trim();
            // if(genre == '' || genre == null ){
            //     console.log('Вы ввели некорректные данные, или не ввели их вовсе !');
            //     i--;
            // }else{
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            const genres = prompt(`Введите все ваши любимые жанры через запятую`).toLowerCase();

            if(genres === '' || genres == null){//если пустая строка или была нажата кнпка отмена 
                console.log('Вы ввели некорректные данные, или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres = genres.split(', ');//преобразуем к массиву через запятую
                personalMovieDB.genres.sort();//сортируем как строки без каких либо условий
            }
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
