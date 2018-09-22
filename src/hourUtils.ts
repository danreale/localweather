export async function getSummary(json: any){
    const sum = json.data.hourly.summary;
    console.log(sum);
}

export async function getDateAndTime(json: any, position: any){
    const unixTimestamp = json.data.hourly.data[position].time;
    // gets date and subtracts 4 hours
    const date = new Date(unixTimestamp * 1000);
    date.setHours(date.getHours() - 4);
    console.log(date);
}
async function getTime(json: any, position: any){
    const unixTimestamp = json.data.hourly.data[position].time;
    const date = new Date(unixTimestamp * 1000);
    // console.log(date);
    // Hours part from the timestamp
    const hours = date.getHours();
    // const hours = date.setHours(date.getHours() - 4);
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    const formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    console.log(formattedTime);
}

export async function temperature(json: any, position: any){
    const temp: number = json.data.hourly.data[position].temperature;
    const aTemp: number = json.data.hourly.data[position].apparentTemperature;
    console.log(`Current Temp ${temp} and Feels Like ${aTemp}`);
}
export async function humidity(json: any, position: any){
    const val: number = json.data.hourly.data[position].humidity;
    const value: number = val * 100;
    console.log(`Humidity: ${value}%`);
}

export async function clouds(json: any, position: any){
    const val: number = json.data.hourly.data[position].cloudCover;
    const value: number = val * 100;
    console.log(`Cloud Cover: ${value}%`);
}

export async function uvIndex(json: any, position: any){
    const val: number = json.data.hourly.data[position].uvIndex;
    console.log(`UV Index: ${val}`);
}

export async function visibility(json: any, position: any){
    const val: number = json.data.hourly.data[position].visibility;
    console.log(`Visibility: ${val} miles`);
}
export async function pressure(json: any, position: any){
    const val: number = json.data.hourly.data[position].pressure;
    console.log(`Pressure: ${val}`);
}

export async function wind(json: any, position: any){
    const speed: number = json.data.hourly.data[position].windSpeed;
    const gust: number = json.data.hourly.data[position].windGust;
    console.log(`Wind Speed: ${speed} mph`);
    console.log(`Wind Gust: ${gust} mph`);
}
export async function windBearing(json: any, position: any){
    const val: number = json.data.hourly.data[position].windBearing;
    const direction: any = getDegrees(val);
    console.log(`Wind is coming from the ${direction}`);
}

function getDegrees(json: any){
    const val: number = json;

    if ((val > 0) && (val < 90)) {
        // console.log("North East");
        return "North East";
    }
    else if ((val > 90) && (val < 180)) {
        // console.log("South East");
        return "South East";
    }
    else if ((val > 180) && (val < 270)) {
        // console.log("South West");
        return "South West";
    }
    else if ((val > 270) && (val < 360)) {
        // console.log("North West");
        return "North West";
    }
    else{
        return "No Direction";
    }
}

export async function getProbability(json: any, position: number){
    const val1: number = json.data.hourly.data[position].precipProbability;
    const val = val1 * 100;
    console.log(`Precip Probability is ${val}% in ${position} minutes`);
}

export async function getIntensity(json: any, position: number){
    const val1: number = json.data.hourly.data[position].precipIntensity;
    const val = val1 * 100;
    console.log(`Precip Intensity is ${val} inches per hour in ${position} minutes`);
}

export async function getHourly(json: any, hours: number){
    // const sum = json.data.hourly.data.length;
    const sum: number = hours + 1;
    // console.log(sum);
    for (let i: number = 0; i < sum;) {
        console.log(`----------In ${i} hours----------`);
        getDateAndTime(json, i);
        getTime(json, i);
        temperature(json, i);
        getProbability(json, i);
        getIntensity(json, i);
        humidity(json, i);
        pressure(json, i);
        wind(json, i);
        windBearing(json, i);
        clouds(json, i);
        uvIndex(json, i);
        visibility(json, i);
        i++;
    }
}