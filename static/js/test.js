console.log("Hello world")
console.log(999+111);
console.log("999"+"111");
console.log(typeof ("999"));
console.log(typeof (999));
console.log(parseInt("999"));
console.log(parseFloat("999.99"));
console.log(Number("999"));
console.log(String(999));
// this is a comment
let a = 11;
console.log(a);
let num = 10;
if (num % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
};
let num1=10;
if(num1>0){
    console.log("postive")
}
else if(num1<0){
    console.log("negative")
}
else{
    console.log("zero")
}
for (i=0;i<10;i++){
    console.log(i)
}
for (i=0;i<10;i++){
    console.log(i*2)
}
i=0;
while(i<10){
    console.log(i)
    i++
}
i = 10;
console.log("dowhile")
do{
    console.log(i)
    i++
}while(i<10)

function add(a,b){
    return a+b
}
console.log(add(10,20))