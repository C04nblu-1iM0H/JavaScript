// Реализуйте и экспортируйте по умолчанию функцию, 
// которая высчитывает сумму всех элементов массива, 
// которые делятся без остатка на 3 (три).
const coll =[];
const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];

function GetSummValues(sum = 0 ) {
    if (coll1.length == 0) {
        return null;
    }
    for (let i = 0; i < coll1.length; i++) {
        let elemMass = coll1[i];
        if(elemMass % 3 ==0){
            sum += elemMass;
        }
    }
    return sum;
}

console.log('Сумма всех элементов, который делятся без остатка на 3 = ', GetSummValues());

// Реализуйте и экспортируйте по умолчанию функцию, 
// которая высчитывает среднее арифметическое элементов переданного массива.

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];
const temperatures = [];

function Temp(sum,print) {
    sum = 0;
    print = 0;
    if(temperatures1 == 0){
        return null;
    }else{
        for (const value of temperatures1) {
            sum+=value;
        }
    }
    print = sum/temperatures1.length;
    return print;
}
console.log('Ответ первой функции :',Temp());

function getTemp(sum,print) {
    sum = 0;
    print = 0;
    if (temperatures2 == 0) {
        return null;
    }else{
        for (let i = 0; i<temperatures2.length;i++) {
            let value = temperatures2[i];
            sum+=value;
        }
    }
    print = sum / temperatures2.length;
    return print;
}

console.log('Ответ второй функции :',getTemp());