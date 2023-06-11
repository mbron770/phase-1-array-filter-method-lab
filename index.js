function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.indexOf(name) === 0)
}

function matchName(drivers, str){
    return drivers.filter(driver => driver.name === str)
}





