// Code your solution here
function findMatching(driverNames, name) {
    for (const entry of driverNames) {
        const final = driverNames.filter(function (entry) {
            if (entry.toLowerCase() === name.toLowerCase()) {
                return entry;
            }

        })
        return final;
    }
}

function fuzzyMatch(driverNames, query) {
    for (const member of driverNames) {
        const fuzz = driverNames.filter(member => member.startsWith(query));
        return fuzz;
    }
    return fuzz;
}

function matchName(objArray, name) {
    for (const item of objArray) {
        const id = objArray.filter(item => item.name === name);
        return id;
    }
    return id;
}