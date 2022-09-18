const {makeDecartPoint,makeRectangle,getStartPoint,getWidth,getHeight,quadrant,containsOrigin} = require('../src/index');

const point = makeDecartPoint(-4, 3);
const rectangle = makeRectangle(point, 5, 4);
describe('Проверка функции на то, принадлежит ли центр координат прямоугольнику', ()=>{
    test('провекра на создание прямоугольника', ()=>{
        expect(rectangle).toEqual({startPoint: { x:-4, y:3 }, width: 5, height: 4});
    })
    test('провекра на работу селекторов', ()=>{
        expect(getStartPoint(rectangle)).toEqual({x: -4, y: 3});
        expect(getWidth(rectangle)).toEqual(5);
        expect(getHeight(rectangle)).toEqual(4);
    })
    test('провекра на поиск квадранта', ()=>{
        expect(quadrant(point)).toBe(2);
    })
    test('провекра на то, принадлежит ли центр координат прямоугольнику', ()=>{
        expect(containsOrigin(rectangle)).toBeTruthy();
        expect(containsOrigin(rectangle)).toBe(true);
    })
})
