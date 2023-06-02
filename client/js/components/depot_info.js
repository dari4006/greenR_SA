const { findDepotByDepotId } = require("../../../models/depot")

function renderDepotInfo(depot_id){
  // console.log(depot_id)
  // console.log(state)
  findDepotByDepotId
  const depotDOM = document.querySelector('#page')
  depotDOM.innerHTML = `
    <form action="" onSubmit = "renderDepotCommentList(depot_id)">
      <input type="textarea">
      <button>Submit Comment</button>
    </form>
  `
}

// function renderCommentList(depot_id)