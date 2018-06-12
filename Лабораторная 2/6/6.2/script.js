var value=prompt('Число Фибоначчи','0');

function fib(num1) {
    if (num1===null || num1.length==0 ) {
        return 'Попробуйте еще раз';
    } else if (+num1%1==0) {
        if (+num1<=2) {return 1}
        else {
            return fib(+num1-1)+fib(+num1-2)
        }
    }
    else return 'fail';

}

alert(fib(value));