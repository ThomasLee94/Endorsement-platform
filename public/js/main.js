
//updates the upvotes
function upVote(skillId, userId) {

    //tells fetch that we want to send PUT request
    options = {
        method: "PUT"
    }

    //Make request to url based on the option
    fetch(`/skills/${skillId}/users/${userId}/upvotes`, options).then(data =>{

        //get data (response)
        data.json().then(user => {
            //Where you need to update the upvotes

            //access the dom, search for the users upvote element, get it, and then update it
            let upVotes = document.querySelector(`#upVotes-${userId}`)
            upVotes.innerText = user.upVotes
        })

    }).catch(error => {
        console.log(error)
    });
}
