// Даны две переменные a21 и a22. При нажатии кнопки .
// b-2, запускается функция. Функция должна сравнить переменные и вывести в .
// out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let numberA = parseInt(document.querySelector('.a21').textContent);
let numberB = parseInt(document.querySelector('.a22').textContent);
let button = document.querySelector('.btn');
let result = document.querySelector('.out');

button.onclick = () =>{ 
    if(numberA > numberB){
        result.innerHTML = 'Число - ' + numberA + ' больше' ;
    }else{
        result.innerHTML = 'Число - ' + numberB + ' больше';
    }
    numberA.value = '';//отчищаем поля
    numberB.value = '';//отчищаем поля
}