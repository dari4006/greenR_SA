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
  // const depot = findDepotByDepotId(depot_id)
}

// function renderCommentList(depot_id)