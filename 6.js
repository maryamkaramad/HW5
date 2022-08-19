 
 function contain(arr,number=[]){
for(let key in arr){
    if(typeof arr[key]== "number") number.push(arr[key]);
    else if(typeof arr[key]==="object" && arr[key] !== null) contain(arr[key], number)
}
return number.length;
 }
 console.log(contain( [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]) );


 const nestedObject = {
    data: {
    info: {
    stuff: {
    thing: {
    moreStuff: {
    magicNumber: 44,
    something: 'foo2'
    }
    }
    }
    }
    }
    }
   
    function find(obj,value){
        for(let key in obj){
            if(obj[key] === value) return true ;
            else if(typeof obj[key]==="object" )  return find (obj[key],value);
        }
        return false;
         }

         console.log(find(nestedObject,44));