const obj = { number: 5 };
const fn = function (number) {
  return number + this.number;
};

function bind1(fn, context){
    return function (arg){
        return fn.call(context, arg)
    };
}

const fnWithContext = bind1(fn, obj);
console.log(fnWithContext(3));