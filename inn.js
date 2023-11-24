let promise = new Promise(function(resolve , reject) {
    var x = 10;
    setTimeout(() => resolve("done"),1000);
    console.log(x);
});