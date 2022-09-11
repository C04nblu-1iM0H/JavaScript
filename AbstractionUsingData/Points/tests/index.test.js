const calculateDistance = require('../src/index');

////////////////x1,y1
const point1 = [0, 0];
////////////////x2,y2
const point2 = [3, 4];

test('should calculate distance', () => {
    expect(calculateDistance(point1, point2)).toBe(5);
});
