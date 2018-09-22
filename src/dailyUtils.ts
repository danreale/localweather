export async function getSummary(json: any){
    const sum = json.data.daily.summary;
    console.log(sum);
}

export async function getDailySummary(json: any, position: any){
    const sum = json.data.daily.data[position].summary;
    console.log(sum);
}

export async function getDateAndTime(json: any, position: any){
    const unixTimestamp = json.data.daily.data[position].time;
    // gets date and subtracts 4 hours
    const date = new Date(unixTimestamp * 1000);
    date.setHours(date.getHours() - 4);
    console.log(date);
}
// async function getTime(json: any, position: any){
//     const unixTimestamp = json.data.daily.data[position].time;
//     const date = new Date(unixTimestamp * 1000);
//     // console.log(date);
//     // Hours part from the timestamp
//     const hours = date.getHours();
//     // const hours = date.setHours(date.getHours() - 4);
//     // Minutes part from the timestamp
//     const minutes = "0" + date.getMinutes();
//     // Seconds part from the timestamp
//     const seconds = "0" + date.getSeconds();
//     // Will display time in 10:30:23 format
//     const formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
//     console.log(formattedTime);
// }

export async function temperature(json: any, position: any){
    const temp1: number = json.data.daily.data[position].temperatureHigh;
    const temp2: number = json.data.daily.data[position].temperatureHighTime;
    const temp3: number = json.data.daily.data[position].temperatureLow;
    const temp4: number = json.data.daily.data[position].temperatureLowTime;
    const temp5: number = json.data.daily.data[position].apparentTemperatureHigh;
    const temp6: number = json.data.daily.data[position].apparentTemperatureHighTime;
    const temp7: number = json.data.daily.data[position].apparentTemperatureLow;
    const temp8: number = json.data.daily.data[position].apparentTemperatureLowTime;
    const t1: any = getSSTime(temp2);
    const t2: any = getSSTime(temp4);
    const t3: any = getSSTime(temp6);
    const t4: any = getSSTime(temp8);

    console.log(`High Temp is ${temp1} and Feels Like ${temp5}`);
    console.log(`High Temp Time is ${t1} and ${t3}`);
    console.log(`Low Temp is ${temp3} and Feels Like ${temp7}`);
    console.log(`Low Temp Time is ${t2} and ${t4}`);
}
export async function humidity(json: any, position: any){
    const val: number = json.data.daily.data[position].humidity;
    const value: number = val * 100;
    console.log(`Humidity: ${value}%`);
}

export async function clouds(json: any, position: any){
    const val: number = json.data.daily.data[position].cloudCover;
    const value: number = val * 100;
    console.log(`Cloud Cover: ${value}%`);
}

export async function uvIndex(json: any, position: any){
    const val: number = json.data.daily.data[position].uvIndex;
    const val1: number = json.data.daily.data[position].uvIndexTime;
    const time: any = getSSTime(val1);
    console.log(`UV Index: ${val}`);
    console.log(`UV Index will be highest at ${time}`);
}

export async function visibility(json: any, position: any){
    const val: number = json.data.daily.data[position].visibility;
    console.log(`Visibility: ${val} miles`);
}
export async function pressure(json: any, position: any){
    const val: number = json.data.daily.data[position].pressure;
    console.log(`Pressure: ${val}`);
}

export async function wind(json: any, position: any){
    const speed: number = json.data.daily.data[position].windSpeed;
    const gust: number = json.data.daily.data[position].windGust;
    const gustTime: number = json.data.daily.data[position].windGustTime;
    const t1: any = getSSTime(gustTime);
    console.log(`Wind Speed: ${speed} mph`);
    console.log(`Wind Gust: ${gust} mph`);
    console.log(`Highest Wind Gust Time: ${t1}`);
}
export async function windBearing(json: any, position: any){
    const val: number = json.data.daily.data[position].windBearing;
    const direction: any = getDegrees(val);
    console.log(`Wind is blowing ${direction}`);
}

