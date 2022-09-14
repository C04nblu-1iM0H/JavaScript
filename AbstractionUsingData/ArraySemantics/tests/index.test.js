const getMidpoint = require('../src/index');

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };

test('should return', () => {
    expect(getMidpoint(point1, point2)).toEqual({x: 2, y: 2});
})