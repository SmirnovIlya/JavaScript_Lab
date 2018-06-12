function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
alert(checkAge());