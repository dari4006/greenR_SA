function addComment (event, depotId){
    event.preventDefault()
    const form = document.querySelector(".comment-form")
    const data = Object.fromEntries(new FormData(form))
    data.depot_id = depotId
    fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(comment => {
            state.comments.push(comment)
            const commentIndex = state.comments.length - 1
            state.comments[commentIndex].email = state.loggedInUser.email
            renderFilteredComments(depotId);
        });
    console.log('add comment successfully')
}