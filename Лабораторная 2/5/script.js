var value=prompt('Введите число', '0');
function factorial(num1) {
    if (num1===null || num1.length===0 ) {
        return 'Попробуйте еще раз';
    } else if (+num1==0) {
        return '1';
    }
    else if (+num1%1===0) {
        if (+num1==1) {return 1}
        else {
            return num1*factorial(num1-1)
        }
    }
    else return 'fail';

}

alert(factorial(value));