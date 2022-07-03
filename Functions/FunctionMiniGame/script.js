/////////////////////////////////GAME FUNCTIONS ///////////////////////////

var pickWord = function(){// выбор случайного слова//
    var words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек"
    ];
return words[Math.floor(Math.random()*words.length)]; 
};

var word = pickWord();
console.log('Загаданное слово : ' + word);

var setUpAnswerArray = function(word){// создаём итоговый массив //
var answerArray = [];
    for (var i = 0; i < word.length; i++) {// цикл который заполняется
        answerArray.push("_");        //подчёркиваниями вместо букв слова которое выбраоли
    }
    return answerArray;
};
var answerArray = setUpAnswerArray(word);

var showPlayerProgress = function(answerArray){// показывает состояние игры //
    return alert(answerArray.join(" "));
};

var getGuess = function(){// запрашивает ответ игрока с помощью prompt //
    return guess = prompt("Угадай букву или нажми отмена для выхода из игры.").toLocaleLowerCase();
};

var remainingLetters = word.length; //оставшиеся буквы
var die = 3;//сколько попыток есть у игрока
console.log('Сколько букв в слове : ' + remainingLetters);



var updateGameState = function(guess,word,answerArray){//обновление состояния игры ///
    for(var j = 0; j < word.length; j++){
        if(word[j] === guess){
            if(answerArray[j] === guess){
                alert('Вы вводили эту букву');
                break;
            }else{
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    return  remainingLetters;
};


var countGameErorr = function(guess,word,die){//обновление состояния игры ///
    let isHit = word.includes(guess);
    if(!isHit){
        die--;
        alert('У вас осталось ' + die + ' попыток');
    }
    return die;
};

var showResultGame = function(answerArray){
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + word);
};

//////////////////////////////////////////игровой цикл///////////////////////////////////////// 
while (remainingLetters > 0 && die > 0 ) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if ( guess === null ){    //обработка введённого ответа  
        break;
    }else if(guess.length !== 1){
        alert("Пожалуйста, введите только одну букву.");
    }else{
        var curretGuess = updateGameState(guess,word,answerArray);//сколько букв осталось
        remainingLetters = curretGuess;

        var count = countGameErorr(guess,word,die);//счётчик попыток
        die = count;
    }
}

if(die === 0){
    alert('Ваши попытки закончились, вас убили');
}else if(remainingLetters === 0 ){
    showResultGame(answerArray);
}
