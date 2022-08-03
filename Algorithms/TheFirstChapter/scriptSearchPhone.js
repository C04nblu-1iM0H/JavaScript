
//Известна фамилия нужно найти номер в телефонной книге
//так же используя бинарный поиск О(log n)

const person = [
    {lasname:'Аандреев',phone:'24(953)096-02-75'},
    {lasname:'Авчаенко',phone:'7(746)113-56-90'},
    {lasname:'Бабаев',phone:'1(369)124-12-12'},
    {lasname:'Вавилова',phone:'98(643)181-21-79'},
    {lasname:'Гаврилин',phone:'7(3329)505-92-81'},
    {lasname:'Давидыч',phone:'30(96)377-19-03'},
    {lasname:'Евгеньев',phone:'94(977)707-75-69'},
    {lasname:'Жбанов',phone:'84(9665)931-12-15'},
    {lasname:'Забелин',phone:'103(80)519-26-62'},
    {lasname:'Иванов',phone:'4(7334)743-86-59'},
]

let binarySearchName = (coll, el) => {
    let start = 0;              // начальный индекс в массиве
    let end = coll.length-1;    // конечный индекс

    while (start <= end) { //пока часть не сократится до одного элемента
        let middle = Math.floor((start + end) / 2);//проверяем средний элемент

        if(coll[middle].lasname === el) return coll[middle].phone; //если нашли имя в массиве и оно равно имени в аргументе, то выводим номер телефона этого человека
        let human = coll[middle].lasname  //приcваиваю перменной имя человека 
        if(human.charCodeAt(start) > el.charCodeAt(start)){//сравниваю первые символы по unicode
            end = middle - 1; //если много, то опускаюсь вниз по списку
        }else{
            start = middle + 1;// если мало, то поднимаюсть вверх по списку 
        }
    }
    return null;//если нет такого имени то вывожу null 
}

console.log(binarySearchName(person, 'Иванов'));