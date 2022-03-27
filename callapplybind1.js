var obj={num:2};//object obj is created in which num is key and 2 is value
var functionName=function(a,b,c){//multiple arguments can be passed
    return this.num+a+b+c;
}
console.log(functionName.call(obj,5,4,9));//call method using
var arr=[21,45,25];
console.log(functionName.apply(obj,arr));//apply is used using arrays
var bound=functionName.bind(obj);//bind only takes object
console.log(bound(8,32,4));//first bind than it takes argument


var Student={age:25};
var Stu=function(){
    return this.age;
}
var student1=Stu.bind(Student);
console.log(student1(this.age));//only this.age will give value because it refers to age