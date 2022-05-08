const { handleUserInput } = require('./controllers/splitDataController.js')
const { getHotelFee } = require('./controllers/hotelFeeController.js')

function getCheapestHotel(input) {

    const splitedInput = handleUserInput(input);
    const clientType = splitedInput.clientType

    splitedInput.days.map(day => {

        getHotelFee(clientType, day)

    })

}

let input = "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"

getCheapestHotel(input)

exports.getCheapestHotel = getCheapestHotel
