var x=10;
primenum: for (i = 2; i <= x; i++) {

    for (k = 2; k < i; k++) {
        if (i % k == 0) continue primenum;
    }

    alert(i);
}