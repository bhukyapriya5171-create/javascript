function processNumber(number,callback ){
    let doubled = number*2;
    callback(doubled);

}
function displayResult(result){
    console.log("the result is:" +result);
    
}
processNumber(5,displayResult);

function forEachElement(arr,callback){
    for(let i=0;i<arr.length;i++){
    callback(arr[i]); 
}
}
function printElement(element){
    console.log(element);
}
forEachElement([1,2,3,4], printElement);

function  sayHello(name, callback){
    setTimeout(()=>{
        let message = "Hell0, "+name + "!";
        callback(message);

    },1000);
}
function displayMessage(msg){
    console.log(msg);
}
sayHello("priyanka", displayMessage);

function checkEven(number,evencallback,oddcallback){
    if(number%2===0){
        evencallback(number);

    }else{
        oddcallback(number);
    }

}
function handleEven(num){
    console.log(num + " is Even")
}
function handleOdd(num){
    console.log(num + "is odd")
}
checkEven(4,handleEven, handleOdd);
checkEven(7,handleEven, handleOdd);

function perfromTasks(number, addcallback,multiplycallback){
    let addedResult = addcallback(number);
    let finalresult= multiplycallback(number);
    console.log("Final Result", finalresult);
}
function addFive(num){
    return num+5;
}
function multiplyByTwo(num){
    return num*2;
}
perfromTasks(10,addFive,multiplyByTwo);