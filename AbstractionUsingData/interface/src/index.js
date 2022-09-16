const x = 4;
const y = 8;

let makeDecartPoint = (x,y) => {
    return{
        'angle' : Math.atan2(y, x),
        'radius': Math.sqrt(x ** 2 + y ** 2)
    }
};
 
// point хранит в себе данные в полярной системе координат
const point = makeDecartPoint(x, y);

let getAngle = (point) =>{
    return point['angle'];
}

let getRadius = (point) =>{
    return point['radius'];
}

console.log(getAngle(point));
console.log(getRadius(point));

let getX = (point) =>{
    return Math.round(getRadius(point) * Math.cos(getAngle(point)));
} 
let getY = (point) =>{
    return Math.round(getRadius(point) * Math.sin(getAngle(point)));
}; 
 
// Здесь происходит преобразование из полярной в декартову
console.log(getX(point));// 4
console.log(getY(point));// 8