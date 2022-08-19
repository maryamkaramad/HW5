function trueCount(arr){
    let count=0;
for(let i=0; i<arr.length; i++){
    if(!!arr[i]){
     count++;
    }
}
return count;
}
let array1=[true,true,1,4,false,null,3,0,"",undefined]
 console.log(trueCount(array1));