function renderDepotList() {
    const depotListDOM = document.querySelector('.depot-list')

    depotListDOM.innerHTML = state.depots.map(depot => `
    
    <section class="depot">
  <header>
    <h2>${depot.depot_name}</h2>
  </header>
  <p>${depot.postcode}</p>
  <p>${depot.region}</p>
</section>
`).join('')
}