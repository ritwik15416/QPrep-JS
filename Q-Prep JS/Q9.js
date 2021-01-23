/*Given an API: GET /api/comments

This will return a list of all comments. A comment object contains the following information

userId - ID of the user who commented

data - comment data


Given a userId, return an Array of comment data of all the comments by the given user.

Note
Apart from .json(), don’t use any other methods on the response object returned from fetch() call. This can cause your tests to fail.

*/

async function getCommentsByUserId(userId) {
    let response = await fetch("/api/comments");
    let comments = await response.json();
    let data=[];
    comments.forEach(comment=>{
        if(comment.userId==userId){
            data.push(comment.data);
        }
        })
        return data;
}
