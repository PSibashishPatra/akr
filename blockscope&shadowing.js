if(1) { 
    //compound statement or block
    var x = 101 ;
    console.log(x);

}


//shadowing 

var a = 100 ;
let b = 200 ;
const c = 300 ;

{
    var a = 10 ;
    let b = 20 ;
    const c = 30 ;
    console.log(a);
    console.log(b); 
    console.log(c);
}
console.log(a);
console.log(b); 
console.log(c);


//shadowing
var e = 22 ;
{
    let e = 44 ;
    console.log(e);
}


//Illegal shadowing
let d = 45 ;
{
    var d = 30 ;
    console.log(d);

}
console.log(d);


//Lexical block scope
const f = 120 ;
{
    const f = 220 ;
    {
        const f = 330 ;
        console.log(f);
    }
    console.log(f);
}
console.log(f);