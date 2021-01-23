/*Create an arrow function named modify() which takes an integer array as input and modify the array as follows -

If an element of the array is prime, then add one to the element

If an element of the array is not prime, then multiply the element by 2.


Return the modified array.*/

let isprime = (num) => {
    if(num===1){
        return true;
    }else{
    for(let i=2;i<num;++i){
        if(num%i===0) return false;
    }
    return num>1;}
} 
let modify = (array) => {
    for(let i=0;i<array.length;++i){
        if(isprime(array[i])){
            array[i]++;
        }else{
            array[i]*=2;
        }
    }
    return array;
}
