function renderSearchBySuburbResult(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form))
    const suburbInput = data.suburb.toLowerCase();
  
    const filteredDepot = state.depots.filter(depot => depot.suburb.toLowerCase() === suburbInput);
    const depotDOM = document.querySelector('#page')
    depotDOM.innerHTML = filteredDepot.map(depot => `
    <section class="depot" data-id='${depot.depot_id}'>
      <header>
        <h2 onClick="renderDepotInfo(${depot.depot_id})" >${depot.depot_name}</h2>
      </header>
      <p>${depot.postcode} ${depot.region}</p>
    </section>
  `).join('')
  
    renderEmptyCommentList ();
  }