let input = 'javascript is awesome';
let output = "";
for (let i = 0; i < input.length; i++) {
    output += input[i].replace('a','4').replace('e','3').replace('i','1');
}
console.log(output);

let str = 'move';
const reverseString = () => {
    let result = 'lol - ';
    let i;
    for ( i = 0; i < str.length; i+=2) {
      result = `${result}${str[i+1]}${str[i]}`;
    }
  
    return result;
  };

console.log(reverseString())