///Зашифрованная строка

let input = 'javascript is awesome';
let output = "";
for (let i = 0; i < input.length; i++) {
    output += input[i].replace('a','4').replace('e','3').replace('i','1');
}
console.log(output);

let str = 'move';
const reverseString = () => {
    let result = 'lol - ';
    let i;
    for ( i = 0; i < str.length; i+=2) {
      result = `${result}${str[i+1]}${str[i]}`;
    }
  
    return result;
  };

console.log(reverseString())

//Дан массив с числами.
//Числа могут быть положительными и отрицательными. 
///Найдите сумму положительных элементов массива.

function randomNumber(min, max){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}
let arr = [];
let mass = [];
for (let i = 0, el = 10; i < el; i++) {
  arr.push(randomNumber(-10,10));
  mass.push(arr[i]);
}
console.log(mass);
let sum = 0;
for(let i = 0, el = 10; i < el; i++){
  if(mass[i]>=0){
    sum += mass[i];
  }
}
console.log('Сумма положительных элементов массива: ' + sum);

// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let array = [10,20,30,50,235,3000];
let massiv =[];
let resultMassiv = [];
massiv = array.join().split(',');
console.log(massiv);
for (let i = 0; i < massiv.length; i++) {
  if(String(massiv[i]).startsWith(1)||String(massiv[i]).startsWith(2)||String(massiv[i]).startsWith(5)){
    resultMassiv.push(massiv[i])
  }
}
console.log(resultMassiv);