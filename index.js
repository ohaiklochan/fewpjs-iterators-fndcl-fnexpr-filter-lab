
// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(find_string => {
        return(find_string.toLowerCase() === string.toLowerCase())
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(find_string => {
        if (string.charAt(0) === find_string.charAt(0)) {
            return find_string
        }
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(find_name) {
        if (find_name.name == name) {
            return find_name
        }
    })
}