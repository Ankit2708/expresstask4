console.log('person 1:shows ticket');
console.log('person 2:shows ticket');

const promisewifeticketbrings=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
});
const getpopcorn=promisewifeticketbrings.then((t)=>{
    console.log('wife:I have tickets')
    console.log('husband:we should go in')
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    });
});
const getButter=getpopcorn.then((t)=>{
    console.log('husband:i got the popcorn')
    console.log('husband:we should go in')
    console.log('wife:no i want butter');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    });

})
const getColdDrinks=getButter.then((t)=>{
    console.log('husband:here is the butter')
    console.log('wife:let get colddrinks too')
    console.log('Husband:ill bring it');
    return new Promise((resolve,reject)=>resolve(`${t} coldrink`));
});
getColdDrinks.then((t)=>console.log(t));

   

console.log('person 4:shows ticket');
console.log('person 5:shows ticket');
