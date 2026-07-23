function register()
{ waitforinput(5000);
    console.log("register here");
}
function login()
{ waitforinput(9000);
    console.log("login here");
}
function getdata()
{ waitforinput(8000);
    console.log("fetch data here");
}
function displaydata()
{ waitforinput(7000);
    console.log("display data here");
}
function waitforinput(delay)
{
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){
      
    }
    
}


register();
login();
getdata();
displaydata();
console.log("Call another App");