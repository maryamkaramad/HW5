function SumArray(arr1,arr2){

     let sum=[];
     let total=0
     let maxlength=arr1.length>arr2.length?arr1.length:arr2.length
    for(let i=0;i<maxlength;i++){
        for(let j=0; j<maxlength;j++){
            let a= arr1[i]||0;
            let b=arr2[i]||0
             total=a+b;}
    
        sum.push(total);
    }
    return sum;
}

console.log(SumArray([1,2,4,5,1,2,3,3],[2,5,6,2,3]));