//callback function in javascript
setTimeout(function() {
    console.log("timer");
},5000)

z(x);

function x(y){
    console.log("x");
    y();

}
x(function y(){
    console.log("y");

})

function z(x){
    console.log("z");
}
