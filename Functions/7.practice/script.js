/////////////////////////////////////////////BIG O///////////////////////////////////////

// Реализуйте функцию, которая принимает на вход два
// отсортированных массива и находит их пересечение.
// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
 
// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
 
// getIntersectionOfSortedArrays([], [2]); // []

const arr = [[10, 11, 24], [10, 13, 14, 18, 24, 30]];
const res=[];

const getIntersectionOfSortedArrays = (coll1, coll2) =>{
    console.log('Первый массив',coll1);
    console.log('Второй массив',coll2);
    for (let i = 0; i < coll1.length; i++) {
        for (let j = 0; j < coll2.length; j++){
            if(coll1[i] == coll2[j]){
                res.push(coll1[i]);
            } 
        }
    }
    return res;
}
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));



///////////////////////////////////////////// Деструктуризация ///////////////////////////////////////
// Реализуйте и экспортируйте функцию getTheNearestLocation(), 
// которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

// locations – массив мест на карте. Каждое место - это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
// point – текущая точка на карте. Массив из двух элементов-координат x и y.

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];
const currentPoint = [5, 5];

const getDistance = ([x1, y1], [x2, y2]) => {
    //console.log("x1: ",x1," y1: ",y1 );
    //console.log("x2: ",x2," y2: ",y2);
    const xs = x2 - x1;
    const ys = y2 - y1;
    //console.log('xs - ', xs);
    //console.log('ys - ', ys);
    
    return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = ()=>{
    if (locations.length === 0) {
        return null;
    }
    let result = locations[0];
    let distance = 100;
    for (const item of locations) {
        // console.log("item: ",item);
        const [x1,y1] = item[1]; // Полуение 2 эллемнта массива в массиве ([10, 5] ,[1, 3] ,[8, 4])
        // console.log("[x1,y1]: ",[x1,y1]);
        const [x2,y2] = currentPoint;
       //console.log("getDistance", getDistance([x1, y1], [x2, y2]))
        if (getDistance([x1, y1], [x2, y2]) < distance ) {
            distance = getDistance([x1, y1], [x2, y2])
            //console.log("distance: ",distance);
            result = item
            //console.log("result: ",result);
        }
    }
    return result;
}
console.log(getTheNearestLocation(locations,currentPoint));



//////////////////////НАЧАЛА REST и Деструктуризация ///////////////////////////////////
// Реализуйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.

const arrMass = [1, 10, 8];

const getMax =(coll)=>{
const res = [];
for (let i=0; i<coll.length; i++){
    console.log("эллемент массива -", coll[i]);
    if(coll[i]>coll[i+1]){
        res.push(coll[i]);
    }
}
const result = res.join('');
return result;
};

console.log(getMax(arrMass));



///////////////////////////////////// Spread-оператор и создание новых массивов////////////////////
// Реализуйте и экспортируйте функцию flatten(). 
// Эта функция принимает на вход массив и выпрямляет его: 
// если элементами массива являются массивы, 
// то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

const mass = [1, [3, 2], 9];

const flatten = (coll) => {
if(coll.length === 0) return [];

const result = [].concat(...coll);

return result;
};
console.log(flatten(mass));


//Функция переворота строки
let textMy = 'hello world my name Nikolay';

function reverseWords(str) {
    return str.replace(/\w{5,}/g, word => word.split('').reverse().join(""));
}
console.log(reverseWords('hello world my name Nikolay'));

//Функция переворота строки
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
console.log(spinWords('hello world my name Nikolay'));