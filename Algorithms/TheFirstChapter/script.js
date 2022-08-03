//Функция binary_search получает отсортированный массив и значение. 
//Если значение присутсвует в массиве, то функция возвращает его позицию.

const N = 10;
const mess = Array.from(Array(N+1).keys()).slice(1);//функция создание массива от 1 до N
console.log(mess);

let binary_search = (coll, item) =>{//В переменной low and high хранятся границы массива, в которой выполняется поиск
    let low = 0;                 // начальный индекс в массиве
    let high = coll.length - 1; // конечный индекс
    if(coll.length === 0)  return null;

    while (low <= high) {       //пока часть не сократится до одного элемента
        let middle = Math.floor((low + high) / 2); //проверяем средний элемент

        if(coll[middle] == item) return middle;         //значение найдено
        if (coll[middle] > item){            // много
            high = middle - 1;
        }else{                       //мало
            low = middle + 1;
        }         
    }
    return null;
} 
console.log(binary_search(mess,10));