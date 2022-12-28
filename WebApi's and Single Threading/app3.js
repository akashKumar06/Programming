// makeRequest( () =>{

// },
// ()=>{

// })

// const fakeRequestCallback = (url,success,failure) => {
//     const delay = Math.floor(Math.random()*4500) + 500;
//     setTimeout(()=>{
//         if(delay > 4000){
//             failure('connection Timeout :(');
//         }else{
//             success(`Here is your fake data from ${url}`);
//         }
//     },delay)
// }

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve,reject) =>{
//         const delay = Math.floor(Math.random()*4500) + 500;
//         setTimeout(()=>{
//             if(delay > 4000){
//                 reject('connection Timout :(');
//             }else{
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         },delay)
//     })
// }

// fakeRequestCallback('books.com/page1',
//     function(response){
//         console.log("It worked");
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//         function(response){
//             console.log("It worked again!!!");
//             console.log(response);
//             fakeRequestCallback('books.com/page3',
//                 function(response){
//                     console.log("It worked again!!!");
//                     console.log(response)
//                 },
//                 function(err){
//                     console.log("ERROR!!!!");
//                     console.log(err);
//                 })
//         },
//         function(err){
//             console.log("ERROR!!!!");
//             console.log(err);
//         })
//     },function(err){
//     console.log('Error!!!!',err);
//     })


    //Then came Promise ........ 

// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then( ()=>{
//         console.log("IT WORKED!!!!! (page1)");
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(()=>{
//                 console.log("IT WORKED!!!!! (page2)");
//                 fakeRequestPromise('yelp.com/api/coffee/page1')
//                     .then(()=>{
//                         console.log("IT WORKED!!!!! (page3)");
//                     })
//                     .catch(()=>{
//                         console.log("OH NO, ERRORRR!!!! (page3)");        
//                     })
//             })
//             .catch(()=>{
//                 console.log("OH NO, ERRORRR!!!! (page2)");        
//             })
//     })
//     .catch( ()=>{
//         console.log("OH NO, ERRORRR!!!! (page1)");
//     })

//Instead of writing the above code we could have done this
    
//the trick is basically return the promise function in the .then() function
//Promise Chaining

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data)=>{
//         console.log("IT WORKED!!!!!(page1)")
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data)=>{
//         console.log("IT WORKED!!!!!!(page2)");
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2');
//     })
//     .then((data)=>{
//         console.log("IT WORKED!!!!!!(page3)");
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("OH NO, A REQUEST FAILED");
//         console.log(err);
//     })



    //Creating our own promises

    // new Promise((resolve,reject) =>{
    //     resolve();
    // })

    // const fakeRequest = ((url)=>{
    //     return new Promise((resolve,reject)=>{
    //         const rand = Math.random();
    //         setTimeout(()=>{
    //             if(rand<0.7){
    //                 resolve("YOUR FAKE DATA IS HERE");
    //             }else{
    //                 reject("REQUEST ERROR");
    //             }
    //         },1000)
    //     })
    // })

    // fakeRequest("/dogs/1")
    //     .then((data)=>{
    //         console.log("Done with the request");
    //         console.log("Data is",data)
    //     })
    //     .catch((err)=>{
    //         console.log("Oh no!!!!",err);
    //     })
    
    const delayedColorChange = (color,delay)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                document.body.style.background = color;
                resolve();
            },delay)
        })
    }

    delayedColorChange('red',1000)
        .then(()=>delayedColorChange('orange',1000))
        .then(()=>delayedColorChange('yellow',1000))
        .then(()=>delayedColorChange('green',1000))
        .then(()=>delayedColorChange('blue',1000))
        .then(()=>delayedColorChange('indigo',1000))
        .then(()=>delayedColorChange('violet',1000))

