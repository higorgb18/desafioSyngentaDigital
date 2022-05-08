const { createDayExpression } = require('./dayController.js')

function handleUserInput(data) {

    let inputInfos = {
        clientType: '',
        days: []
    }

    const separator = /[:|,]+/;
    let splicedData = [];

    splicedData = data.replace(/\s+/g, '').split(separator);

    splicedData.forEach((item, index) => {

        if (index === 0) {
            inputInfos.clientType = item
        } else {
            inputInfos.days.push(createDayExpression(item))
        }

    })

    return inputInfos;

}

module.exports = { handleUserInput }