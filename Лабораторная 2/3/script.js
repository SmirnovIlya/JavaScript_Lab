var value=prompt('Введите число','0'), value2=prompt('Введите степень','0');

function pow(num1, num2) {
    var j=1;
    if (num1===null || num2===null) {
        return alert('Попробуйте еще раз');
    } else if (num1.length===0 || num2.length===0 ){
        return alert('Попробуйте еще раз');
    }else if (+num1==0) {
        return alert('0');
    }
    else if (+num2==0) {
        return alert('1');
    }
    else if (+num1%1===0 && +num2%1===0) {
        for (var i=1; i<= +num2; i++) {
            j*= +num1;

        }
        return alert(j);
    }
    else alert('fail');
}
pow(value, value2);