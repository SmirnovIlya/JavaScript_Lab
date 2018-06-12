var value=prompt('Введите число','0'), value2=prompt('Введите второе число','0');

function min(num1, num2) {
    if (num1===null || num2===null) {
        return alert('Попробуйте еще раз');
    } else if (num1.length===0 || num2.length===0 ){
        return alert('Попробуйте еще раз');
    }else if (+num1==+num2) {
        return alert('Числа одинаковые');
    }
    else {
        return alert(+num2);
    }

}
min(value, value2);