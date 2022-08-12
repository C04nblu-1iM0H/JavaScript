// Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. 
// Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. 
// Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.


let filterAnagrams = ([...str], coll) =>{//при помощи Spred оператора сразу из строки сделал массив символов 
    const chars = str.sort().join('');//после чего отсортировал и объединил символы обратно в строку методом join
    return coll.filter(function (e) {
        return e.split('').sort().join('') === chars; //сравнил между собой две строки и те что вернули true были выведены
    })
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
 console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']
console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// []