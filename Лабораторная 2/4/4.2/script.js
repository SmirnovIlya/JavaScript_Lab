var value=prompt('Суммируем','0');
function recSum(num1) {
    if (num1===null || num1.length===0 ) {
        return 'Попробуйте еще раз';
    } else if (+num1==0) {
        return '0';
    }
    else if (+num1%1===0) {
        if (+num1!=1) {
            return +num1 + recSum(+num1 - 1);
        } else {
            return +num1;
        }
    }
    else return 'fail';
}
alert(recSum(value));