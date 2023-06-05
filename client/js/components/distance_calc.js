function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    calcRooted = Math.sqrt(x * x + y * y)
    distanceCalculated = calcRooted * 100
    return distanceCalculated
}

function calculationTest(depot_id){

    const depotId = depot_id
  
    const filteredDepot = state.depots.filter(depot => depot.depot_id == depotId)
  
    const depot = filteredDepot[0]
  
    let coordinatesArray = depot.coordinates.split(',')
    coordinatesArray = coordinatesArray.map(coordinatesArray => parseFloat(coordinatesArray))
    distanceFromOrigin = getDistance(coordinatesArray[0], coordinatesArray[1], 138.5949474656166, -34.73306463215789)
    distanceFromOrigin = Math.round(distanceFromOrigin)
    return distanceFromOrigin
}
//