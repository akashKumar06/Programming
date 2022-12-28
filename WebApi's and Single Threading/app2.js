
// setTimeout(function(){
//     document.body.style.backgroundColor = 'red';
// },1000);

// setTimeout(function(){
//     document.body.style.backgroundColor ='orange';
// },2000);

// setTimeout(function(){
//     document.body.style.backgroundColor ='green';
// },3000);

// all we do is we can nest the above codes
// setTimeout(function(){
//     document.body.style.backgroundColor = 'violet';
//     setTimeout(function(){
//         document.body.style.backgroundColor ='Indigo';
//         setTimeout(function(){
//             document.body.style.backgroundColor ='Blue';
//             setTimeout(function(){
//                 document.body.style.backgroundColor ='Green';
//                 setTimeout(function(){
//                     document.body.style.backgroundColor ='yellow';
//                     setTimeout(function(){
//                         document.body.style.backgroundColor ='orange';
//                         setTimeout(function(){
//                             document.body.style.backgroundColor ='red';
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);



// const delayedColorChange = (newColor,delay,donext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor=newColor;
//         donext && donext();
//     },delay)
// }

// delayedColorChange('red',1000,()=>{
//     delayedColorChange('orange',1000,()=>{
//         delayedColorChange('yellow',1000,()=>{
//             delayedColorChange('green',1000,()=>{
//                 delayedColorChange('blue',1000,()=>{
//                     delayedColorChange('indigo',1000,()=>{
//                         delayedColorChange('violet',1000,()=>{

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

searchMoviesAPI('amadeus',()=>{
    saveToMyDB(movies,()=>{ 
        //if it works ,run this
    },()=>{
        //if it doesn't work, run this
    },()=>{});
})

//Promises and Async Functions
