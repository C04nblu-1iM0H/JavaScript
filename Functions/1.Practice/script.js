//Реализуйте и экспортируйте функцию swap(), 
//которая меняет местами первый и последний элемент массива. 
//Если массив содержит меньше двух элементов, 
//то он возвращается как есть.
function swap(mass) {
    if (mass.length < 2) {
        return mass;
    } 
    let tmp = mass[0];
    mass[0] = mass[mass.length-1];
    mass[mass.length-1] = tmp;
    return mass;
}
console.log(swap(['one','two','three']));

//Реализуйте и экспортируйте по умолчанию функцию, 
//которая извлекает из массива элемент по указанному индексу,
// если индекс существует, либо возвращает значение по умолчанию,
//который равен null. 

const cities = ['moscow', 'london', 'berlin', 'porto'];
function getMassive(cities, index) {
    let mess = [];
    if(index < cities.length){
        mess.push(cities[index]);
        return mess.join('');
    }else{
        return null;
    }
}
console.log(getMassive(cities,3));


//Реализуйте и экспортируйте по умолчанию функцию, 
//которая принимает на вход массив и строковой префикс, 
//и возвращает новый массив, в котором к каждому элементу 
//исходного массива добавляется переданный префикс. 
//Функция предназначена для работы со строковыми элементами. 
//После префикса автоматически добавляется пробел.

const names= ['john', 'smith', 'karl'];
function addPrefix(prefix,newMass) {
    newMass=[];
    for (let i = 0; i < names.length; i++) {
        const dollars = names.map(names => prefix +' '+ names);
        newMass = dollars;
    }
    return newMass;
}
const newName = addPrefix('Mr', names);
console.log(newName);
console.log(names);