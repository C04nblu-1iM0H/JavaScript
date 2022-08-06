// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей
// и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром,
// который по умолчанию равен 0.

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];


let takeOldest = (coll, count = 0) => {
    let result = []
    coll.sort((a,b) =>{return Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1;});
    for (let i = 0; i <= count; i++) {
        result.push(coll[i]);
    }
    return result;
}

console.log(takeOldest(users));

// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];