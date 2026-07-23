function register()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            resolve();
            console.log("Register Here");
        }, 6000)
    })
}


function login()
{  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("Login Here");
    },8000)
})
}
function getdata()
{ return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("Fetch Data Here");
    })
})
}

function displaydata()
{ return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("Display Data Here");
    })
})
   
}

// register().then(login)
//           .then(getdata)
//           .then(displaydata)
//           .catch((err)=>{
//             console.log("Error", err);
//           })
async function test()
{
    try{
        await register();
        await login();
        await getdata();
        await displaydata();
    }
    catch(err)
    {
        console.log("Error", err);
    }
}
test();
console.log("Call another App");