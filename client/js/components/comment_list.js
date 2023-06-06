function renderFilteredComments (depot_id) {
  const filteredComments = state.comments.filter(c => c.depot_id == depot_id)
  const parentCommentsElement = document.querySelector('#comments')

  parentCommentsElement.innerHTML = ''
  
  filteredComments.forEach(comment => {
      if (state.loggedInUser != null && comment.email === state.loggedInUser.email) {
          parentCommentsElement.innerHTML += `
            <section class="comment" data-id='${comment.id}'>
              <p>User ${comment.user_id}:</p> 
              <p>${comment.comment}</p>
              <span class="material-symbols-outlined delete" onClick="deleteComment(event,${depot_id} )">delete</span>
              <span class="material-symbols-outlined edit" onClick="renderEditComment(${comment.id}, ${depot_id})">edit</span>
            </section>
      `} else {
          parentCommentsElement.innerHTML += `
          <section class="comment" data-id='${comment.id}'>
            <p>User ${comment.user_id}:</p> 
            <p>${comment.comment}</p>
          </section>`
      }
  })

}

 function renderEmptyCommentList () {
  document.querySelector('#comments').innerHTML = ``
}

async function renderEditComment(commentId, depotId) {
  const mapImageUrl = await getMapURL(depotId)
  const filteredDepot = state.depots.filter(depot => depot.depot_id == depotId)
  const filteredComment = state.comments.filter(c => c.id == commentId)
  const commentContent = filteredComment[0].comment
  const depot = filteredDepot[0]
  const depotDOM = document.querySelector('#page')
  depotDOM.innerHTML= `
    <section class="depot" data-id="${depot.depot_id}">
      <header>
        <h2>${depot.depot_name}</h2>
      </header>
      <p>${depot.address}</p>
      <p>${depot.suburb} ${depot.postcode}</p>
      <p>${depot.region}</p>
      <img class="map" src="${mapImageUrl}">
    </section>
    <form class="comment-form1" action="" onSubmit="editComment(event, ${commentId}, ${depotId})">
      <input type="textarea" name="comment" value="${commentContent}">
      <button>Edit Comment</button>
    </form>`;
  renderFilteredComments(depotId);
}

function editComment(event, commentId, depotId){
  event.preventDefault()
  const form = document.querySelector(".comment-form1")
  const data = Object.fromEntries(new FormData(form))
  data.depot_id = depotId
  data.id = commentId
  console.log(data)
  fetch(`/api/comments`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(comment => {
    state.comments = state.comments.filter(c => c.id != comment.id)
    state.comments.push(comment)
    const commentIndex = state.comments.length - 1
    state.comments[commentIndex].email = state.loggedInUser.email
    renderFilteredComments (depotId);
    })
}


function deleteComment(event, depot_id) {
  const deleteBtn = event.target
  const commentDOM = deleteBtn.closest('.comment')
  const commentId = commentDOM.dataset.id
  fetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.comments = state.comments.filter(d => d.id != commentId)
      renderFilteredComments (depot_id)
    })
}