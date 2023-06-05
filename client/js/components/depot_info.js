async function renderDepotInfo(depot_id) {
  //wait for the whole image url to be sent before proceed
  const mapImageUrl = await getMapURL(depot_id)
  const depotId = depot_id;
  const filteredDepot = state.depots.filter(depot => depot.depot_id == depotId);
  const depot = filteredDepot[0];
  const depotDOM = document.querySelector('#page');
  depotDOM.innerHTML = `
    <section class="depot" data-id="${depot.depot_id}">
      <header>
        <h2>${depot.depot_name}</h2>
      </header>
      <p>${depot.address}</p>
      <p>${depot.suburb} ${depot.postcode}</p>
      <p>${depot.region}</p>
      <img class="map" src="${mapImageUrl}">
    </section>
    
    <form class="comment-form" action="" onSubmit="addComment(event, ${depot.depot_id})">
      <input type="textarea" name="comment">
      <button>Submit Comment</button>
    </form>
  `;
  renderFilteredComments(depot_id); 
}

async function getMapURL (depotId) {
  const filteredDepot = state.depots.filter(depot => depot.depot_id == depotId);
  const depot = filteredDepot[0];
  console.log(filteredDepot)
  const reversedGeoPoint = depot.coordinates;
  const [longitude, latitude] = reversedGeoPoint.split(',');
  const point = `${latitude},${longitude}`;
  const mapImageURL  = await fetch('/bingMapsKey')
  .then(res => res.json())
  .then(key => {
    let mapImageUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${point}/12?mapSize=300,300&pp=${point};66&mapLayer=Basemap,Buildings&key=${key}`;
    return mapImageUrl
  })
  return mapImageURL
}