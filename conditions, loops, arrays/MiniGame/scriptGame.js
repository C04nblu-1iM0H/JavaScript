
//Данная игра будет переделана под функции в другом файле, а это просто практика!!!

var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

var word = words[Math.floor(Math.random()*words.length)]; // выбор случайного слова
console.log("Выбор случайного слова " + word );

//создаём итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {// цикл который заполняется
    answerArray[i] = "_";                  //подчёркиваниями вместо букв слова которое выбраоли
}

var remainingLetters = word.length; //оставшиеся буквы
var die = 6;
var isHit = false;
//игровой цикл 
while (remainingLetters > 0 && die > 0 ) {
    alert(answerArray.join(" "));//показывает состояние игры

    //обработка введённого ответа  
    var guess = prompt("Угадай букву или нажми отмена для выхода из игры.").toLocaleLowerCase();
    if ( guess === null ){
        break;
    }else if(guess.length !== 1){
        alert("Пожалуйста, введите только одну букву.");
    }else{
        isHit = false;
        //обновление состояния игры 
        for(var j = 0; j < word.length; j++){
            if(word[j] === guess){
                if(answerArray[j] === guess){
                    alert('Вы вводили эту букву');
                    break;
                }else{
                    answerArray[j] = guess;
                    remainingLetters--;
                    isHit=true;
                }

            }
        }
        if(!isHit){
            die--;
            alert('У вас осталось ' + die + ' попыток');
            if( die === 0 ){
                alert('Ваши попытки закончились');
                break;
            }
        }
    }
}
alert(answerArray.join(" "));
// document.querySelector(".resWord").innerHTML = letter;
alert("Отлично! Было загадано слово " + word);
