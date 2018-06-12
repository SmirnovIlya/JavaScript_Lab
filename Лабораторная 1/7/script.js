var userName=prompt('Write your name','');

if(userName=='admin'){
    var connfirmation=prompt('Ok, write your password','');
    if(password=='Чёрный властелин'){
        alert('Добро пожаловать!');
    } else if (password===null){
        alert('Вход отменен')

    } else {
        alert('Неверный пароль!')
    }
} else if (userName===null) {
    alert('Вход отменен');

} else {
    alert('Я вас не знаю и знать не хочу!');
}