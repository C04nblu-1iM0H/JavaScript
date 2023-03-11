//Реализуйте функцию, которая "нормализует" данные переданного урока. 
//То есть приводит их к определенному виду.
//Наша функция должна обновлять содержимое урока по следующим правилам:
//Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
//Весь текст описания приводится к нижнему регистру.

// //объект
const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
};

//функция нормализации объекта
let normalize = (obj) => {
    obj.name = obj.name.toLowerCase();//приводим всю строку к нижнему регистру
    obj.name = obj.name[0].toUpperCase() + obj.name.slice(1);//привожим первый элемент значения name к верхнему регистру
                                                            // и добовляем оставшуюсь строку после первого элемента slice(1)
    obj.description = obj.description.toLowerCase();//приводим всю строку к нижнему регистру
}
//функция не имеет возврата так как объекты как и массивы передаются по ссылке
//изменение переданного объекта внутри отражается на самом объекте: 
normalize(lesson);//вызов функции
console.log(lesson);

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Реализуйте функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам.
// Эта функция принимает на вход две компании и возвращает true,
// если их структура одинаковая, и false в обратном случае.
// Проверка должна проходить по свойствам name, state, website.

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
 
const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

let is = (obj_1, obj_2) =>{
    if(obj_1.name === obj_2.name && obj_1.state === obj_2.state && obj_1.website === obj_2.website){
        return true;
    }else{
        return false;
    }
}
console.log(is(company1,company2));


/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

//Реализуйте функцию, которая принимает на вход имя сайта и возвращает информацию о нем:
//getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }
 
//etDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }
 
//getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }

////////////РЕШЕНИЕ////////////////

let getDomainInfo = (str, protocol = 'http') =>{
    const strRemove = str.split('://');//при помощи метода split() 
                                      //разбиваем строку на массив по указанному разделителю.
    console.log(strRemove);
    if(strRemove[0].startsWith('http') != true){//проверка на первые символы, если строка начинается
                                                //c 'http' то метод возвращает true и выполняется блок if
                                                // иначе блок if не выполняется и код продолжает работать дальше
        strRemove.unshift(protocol);
        console.log(strRemove);
    }
    protocol = strRemove[0];//присваеваем переменной protocol значение 0-элемента массива strRemove
    const site = strRemove[1];//присваеваем переменной site значение 1-элемента массива strRemove
    const info = {protocol, site}// создаем объект в упращённом стиле, так как имя константы соотвествуют имени свойств
    return info;//возвращаем объект
}

console.log(getDomainInfo('yandex.ru'));
console.log(getDomainInfo('http://google.com'));