function renderAddComment() {
    document.querySelector('#comments').innerHTML = `
      <section class='create-comment'>
        <form action="" onSubmit="createComment(event)">
        <fieldset>
        <label for="">commenting: </label>
        <input type="text" name="comment">
      </fieldset> 
        </form>
      </section>
    `
  }
  
  function createComment(event) {
    event.preventDefault()
    const form = event.target
  
    // converts form data into an object
    const data = Object.fromEntries(new FormData(form))
  
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(comment => {
        state.comments.push(comment)
        renderCommentList()
      })
  }