const hotelsData = require('../data/hotels.js');
const Hotel = require('../models/Hotel.js');

function getFeeOfTheDay(clientType, days) {

    let hotelComparasions = [];

    hotelsData.forEach(hotel => {

        let total = 0;

        days.forEach(day => {

            if (day > 0 && day < 6) {

                if (clientType === 'Regular') {

                    total += hotel.regularFee.weekday

                } else if (clientType === 'Rewards') {

                    total += hotel.rewardsFee.weekday

                }

            } else if (day === 6 || day === 0) {

                if (clientType === 'Regular') {

                    total += hotel.regularFee.weekend

                } else if (clientType === 'Rewards') {

                    total += hotel.rewardsFee.weekend

                }

            }

        })

        const hotelInfos = new Hotel(hotel.name, hotel.rate, total);
        hotelComparasions.push(hotelInfos);

    })

    return hotelComparasions

}

module.exports = { getFeeOfTheDay }