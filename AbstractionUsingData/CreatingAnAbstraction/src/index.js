
let makeDecartPoint = (x,y) => ({x,y});

const getX = (point) => point.x;
const getY = (point) => point.y;

let beginPoint = makeDecartPoint(3, 2);
let endPoint = makeDecartPoint(0, 0);

let makeSegment = (begin, end) => {
    return{
        'point1':begin,
        'point2':end
    };
}

const segment = makeSegment(beginPoint, endPoint);

let getBeginPoint = (point) =>{
    return point.point1
}
let getEndPoint = (point) =>{
    return point.point2
}

getBeginPoint(segment);// (3, 2)
getEndPoint(segment);// (0, 0)

let getMidpointOfSegment = (segment) => {
    beginPoint = getBeginPoint(segment);
    endPoint = getEndPoint(segment);
    x = (getX(beginPoint) + getX(endPoint)) / 2;
    y = (getY(beginPoint) + getY(endPoint)) / 2;
    return makeDecartPoint(x,y)
} 

console.log(getMidpointOfSegment(segment)); // (1.5, 1)

module.exports = {
    makeDecartPoint,
    getX,
    getY,
    makeSegment,
    getBeginPoint,
    getEndPoint,
    getMidpointOfSegment
}