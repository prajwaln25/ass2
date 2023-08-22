function resverseString(str){
    return str.split("").reverse().join("");

}
var inputString="hello,world!";
var resverseString = resverseString(inputString);
console.log("Reversed string:"+resverseString);