
// Реализуйте функцию getSameParity, 
// которая принимает на вход массив чисел и возвращает новый, 
// состоящий из элементов, у которых такая же чётность, 
// как и у первого элемента входного массива.

function getSameParity(arr){
    const result = [];
    let s = arr[0] % 2;
    console.log('проверяем чётность первого элемента',s);
  
    for(const item of arr){
      if(item % 2 === s){
        result.push(item);
      }
    }
    return result;
  }
  console.log(getSameParity([])) // []
  console.log(getSameParity([1, 2, 3]))  // [1, 3]
  console.log(getSameParity([2, 2, 8])) // [2, 2, 8]
  console.log(getSameParity([3, 6, 7, 8])) // [3, 7]
  console.log(getSameParity([4, 6, 7, 8])) // [4, 6, 8]



//   Реализуйте функцию, 
//   которая принимает на вход в виде массива кошелёк 
//   с деньгами и название валюты и возвращает сумму 
//   денег указанной валюты. Реализуйте данную функцию 
//   используя управляющие инструкции.
// Примеры
// const money1 = [
//   'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
// getTotalAmount(money1, 'usd') // 16
 
// const money2 = [
//   'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money2, 'eur') // 135
 
// const money3 = [
//   'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money3, 'rub') // 270

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];

function getTotalAmount(coll, str){
    let result = 0;
    if ( coll== null) {
        return null;
    }

    for (const item of coll) {
        if(item.slice(0,3) == str){
            let numMass = parseInt(item.match(/\d+/));
            result += numMass;
        }
    }
    return result;
}
console.log('Сумма средств usd = ', getTotalAmount(money1,'usd'));
console.log('Сумма средств eur = ', getTotalAmount(money2,'eur'));
console.log('Сумма средств rub = ', getTotalAmount(money3,'rub'));

