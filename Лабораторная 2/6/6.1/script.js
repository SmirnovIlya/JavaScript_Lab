var value=prompt('Число Фибоначчи','0');

function fib(num1) {
    var n1=1, n2=1, n3;
    if (num1===null || num1.length==0 ) {
        return 'Попробуйте еще раз';
    } else if (+num1%1===0) {
        if (+num1<=2) {return 1}
        else {
            for (var i=3; i<=num1; i++) {
                n3=n1+n2;
                n1=n2;
                n2=n3;
            }
            return n2;
        }
    }
    else return 'fail';
}

alert(fib(value));