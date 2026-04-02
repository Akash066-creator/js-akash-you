const userEmail = "a@Akash";  // "" empty => falsy
if(userEmail){
    console.log("got user email");
} else{
    console.log("don't have user email");  
}

// falsy => false, "" , 0, -0, BigInt 0n, null, undefined,
// truethy => " ", "0", true, [], {}, function(){}, "false", 1, 
