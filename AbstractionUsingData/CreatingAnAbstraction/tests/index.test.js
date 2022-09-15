const {makeDecartPoint,getX,getY,makeSegment,getBeginPoint,getEndPoint,getMidpointOfSegment} = require('../src/index');

let beginPoint = makeDecartPoint(3, 2);
let endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);
console.log(segment);

describe('Segment', () => {
    test('should create object', ()=>{
        expect(makeDecartPoint(3,2)).toEqual({x:3,y:2})
        expect(makeDecartPoint(0,0)).toEqual({x:0,y:0})
    })
    test('Checking the function makeSegment() the segment should return', ()=>{
        expect(makeSegment(beginPoint,endPoint)).toEqual({point1:{x:3,y:2}, point2:{x:0,y:0}})
    })
    test('Checking the function GetX(), GetY()', () =>{
        expect(getX(beginPoint)).toBe(3)
        expect(getX(endPoint)).toBe(0)
        expect(getY(beginPoint)).toBe(2)
        expect(getX(endPoint)).toBe(0)
    })
    test('return point', ()=>{
        expect(getBeginPoint(segment)).toEqual({x:3,y:2})
        expect(getEndPoint(segment)).toEqual({x:0,y:0})
    })
    test('eturns the point located in the middle of the segment', ()=>{
        expect(getMidpointOfSegment(segment)).toEqual({x:1.5, y:1})
    })
})