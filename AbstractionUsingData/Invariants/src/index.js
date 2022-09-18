
// const makeRational = (numer, denom) => {
//     let n = numer, d = denom;
//     for (let i = 2; i <= d; i++) {
//         if(n % i === 0 && d % i === 0){
//             n = numer/i, d = denom/i;
//         }     
//     }
//     return {
//         'numer': n,
//         'denom': d
//     };
// };

import solverjs from 'https://cdn.skypack.dev/solverjs?dts';

const makeRational = (numer, denom) => {
    let gcd = solverjs.getGcd(numer, denom);
    return {
        'numer': numer/gcd,
        'denom': denom/gcd
    };
};

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);

const getNumer = ratation => ratation['numer'];
const getDenom = ratation => ratation['denom'];

const ratToString = ratation => `${getNumer(ratation)}/${getDenom(ratation)}`;


const add = (rat1, rat2) => {
    return makeRational(
        getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
        getDenom(rat1) * getDenom(rat2)
    )
};

const rat3 = add(rat1, rat2);

const sub = (rat1, rat2) =>{
    return makeRational(
        getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1),
        getDenom(rat1) * getDenom(rat2)
    )
};   

const rat4 = sub(rat1, rat2);

console.log('Преобразование в дробь -',rat1);
console.log('Числитель =',getNumer(rat1));
console.log('Знаменатель =',getDenom(rat1));
console.log('Преобразование в дробь -',rat2);
console.log('Сложение дробей', rat3);
console.log('ratToString -', ratToString(rat3));
console.log('Разность дробей', rat4);
console.log('ratToString -', ratToString(rat4));