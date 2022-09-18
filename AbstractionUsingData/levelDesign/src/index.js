// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

const getX = (point) => point.x;
const getY = (point) => point.y;

function makeDecartPoint(x,y){
    return {x,y}
}

const point = makeDecartPoint(-4, 3); //point - левая верхняя точка

function makeRectangle(point, width, height){
    return{
        'startPoint': point,
        'width'     : width,
        'height'    : height,
    }
}

const rectangle = makeRectangle(point, 5, 4);



function getStartPoint(rectangle){
    return rectangle['startPoint'];
}

function getWidth(rectangle){
    return rectangle['width'];
} 

function getHeight(rectangle){
    return rectangle['height'];
}

const quadrant = (point) => {
    const x = getX(point);
    const y = getY(point);

    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    if (x > 0 && y < 0) return 4;

    return null;
};

function containsOrigin(rectangle){
    let a = quadrant(getStartPoint(rectangle));
    let b = quadrant(makeDecartPoint(getStartPoint(rectangle).x + getWidth(rectangle), getHeight(rectangle)));
    let c = quadrant(makeDecartPoint(getWidth(rectangle), getStartPoint(rectangle).y - getHeight(rectangle)));
  
    if(a !== b && b !== c && c !== a){
        return true;
    }
  
    return false;
}

console.log('makeDecartPoint -', point);
console.log('makeRectangle -', rectangle);
console.log('getStartPoint -', getStartPoint(rectangle));
console.log('getWidth -', getWidth(rectangle));
console.log('getHeight -', getHeight(rectangle));
console.log('quadrant -',quadrant(point));
console.log('containsOrigin -',containsOrigin(rectangle));

module.exports ={
    makeDecartPoint,
    makeRectangle,
    getStartPoint,
    getWidth,
    getHeight,
    quadrant,
    containsOrigin
}