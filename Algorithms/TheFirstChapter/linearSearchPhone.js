//известен номер, нужно найти фамилию в телефонной книге. Производить поиск нужно по всей телефонной книге
//Получаем линейный поиск О(n)

const person = [
    {lasname:'Аандреев', phone:'24(953)096-02-75'},
    {lasname:'Авчаренко',phone:'7(746)113-56-90'},
    {lasname:'Бабаев',   phone:'1(369)124-12-12'},
    {lasname:'Вавилова', phone:'98(643)181-21-79'},
    {lasname:'Гаврилин', phone:'7(3329)505-92-81'},
    {lasname:'Давидыч',  phone:'30(96)377-19-03'},
    {lasname:'Евгеньев', phone:'94(977)707-75-69'},
    {lasname:'Жбанов',   phone:'7(746)113-56-90'},
    {lasname:'Забелин',  phone:'103(80)519-26-62'},
    {lasname:'Иванов',   phone:'4(7334)743-86-59'},
]

let linearSearchPhone = (coll, item) => {
    let result = coll.filter(el => el.phone === item).map(el => el.lasname).join(', ');
    return result;
}

console.log(linearSearchPhone(person, '7(746)113-56-90'));