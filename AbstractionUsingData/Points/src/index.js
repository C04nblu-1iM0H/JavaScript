let calculateDistance = (point1, point2) => {
    let [x1,y1] = point1;
    let [x2,y2] = point2;
    console.log('x1 -',x1,' ','y1 -',y1);
    console.log('x2 -',x2,' ','y2 -',y2);

    let AC = 0, BC = 0, d = 0;
    
    AC = Math.pow((x2-x1),2);
    BC = Math.pow((y2-y1),2);
    console.log('AC -',AC);
    console.log('BC -',BC);

    d = Math.sqrt(AC+BC);
    return d;
}

module.exports = calculateDistance;