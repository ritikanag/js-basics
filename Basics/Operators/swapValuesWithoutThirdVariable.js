const swap = ()=> {
    let a = 2;
    let b = 3;

    a = a * b; // 6
    b = a / b;
    a = a / b;
    //return a,b; // internally this is going to return on value of b.
    //return [a,b]
    return {a,b}
}
console.log(swap())