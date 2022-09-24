
const make = (a,b) => {
    return{
        a:a,
        b:b
    }
}
const rat1 = make(3, 9);
const rat2 = make(10, 3);
rat1.getNumer = function getNumer() {
    return this.a;
};
rat1.getDenom = function getDenom() {
    return this.b;
};
console.log(rat1.getNumer());
console.log(rat1.getDenom());

rat2.getNumer = rat1.getNumer;
rat2.getDenom = rat1.getDenom;


// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
rat1.add = function add(num){
    return make(this.a * num.getDenom() + this.b * num.getNumer(), this.b * num.getDenom())
}
const rat3 = rat1.add(rat2);

rat3.toString = function toString(){
    return `'${this.a}/${this.b}'`
}
console.log(rat3.toString());


  