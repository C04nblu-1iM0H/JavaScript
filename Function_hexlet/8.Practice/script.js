//Реализуйте функцию, которая принимает изображение в виде двумерного массива 
//и возвращает массив, увеличенный в два раза.


const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
];


function enlargeArrayImage(coll) {
    let scale = 2;
    let result = [];
    for (let i = 0; i < coll.length; i++) {
        let resultI = [];
        let ai = coll[i];
        for (let j = 0; j < ai.length;j++){
            for(let k=0;k<scale;k++) {
                resultI.push(ai[j])
            }
        } 
        for (var k=0; k<scale; k++)result.push(resultI);
    }
    return result;
}

console.log(enlargeArrayImage(arr));
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********