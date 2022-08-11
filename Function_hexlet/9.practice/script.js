//Реализуйте функцию, которая принимает список пользователей и возвращает объект, 
//где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.

const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
    { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
    { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
    { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
    { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
    { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
    { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];


let getMenCountByYear = (coll) =>{
    return coll.map(el => el.birthday.slice(0,4))
    .reduce((acc,item)=>{
        typeof acc[item] === 'undefined'? acc[item] = 1 : acc[item] +=1;
        return acc;
    },{})
}

console.log(getMenCountByYear(users));
// {
//   1963: 1
//   1973: 3
//   1980: 2
//   1999: 1
//   2012: 3
// };