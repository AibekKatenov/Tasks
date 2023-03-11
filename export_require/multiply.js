function mul(array){
    let num = 1
    for(let i of array){
        num *= i
    } 
    return num
}

module.exports = mul