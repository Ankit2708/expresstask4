const posts = [
    { title: 'Post One', body: 'This is post one',createdAt:new Date().getTime()},
    { title: 'Post Two', body: 'This is post two',createdAt:new Date().getTime()}
];

function getPosts() {
    
    setTimeout(() => {
        let output = '';
        for(let i=0;i<posts.length;i++) {
            output += `<li>${posts[i].title} </li>`;
        };
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
        },2000)
    })

}
function deletePost(){
    return new Promise((resolve,reject)=>{
        if(posts.length>0){
            setTimeout(()=>{
                resolve();
            },1000)
        }else{
            reject('array is empty now');
        }
    })
}
const timerid=setInterval(() => {
    deletePost().then(()=>{
        posts.pop();
        let lastPost=document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost);
    }).catch(err=>console.log(err));
    clearInterval(timerid);
},1000 );

createPost({title:'Post three',body:'This is post three'}).then(getPosts);
//.catch(err=>console.log(err)); this is added toabove if error is set to true
deletePost();

//promise all
 const promise1=Promise.resolve('Hello world');
 const promise2=10;
 const promise3=new Promise((resolve,reject)=>{
 setTimeout(resolve,2000,'Goodbye')
 });
 Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
 })
const user={
    username:'ankit',
    lastactivitytime:'30th of March'
}
function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
}
function userupdatespost(){
    Promise.all([createPost,updateLastActivityTime]).then((createPostresolves,updateLastActivityTimeresolves)=>
    {console.log(updateLastActivityTimeresolves)}).catch(err=>console.log(err))
}