var x;
do {
    x=prompt('Введите число больше 100','');
    if (isNaN(+x)) {
        alert('Оно меньше, попробуй еще раз');
        break;
    }
}
while ((+x<=100) && (!(x===null)) );