
//////////////////НАЧАЛА ОБРАБОТКА СТРК ЧЕРЕЗ ПРЕОБРАЗОВАНИЕ В МАССИВ ///////////////////////////////////

// Реализуйте функцию, которая заменяет каждое вхождение
// указанных слов в предложении на последовательность $#%!
// и возвращает полученную строку. Аргументы:Текст, Набор стоп слов

const sentence = 'When you play the game of thrones, you win or you die';
const sentence2 = 'chicken chicken? chicken! chicken ';


const makeCensored = (sentence, arr) => {
    const separator = ' ';
    const words = sentence.split(separator);
    // console.log(words)
    // console.log(arr)
    const newArr = [];
    const badword= '$#%!'
    for (const word of words) {
        //console.log(word)
        if (arr.includes(word)) {
            newArr.push(badword)
        }else {
            newArr.push(word)
        }
    }
    // console.log(newArr)
    const res = newArr.join(' ');
    return res
};

const result = makeCensored(sentence, ['die', 'play']);
console.log(result);

const makeCensoredREG = (sentence,mass)=>{
    const separator = ' ';
    const words = sentence.split(separator);
    const massWords = mass.join('|');
    const regexp = new RegExp(`${massWords}`, 'gi')
    //console.log(regexp);
    const capitalizedWords = [];
    for (const item of words) {
        const res = item.replace(regexp,'$#%!');
        capitalizedWords.push(res);
    }
    return capitalizedWords.join(' ');
}

const res = makeCensoredREG(sentence, ['die', 'play']);
console.log(result);
//play|die/gi


// Реализуйте функцию, принимающую на вход два массива
// и возвращающую количество общих уникальных значений в обоих массивах.

// // Общие повторяющиеся элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 
// // Общие повторяющиеся элементы: 4
// getSameCount([1, 4, 4], [4, 8, 4]); // 1
 
// // Общие повторяющиеся элементы: 1, 10
// getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 
// // Нет элементов
// getSameCount([], []); // 0


const uniq =(coll)=>{
    const res = []
    const uniqueArray = coll.filter(function(item, pos) {
        return coll.indexOf(item) !== pos;
    })
    const uniqueMass =Array.from(new Set(uniqueArray));
    res.push(uniqueMass.length);
    const result = res.join(' ');
    return result;
}


const flatten = (arr1,arr2) => {
    const newArr = [arr1,arr2];
    //console.log(newArr);
    const result = []
    for (const item of newArr) {
      if (Array.isArray(item)) {
        for (const subItem of item) {
            result.push(subItem)
            //console.log(subItem);
        }
            uniq(result);
      } else {
            result.push(item);
      }
      
    }
    return uniq(result);
  };
  
const flat = flatten([1, 10, 3], [10, 100, 35, 1]);
console.log(flat);


// Реализуйте функцию, которая получает на вход строку и считает, 
// сколько символов (без учёта повторяющихся символов) использовано в этой строке.
// Например, в строке yy используется всего один символ — y. 
// А в строке 111yya! — используется четыре символа: 1, y, a и !.

//Задача решённая через библиотеку Lodash
const text1 = 'yyab'; // y, a, b

const countUniqCharsLodash = (coll)=>{
    if (coll === '') return console.log(0);
    const result = [];
    const res = [];
    let newMas =[];
    for (const item of coll) {
        res.push(item);
        newMas = _.union(res);
    }
    result.push(newMas.length);
    const mass = result.join(' ');
    return mass;
}
console.log(countUniqCharsLodash(text1));


const countUniqChars = (coll)=>{
    if (coll === '') return console.log(0);
    const res = [];
    let kol = [];
    const Word = coll.split('');
    let newArray = Array.from(new Set(Word));
    for (const item of newArray) {
        kol.push(item);
    }
    res.push(kol.length);
    const result = res.join(' ');
    return result;
}
console.log(countUniqChars(text1));