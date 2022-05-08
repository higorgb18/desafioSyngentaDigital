const hotels = require('../data/hotels.js');

function getHotelFee(clientType, days) {

    hotels.map(item => {

        if (clientType === 'Regular') {

            console.log(item.regularFee)

        } else if (clientType === 'Reward') {

            // console.log(item.rewardFee)

        }
        
    })

}

module.exports = {getHotelFee}