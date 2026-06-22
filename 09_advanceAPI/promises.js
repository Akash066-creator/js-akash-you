const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //network Call, DB call
    //  resolve();
    setTimeout(function(){
            console.log("Async task is created");
            resolve();
        },1000);
});

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynct task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Akash", email : "alash@.com"});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Akash",password : "123"});
        } else{
            reject('ERROR : something went wrong')
        }
    },1000);
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);  
})
.finally(() => {
    console.log("the promise either resolved or rejected");
    
});

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "java script" , password : "123"})
        }
        else{
            reject('ERROR : js went wrong');
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

console.log("new line : ..................")
// async function getUser(){
//     try{
//          const response = await fetch('https://jsonplaceholder.typicode.com/users');
//          const data = await response.json();
//          console.log(data);
//     }
//     catch(error){
//         console.log("E : ",error);
//     }
// }

// getUser();

const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve('https://jsonplaceholder.typicode.com/users');
        } else{
            reject('ERROR : data not found');
        }
    },1000);
});

promiseSix
.then(function(url){
    return fetch('https://jsonplaceholder.typicode.com/users');
})
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
