const usersLodesh = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

let takeOldestLodash = (coll, count = 0) => {
    let result = [], mess = [];
    mess = _.sortBy(coll, [el => { return Date.parse(el.birthday); }]);
    for (let i = 0; i <= count; i++) {
       result.push(mess[i]); 
    }
    return result;
}
console.log(takeOldestLodash(usersLodesh));

// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];