//currying means using same function again and again
let multiply1=function(x,y){
    console.log(x*y);
}
let multiplybytwo=multiply1.bind(this,2,7);//2 will point to x 7 will point to y 
multiplybytwo(5);// 5 is ignored if two arguments are passed
let multiplybythree=multiply1.bind(this,3);//3 will point to x
multiplybythree(5);


//currying using closures
let multiply01=function(a){
    return function(b){
        console.log(a*b);
    }
}
let multiply01bytwo=multiply01(2);
multiply01bytwo(8);