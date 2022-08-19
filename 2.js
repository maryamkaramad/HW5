function toArray( obj){
    let arr=[];
for( let key in obj){
    let a=[key,obj[key]];
    arr.push(a);    
}
return arr;
}
const objTest={
    a:1,
b:2,
};
let temp=toArray(objTest)
temp=JSON.stringify(temp)
console.log(temp);

