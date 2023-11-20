function a() {
    var d = 15;
    c();
    function c(){
        console.log(b);
        console.log(d);
    }

    console.log(d)

}
var b = 10 ;


a();