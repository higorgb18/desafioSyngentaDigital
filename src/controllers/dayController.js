function createDayExpression(date) {

    let slicedDate = date.slice(0, date.indexOf('('));
    let dayOfTheWeek = new Date(slicedDate).getDay()

    return dayOfTheWeek

}

module.exports = { createDayExpression }