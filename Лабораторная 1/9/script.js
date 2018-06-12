var message;
var login=prompt('Введите свой логин','');
/*
if (login == Вася) ;
    message = 'Привет' ;
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
alert(message);
*/

(login == 'Вася') ? message='Привет' :
    (login=='Директор') ? message='Здравствуйте' :
        (login=='') ? message='Нет логина' : message='';
alert(message);