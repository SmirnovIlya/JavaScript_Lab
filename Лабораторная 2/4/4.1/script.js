var value=prompt('Суммируем','0');

function sumTo(num1) {
    var j=0;
    if (num1===null || num1.length===0 ) {
        return alert('Попробуйте еще раз');
    } else if (+num1==0) {
        return alert('0');
    }
    else if (+num1%1===0) {
        for (var i=1; i<= +num1; i++) {
            j+= i;

        }
        return alert(j);
    }
    else alert('fail');

}
sumTo(value);