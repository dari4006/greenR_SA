const state = {
    depots: []
}

fetch('/api/depots')
    .then(res => res.json())
    .then(depots => {
        state.depots = depots
    })

    fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
      }
  })