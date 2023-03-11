function division(array){
    let min = Math.min(...array)
    let max = Math.max(...array)
    return max/min
}

module.exports = division