var graduate = false;
var salary = 5000;
var car = 1;

// multiple or condition
if (graduate == true || salary > 50000 || car > 1) {
    console.log('approved');
}
else {
    console.log('try hard');
}

// 2 vs 1 condition
if ((graduate == true && salary > 50000) || car >= 1) {
    console.log('sabash');
}
else {
    console.log('try kor');
}

// 2 vs 1 condition

if (graduate == true && (salary > 50000 || car >= 1)) {
    console.log('sabash graduate hyso');
}
else {
    console.log('pass koro age');
}