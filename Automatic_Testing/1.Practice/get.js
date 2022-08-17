// Напишите тесты для функции get(obj, key, defaultValue). 
// Эта функция извлекает значение из объекта при условии, что ключ существует. 
// В ином случае возвращается defaultValue.

let get = (obj,val,defaultValue) => {
    return _.get(obj, val,defaultValue);
}

console.log(get({ hello: 'world' }, 'hello')); // world
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty'));// 'kitty'

export default get;