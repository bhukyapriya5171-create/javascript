let name ="priyanka"
function greet(name){
    return "hello," + name + "!" ;
    
}
console.log(greet("priyanka"));

function sum(a,b){
    return a+b;
}
console.log(sum(5,10));

function square(num){
    return num*num;
}
console.log(square(4));

function average(arr){
    let sum = 0;
    for(let i=0; i< arr.length;i++){
        sum += arr[i];
    }
    return sum/ arr.length;
}
console.log(average([2,5,2]));

function containsVowels(str){
    let vowels = "aeiouAEIOU";

    for(let i=0; i<str.length;i++){
        if(vowels.includes(str[i])){
            return "it contain vowels"
        }
    }
    return "it doesnt contain vowels"
}
console.log(containsVowels("hello"));
function convertTemperature(temp, scale){
    if(scale ==="c"){
        return (temp-32)*5/9;
    }
    else if(scale ==="f"){
        return(temp*9/5)+32;
    }
    else{
        return "Invalid scale.Use 'c' or 'f'";
    }
}
console.log(convertTemperature(32,"c"));