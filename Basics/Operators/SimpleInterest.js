const simpleInterest = ()=> {
    let principal = 40000;
    let rate = 9;
    let time = 5;

    let simpleInt = (principal * rate * time)/100;
    return simpleInt;
}
console.log(simpleInterest())