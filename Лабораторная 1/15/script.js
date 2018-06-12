var value=prompt('Какой ваш браузер?','');
if (value==='IE'){
    alert('О, да у вас IE!');
}
else if (value==='Chrome' || value==='Firefox' || value==='Safari' || value==='Opera'){
    alert( 'Да, и эти браузеры мы поддерживаем' );
}
else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}