/* Given a character X you need to find whether X is an alphabet or not.

If yes, return a string "Yes" or otherwise throw an error with the message "Not Alphabet".

*/

function isAlphabet(X) {
    if((/[a-zA-Z]/).test(X)){
        return 'Yes';
    }else{
        throw new Error("Not Alphabet");
    }
    
}