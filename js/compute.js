// 财务自由计算
function retireNumberOfYear(yearNumber,rate) {
    let totalNumber = yearNumber/rate
    return totalNumber
}
function retireNumberOfMonth(monthNum,rate) {
    let yearNum = monthNum*12
    return retireNumberOfYear(yearNum,rate)
}
function retireNumberOfDay(dayNumber,rate) {
    let yearNumber = dayNumber*365
    return retireNumberOfYear(yearNumber, rate)
}