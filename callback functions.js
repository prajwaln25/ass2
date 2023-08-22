function greet(name){
    console.log("hello,"+name+"!");
}
function
sayhellowithmuktha(callback) {
    setTimeout(function(){
        callback("john");
    },2000);
}
sayhellowithmuktha(greet);