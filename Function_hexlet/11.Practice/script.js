//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. 
//Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

//Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, 
//то возвращается наименьший из индексов ближайших чисел.


let findIndexOfNearest = (coll, item) =>{
    if( coll.length === 0 ) return [];  // проверка на пустой массив
    let res = coll.reduce((acc,val)=>{ 
        return Math.abs(val - item) < Math.abs(acc - item) ? val : acc;
    }); // отнимем от поступающеге элемент результурющий и переюираем пока не будет false 
       //после чего число записывается в переменную acc
    return coll.findIndex( el => el === res); //при помощи метода findIndex находим элемент, 
                                             //который мы получили в reduce и выводим его индекс
}


console.log('Первая ф-я = ',findIndexOfNearest([], 2));
//findIndexOfNearest([], 2);              // null
console.log('Вторая ф-я = ',findIndexOfNearest([15, 10, 3, 4], 0));
//findIndexOfNearest([15, 10, 3, 4], 0);  // 2
console.log('Третья ф-я = ',findIndexOfNearest([7, 5, 3, 2], 4));
//findIndexOfNearest([7, 5, 3, 2], 4);    // 1
console.log('Четвёртая ф-я = ',findIndexOfNearest([7, 5, 4, 4, 3], 4));
//findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2