

function separateUserInput(data) {

    const separator = /[:|,]+/;
    let splicedData = [];
    
    let inputInfos = {
        clientType: '',
        dates: []
    }

    splicedData = data.replace(/\s+/g, '').split(separator);

    splicedData.forEach((item, index) => {

        if (index === 0) {
            inputInfos.clientType = item
        } else {
            inputInfos.dates.push(item)
        }

    })

    return inputInfos;

}

module.exports = {separateUserInput}