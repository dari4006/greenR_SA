const fs = require('fs');

const depotDataSA = JSON.parse(fs.readFileSync("./depotDATASA.txt")).features

insertCommand = 'INSERT INTO depots(coordinates, depot_name, address, suburb, postcode, region, depot_id, website) VALUES'

for (let i=0; i<depotDataSA.length; i++) {
    let properties = depotDataSA[i].properties
    let coordinates = depotDataSA[i].geometry.coordinates
    let depotName = properties.DEPOT_NAME
    let address = properties.ADDRESS
    let suburb = properties.SUBURB
    let postcode = properties.POSTCODE
    let region = properties.REGION
    let website = properties.WEBSITE
    let depotID = properties.DEPOT_ID

    if (properties.WEBSITE === '') {
        website = 'NA'
    }
    
    if (i === depotDataSA.length - 1) {
        insertCommand += `\n('${coordinates}', '${depotName}', '${address}', '${suburb}', ${postcode}, '${region}', ${depotID}, '${website}');`
    } else {
        insertCommand += `\n('${coordinates}', '${depotName}', '${address}', '${suburb}', ${postcode}, '${region}', ${depotID}, '${website}'),`
    }

}

// console.log(depotDataSA[0].properties)
console.log(insertCommand)


// depotDataSA[features].forEach() = depot => {
//     console.log(depot[properties][DEPOT_NAME])
// }

