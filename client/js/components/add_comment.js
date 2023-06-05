function addComment (event, depotId, userId){
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
            renderFilteredComments(depotId);
        });
    console.log('add comment successful')
}