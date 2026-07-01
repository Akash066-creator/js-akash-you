// function outer(){
//     let a = 10;

//     function inner(){
//         let b  = 20;
//         console.log(a);
//         console.log(b);
//     }

//     console.log(a);
//     // console.log(b);

//     inner();
// }

// outer();

function outer(){
    let username = "Akash";

    function inner(){
        console.log(username);
    }
    return inner;
}

const callMe = outer();
callMe();