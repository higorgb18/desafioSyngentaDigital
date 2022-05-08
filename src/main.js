const { handleUserInput } = require('./controllers/splitDataController.js')
const { getFeeOfTheDay } = require('./controllers/hotelFeeController.js')

function getCheapestHotel(input) {

    const splitedInput = handleUserInput(input);
    const clientType = splitedInput.clientType
    const days = splitedInput.days

    const hotels = getFeeOfTheDay(clientType, days)

    const cheapestHotel = hotels.reduce((prev, curr) => {

        if (prev.price < curr.price) {

            return prev

        } else if(prev.price === curr.price) {

            return prev.rate > curr.rate ? prev : curr

        } else {

            return curr

        }

    });

    return cheapestHotel.name

}

exports.getCheapestHotel = getCheapestHotel
