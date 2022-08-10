//Реализуйте функцию, которая принимает на вход список емейлов, 
//а возвращает количество емейлов, расположенных на каждом бесплатном домене. 
//Список бесплатных доменов хранится в константе freeEmailDomains.

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const freeEmailDomains = [
    'gmail.com', 'yandex.ru', 'hotmail.com'
];

let getFreeDomainsCount = ( coll ) => coll 
    // при помощи match выводил домены
    .map( (el) => el.match(/\.?[^@]+$/)[0] )
    //проверял находяться ли элементы freeEmailDomains в el
    .filter( el => freeEmailDomains.includes(el))
    //  acc изначально это пустой объект, domain - сам домен
    .reduce((acc, domain) => {
        if(typeof acc[domain] === 'undefined'){
            acc[domain] = 1;//если нет ключа
        }else{
            acc[domain] += 1;// если есть ключ 
        }
        return acc;
    },{});


console.log(getFreeDomainsCount(emails));

// {  
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };