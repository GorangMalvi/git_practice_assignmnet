var num = 10;
function identifyPrime(num) {
    
    let count = 0;
    for (let i =0; i<=num; i++){
        if(num%1===1){
            count++
        }
    }
    if(count===2){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

