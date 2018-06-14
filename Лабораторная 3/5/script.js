function Calculator() {

    var methods = {           //оперделение метода
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {  //функция расчета

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {  //проверка на NaN a и b, а также существование метода
            return NaN;
        }

        return methods[op](a, b);  // возвращение метода над a и b
    };

    this.addMethod = function(name, func) {  //определение добавления метода к уже имеющимся в объекте
        methods[name] = func;
    };
}

var calc = new Calculator;           //создание из конструкотора нового калькулятора

calc.addMethod("*", function(a, b) { //добавление умножения
    return a * b;
});
calc.addMethod("/", function(a, b) {  //добавление деления
    return a / b;
});
calc.addMethod("**", function(a, b) {  //добавление возведения в спепень
    return Math.pow(a, b);
});

var result = calc.calculate("6 ** 4");
alert( result );