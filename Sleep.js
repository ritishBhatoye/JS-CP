//async function
async function sleep(millis){
    function cb(resolve,reject){
        setTimeout(resolve,millis);
    }
return new Promise(cb);
}
let a=Date.now();
sleep(100).then(()=> console.log(Date.now()-a));

async function sleep(m){
    function cb(resolve,reject){
        setTimeout(resolve,m);
    }
    return new Promise(cb);
}

console.log(sleep(100));