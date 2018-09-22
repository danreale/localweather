export async function getSummary(json: any){
    const sum = json.data.currently.summary;
    console.log(sum);
}

export async function getDateAndTime(json: any){
    const unixTimestamp = json.data.currently.time;
    // gets date and subtracts 4 hours
    const date = new Date(unixTimestamp * 1000);
    date.setHours(date.getHours() - 4);
    console.log(date);
}
export async function temperature(json: any){
    const temp: number = json.data.currently.temperature;
    const aTemp: number = json.data.currently.apparentTemperature;
    console.log(`Current Temp ${temp}`);
    console.log(`Feels Like ${aTemp}`);
}
export async function humidity(json: any){
    const val: number = json.data.currently.humidity;
    const value: number = val * 100;
    console.log(`Humidity: ${value}%`);
}

export async function clouds(json: any){
    const val: number = json.data.currently.cloudCover;
    const value: number = val * 100;
    console.log(`Cloud Cover: ${value}%`);
}

export async function uvIndex(json: any){
    const val: number = json.data.currently.uvIndex;
    console.log(`UV Index: ${val}`);
}

export async function visibility(json: any){
    const val: number = json.data.currently.visibility;
    console.log(`Visibility: ${val} miles`);
}

export async function stormDistance(json: any){
    const val: number = json.data.currently.windSpeed;
    console.log(`Storm is ${val} miles away`);
}

export async function stormBearing(json: any){
    const val: number = json.data.currently.nearestStormBearing;
    const direction: any = await getDegrees(val);
    console.log(`Storm is traveling ${direction}`);
}

export async function wind(json: any){
    const speed: number = json.data.currently.windSpeed;
    const gust: number = json.data.currently.windGust;
    console.log(`Wind Speed: ${speed} mph`);
    console.log(`Wind Gust: ${gust} mph`);
}
export async function windBearing(json: any){
    const val: number = json.data.currently.windBearing;
    console.log(`Degrees: ${val}`);
    const direction: any = await getDegrees(val);
    console.log(`Wind is blowing ${direction}`);
}

export async function getDegrees(json: any){
    const val: number = json;

    if ((val > 0) && (val <= 10)) {
        // console.log("North East");
        return "North to South";
    }
    else if ((val > 10) && (val <= 80 )) {
        // console.log("South East");
        return "North East to South West";
    }
    else if ((val > 80) && (val <= 110 )) {
        // console.log("South East");
        return "East to West";
    }
    else if ((val > 110) && (val <= 170)) {
        // console.log("South East");
        return "South East to North West";
    }
    else if ((val > 170) && (val <= 190)) {
        // console.log("South West");
        return "South to North";
    }
    else if ((val > 190) && (val <= 260)) {
        // console.log("South West");
        return "South West to North East";
    }
    else if ((val > 260) && (val <= 280 )) {
        // console.log("South East");
        return "West to East";
    }
    else if ((val > 280) && (val <= 350)) {
        // console.log("North West");
        return "From North West to South East";
    }
    else if ((val > 350)) {
        // console.log("South East");
        return "North to South";
    }
    else {
        return "No Direction";
    }
}
