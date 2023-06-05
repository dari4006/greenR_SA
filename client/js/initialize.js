const state = {
    depots: [],
    comments: [],
    // loggedInUser: ''
}

fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
        // state.userId = something
      }
  })

fetch('/api/depots')
    .then(res => res.json())
    .then(depots => {
        state.depots = depots
        renderDepotList()
    })

// fetch('/api/users')
//   .then(res => res.json())
//   .then(users => {
//     state.users = users
//     console.log(state.users)
//   })

fetch('/api/comments')
  .then(res => res.json())
  .then(comments => {
    state.comments = comments
    console.log(state.comments)
})