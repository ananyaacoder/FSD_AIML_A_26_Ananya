function register()
{ setTimeout(()=>{
    console.log("register here");
},5000)
    
}
function login()
{  setTimeout(()=>{
console.log("login here");
},6000)
    
}
function getdata()
{ setTimeout(()=>{
 console.log("fetch data here");
},8000)
}

function displaydata()
{ setTimeout(()=>{
 console.log("display data here");
},7000)
   
}



register();
login();
getdata();
displaydata();
console.log("Call another App");