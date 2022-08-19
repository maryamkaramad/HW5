function makeSubset(str){
     let arr=[];
for( let i=0;i<= str.length; i++){
    for (let j=0;j<=str.length;j++){
        if (!!str.slice(i,j)){
arr.push(str.slice(i,j));
    }
}}
return arr;
}

console.log(makeSubset("ali"));