// При работе с цветами часто нужно получить отдельные значения красного, 
// зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот. 
// Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), 
// которые возвращают соответствующие представление цвета.


let componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}  
let rgbToHex =(r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let hexToRgb = (hex) => {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
              .substring(1).match(/.{2}/g)
              .map(x => parseInt(x, 16));
}
  
console.log(rgbToHex(36, 171, 0)); // #0033ff
console.log(hexToRgb('#24ab00'));// [36, 171, 0]