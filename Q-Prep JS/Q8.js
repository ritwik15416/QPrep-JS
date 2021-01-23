/* Given as inputs to the getLastNames() function

A string representing a first name, firstName.

An Array of person objects with properties, "firstName" and “lastName”


Return a JavaScript Promise which is either

rejected with a message "Invalid" if none of the person objects“firstName” property matches the input first name,firstName`

resolved with an sorted Array of "lastName" property values of objects whose “firstName” property matches the given first name, firstName


Note:

The "lastName"s array should be sorted in alphabetical order

Function to return a Promise object and not a String or Array */

function getLastNames(firstName, people) {
    let arr=[];
    for(let i=0;i<people.length;++i){
        if(people[i].firstName==firstName){
            arr.push(people[i].lastName);
        }
    }
    arr.sort();
    let promise = new Promise((resolve,reject)=>{
    if(arr.length!=0){
        resolve(arr);
    } else{
        reject("Invalid");
    }
    })
    return promise;
}