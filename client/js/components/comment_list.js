function renderCommentList() {
    document.querySelector('#comment').innerHTML = `
      <section class="comment-list">
        ${renderComments()}
      </section>
    `
  }
  
  function renderComments() {
    return state.comments.map(comment => `
    <section class="comment" data-id='${comment.id}'>
        <h2>${comment}</h2>
        <span class="material-symbols-outlined delete" onClick="deleteComment(event)">delete</span>
    </section>
  `).join('')
  }
  
  function deleteComment(event) {
    const deleteBtn = event.target
    const commentDOM = deleteBtn.closest('.comment')
    const commentId = commentDOM.dataset.id
    fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
      .then(() => {
        state.comments = state.comments.filter(t => t.id != commentId)
        renderCommentList()
      })
  }