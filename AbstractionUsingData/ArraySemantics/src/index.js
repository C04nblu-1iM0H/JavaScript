

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };

//x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

let getMidpoint = (obj1, obj2) => {
    let obj3 = {};

    obj3.x = (obj1.x + obj2.x) / 2;
    obj3.y = (obj1.y + obj2.y) / 2;

    return obj3;
}

const point3 = getMidpoint(point1, point2);

console.log(point3); // => { x: 2, y: 2 };

module.exports = getMidpoint;