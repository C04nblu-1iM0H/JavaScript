let input = 'javascript is awesome';
let output = "";
for (let i = 0; i < input.length; i++) {
    output += input[i].replace('a','4').replace('e','3').replace('i','1');
}
console.log(output);