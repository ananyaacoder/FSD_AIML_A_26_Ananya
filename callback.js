function register(cb)
{ setTimeout(()=>{
    console.log("register here");
    cb();
},5000)
    
}
function login(cb)
{  setTimeout(()=>{
console.log("login here");
cb();
},6000)
    
}
function getdata(cb)
{ setTimeout(()=>{
 console.log("fetch data here");
 cb();
},8000)
}

function displaydata()
{ setTimeout(()=>{
 console.log("display data here");
},7000)
   
}
//callback hell
register(()=>{
    login(()=>{
        getdata(()=>{
            displaydata()
        })
    })
});

console.log("Call another App");