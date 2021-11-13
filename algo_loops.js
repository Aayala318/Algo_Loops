function oddnum(){
    for(var num = 1; num<=20; num+=2)
        console.log(num);
}
oddnum()

function numsum(){
    var sum = 0;
        for(var num = 1; num<=5; num++){
            sum += num;
            console.log("Num:"+num);
            console.log("Sum:"+sum);
        }
}
numsum()