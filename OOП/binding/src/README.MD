#Задание
Реализуйте функцию, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:
* obj – объект выступающий в роли контекста
* fn() – функция привязываемая к контексту

```javascript
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);
// Принимает столько же аргументов сколько и исходная функция
//в данном случае один аргумент
fnWithContext(3); // 8
```