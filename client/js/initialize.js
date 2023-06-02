const state = {
    depots: [],
    comments: []
}

fetch('/api/depots')
    .then(res => res.json())
    .then(depots => {
        state.depots = depots
        renderDepotList()
    })

    fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
      }
  })

  fetch('/api/users')
  .then(res => res.json())
  .then(comments => {
    state.comments = comments
    console.log(state.comments)
  })

  fetch('/api/comments')
  .then(res => res.json())
  .then(comments => {
    state.comments = comments
    renderCommentList()

  })