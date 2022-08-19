function even(number){
    let myString = number.toString();
    let arr=[];
    for (let i=0 ; i<myString.length;i++ ){
        if(myString.slice(0,1)==0) {continue;}
        arr.push(myString.slice(i,i+1));
        if(myString.slice(i,i+1)%2==0 && myString.slice(i+1,i+2)%2==0 && i+1<myString.length){
            arr.push("-");
        }
    }
    return arr.join("");
}

console.log( even(256412546));