function renderDepotInfo(depot_id){

  const depotId = depot_id

  const filteredDepot = state.depots.filter(depot => depot.depot_id == depotId)

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
    </section>
    <form action="" onSubmit = "renderDepotCommentList(depot_id)">
      <input type="textarea">
    <button>Submit Comment</button>
  </form>
`
const commentsDOM = document.querySelector('#comments');
commentsDOM.innerHTML = state.comments.map(comment => `
  <section class="comment" data-id="${comment.depot_id}">
    <header>
      <h2>${comment.comment}</h2>
    </header>
    <p>DepotID: ${comment.depot_id}</p>
    <p>UserID: ${comment.user_id}</p>
  </section>
`).join('');
  // const depot = findDepotByDepotId(depot_id)
}

function renderDepotCommentList(depot_id) {
  const commentsDOM = document.querySelector('#comments');
  commentsDOM.innerHTML = state.comments.map(comment => `
    <section class="comment" data-id="${comment.depot_id}">
      <header>
        <h2>${comment.comment}</h2>
      </header>
      <p>DepotID: ${comment.depot_id}</p>
      <p>UserID: ${comment.user_id}</p>
    </section>
  `).join('');
}