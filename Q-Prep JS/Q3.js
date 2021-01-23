// Given an input N, complete the function evenNumbers() to return all even numbers in the range [0, N] in the form of an Array.

function evenNumbers(n) {
    var ans = [];
    for(let i=0;i<=n;++i){
        if(i%2==0){
            ans.push(i);
        }
    }
    return ans;
}