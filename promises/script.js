let promise = new Promise((resolve, reject)=>{
    // do something
    setTimeout(()=>{
        console.log('Async task completed!');
        resolve();
    },1000);
});

promise.then(()=>{
    console.log('Promise consumed....');
});
console.log('Welcome to JavaScript Promises');



promise = new Promise((resolve, reject)=>{
    // do something
    setTimeout(()=>{
        let error = false;
        if(!error){

            resolve({name:'Baktash', email:"baktash@gmail.com"});
        }else{
            reject('Error: Something Went Wrong, its not system error')
        }
    },1000);
}).then(user=>console.log(user));

const getUser = new Promise((resolve, reject)=>{
    setTimeout(()=>{

        let error = true;
        if(!error){
            resolve({user:'Baktash', email:'baktash@gmail.com'});
            
        }else{
            reject('Something went wrong: FROM PROMISE getUser');
        }
    } ,3000);
}); 
getUser.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('End of PROMISE getUser!'));