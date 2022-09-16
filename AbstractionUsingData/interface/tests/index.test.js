const {makeDecartPoint,getAngle,getRadius,getX,getY} = require('../src/index');

const x = 4;
const y = 8;
const point = makeDecartPoint(x,y);

describe('testing function', () => {
    test('проверка сохраненных данных в полярной системе координат', () => {
        expect(makeDecartPoint(x,y)).toEqual({angle: 1.1071487177940904, radius: 8.94427190999916});
    })
    test('проверка на возвращения угла', () => {
        expect(getAngle(point)).toEqual(1.1071487177940904);
        expect(getRadius(point)).toEqual(8.94427190999916);
    })
    test('Вернуть X, Вернуть Y', () => {
        expect(getX(point)).toEqual(4);
        expect(getY(point)).toEqual(8);
    })
})