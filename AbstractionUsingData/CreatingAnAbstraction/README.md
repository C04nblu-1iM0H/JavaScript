#Задание
Реализуйте указанные ниже функции:
* makeSegment(). Принимает на вход две точки и возвращает отрезок.
* getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
* getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
* getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.
```javascript
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
segment = makeSegment(beginPoint, endPoint);
 
getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
```
для того чтобы решить данную задачу воспользуемся, формулой расчёта средней точки:
```
 x = (x1 + x2) / 2 и y = (y1 + y2) / 2
```