// for loops. These are the easiest form of loops

function showMultiplicationTable(x) {
    for (var i = 0;i < 11; i++){
        console.log(x + "x" + i + "=" + (x * i));
    }
}

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
    console.log(random);
    if (random % 2 === 0) {
        console.log("It's even!");
    } else {
        console.log("It's odd!");
    }
}
for(i = 1; i <= 10; i++){
    console.log(("" + i).repeat(i));
}

for (i = 100; i > 0; i-=5){
    console.log(i);
}