function getDegrees(json: any){
    const val: number = json;

    if ((val > 0) && (val < 90)) {
        // console.log("North East");
        return "North East to South West";
    }
    else if ((val > 90) && (val < 180)) {
        // console.log("South East");
        return "South East to North West";
    }
    else if ((val > 180) && (val < 270)) {
        // console.log("South West");
        return "South West to North East";
    }
    else if ((val > 270) && (val < 360)) {
        // console.log("North West");
        return "North West to South East";
    }
    else{
        return "No Direction";
    }
}

export async function getProbability(json: any, position: number){
    const val1: number = json.data.daily.data[position].precipProbability;
    const val = val1 * 100;
    console.log(`Precip Probability is ${val}% in ${position} minutes`);
}

export async function getIntensity(json: any, position: number){
    const val1: number = json.data.daily.data[position].precipIntensity;
    const val = val1 * 100;
    console.log(`Precip Intensity is ${val} inches per hour in ${position} minutes`);
}
export async function precipitation(json: any, position: number){
    const val1: number = json.data.daily.data[position].precipProbability * 100;
    const val2: number = json.data.daily.data[position].precipIntensity * 100;
    const val3: number = json.data.daily.data[position].precipIntensityMax * 100;
    const val4: number = json.data.daily.data[position].precipIntensityMaxTime;
    const val5: number = json.data.daily.data[position].precipType;
    const time: any = getSSTime(val4);
    const val6: number = json.data.daily.data[position].precipAccumulation;

    console.log(`Precip Probability is ${val1}%`);
    console.log(`Precip Intensity is ${val2} inches per hour`);
    console.log(`Maximum Precip Intensity is ${val3} inches per hour`);
    console.log(`Maximum Precip Time is ${time}`);
    console.log(`Precipitation Type ${val5}`);
    console.log(`${val6} inches of snow`);

}
export async function sun(json: any, position: number){
    const sunrise: number = json.data.daily.data[position].sunriseTime;
    const sunset: number = json.data.daily.data[position].sunsetTime;
    const sunriseTime: any = getSSTime(sunrise);
    const sunsetTime: any = getSSTime(sunset);
    console.log(`Sunrise ${sunriseTime}`);
    console.log(`Sunset ${sunsetTime}`);

}
function getSSTime(json: any){
    const unixTimestamp = json;
    // const unixTimestamp = json.data.daily.data[position].time;
    const date = new Date(unixTimestamp * 1000);
    // console.log(date);
    // Hours part from the timestamp
    const hours = date.getHours();
    // const hours = date.setHours(date.getHours() - 4);
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Will display time in 10:30:23 format
    const formattedTime = hours + ":" + minutes.substr(-2);
    // console.log(formattedTime);
    return formattedTime;
}
export async function getDateOnly(json: any, position: any){
    const unixTimestamp = json.data.daily.data[position].time;
    // const unixTimestamp = json;
    // const unixTimestamp = json.data.daily.data[position].time;
    const date = new Date(unixTimestamp * 1000);
    // console.log(date);
    // Hours part from the timestamp
    const hours = date.getFullYear();
    // const hours = date.setHours(date.getHours() - 4);
    // Minutes part from the timestamp
    const minutes = 1 + date.getMonth();
    // Will display time in 10:30:23 format
    const seconds = date.getDate();
    const formattedTime = minutes + "/" + seconds + "/" + hours;
    console.log(formattedTime);
    // return formattedTime;
}

export async function getDaily(json: any, days: any){
    // const sum = json.data.daily.data.length;
    const sum: number = days + 1;
    // console.log(`Days ${sum}`);
    for (let i: number = 0; i < sum;) {
        console.log(`----------In ${i} Day----------`);
        // getDateAndTime(json, i);
        // getTime(json, i);
        getDateOnly(json, i);
        getDailySummary(json, i);
        sun(json, i);
        uvIndex(json, i);
        humidity(json, i);
        pressure(json, i);
        clouds(json, i);
        visibility(json, i);
        precipitation(json, i);
        temperature(json, i);
        wind(json, i);
        windBearing(json, i);
        i++;
    }
}
