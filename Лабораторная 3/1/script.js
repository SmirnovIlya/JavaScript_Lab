var calculator = {
    sum: function() {
        return this.a + this.b;//функции определяются для работы с a и b в контексте объекта
    },

    mult: function() {
        return this.a * this.b;
    },

    read: function() {
        this.a = +prompt('Первое число=', 0);
        this.b = +prompt('Второе число=', 0);
    }
}

calculator.read(); //вызов метода read из объекта для означивания a и b
if (((checkInp(calculator.a)&&checkInp(calculator.b)) ) ==false )
{ alert('Ошибка');}
else {
    alert( calculator.sum() );
    alert( calculator.mult() );
};

function checkInp(elem) {
    return !( isNaN(+elem) || elem === '' || elem === null);
}

//checkInp проверяет корректность введенных данных