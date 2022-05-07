const {separateUserInput} = require('./utils/splitData.js')

let input = "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"

function getCheapestHotel (input) {

   let data = separateUserInput(input)
   console.log(data)

    // return "Cheapest hotel name"
}

getCheapestHotel(input);

exports.getCheapestHotel = getCheapestHotel
