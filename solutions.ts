function multiplyValue(value: number, multiplier: number = 236): number {
    return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {

    if (typeof value === "string") {
        return value.trim().toLowerCase()
    }
    if (typeof value === "number") {
        return value * 10
    }
    return value ? "Active" : "Inactive"
}



function formatCoordinate([latitude, longitude, locationName]: readonly [number, number, string]): string {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))