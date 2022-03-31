console.log('person 1:shows ticket');
console.log('person 2:shows ticket');
const preMovie=async()=>{
    const promisewifeticketbrings=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    });
    const getpopcorn= new Promise((resolve,reject)=>resolve('pocorn'))
    const getButter=new Promise((resolve,reject)=>resolve('butter'))
    const getColdDrink=new Promise((resolve,reject)=>resolve('colddrinks'))

    let ticket=await promisewifeticketbrings;
    console.log(`wife:I have ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:no i am hungry');
    let popcorn=await getpopcorn;
    console.log(`husband:i got the ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:no i want butter');
    let butter=await  getButter;
    console.log(`husband:i got the ${butter}`);
    console.log('husband:anything else you wanted');
    let coldrink=await getColdDrink;
    console.log('husband:here is the butter')
    console.log('wife:let get colddrinks too')
    console.log('Husband:ill bring it');

    let[popcorn1,butter1,coldrink1]=await Promise.all([getpopcorn,getButter,getColdDrink]);
    console.log(`${popcorn1},${butter1},${coldrink1}`);
    return ticket;
}
preMovie().then((m)=>console.log(`person 3:shows ${m}`));//async function returns promise
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');