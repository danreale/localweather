"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getSummary(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const sum = json.data.daily.summary;
        console.log(sum);
    });
}
exports.getSummary = getSummary;
function getDailySummary(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const sum = json.data.daily.data[position].summary;
        console.log(sum);
    });
}
exports.getDailySummary = getDailySummary;
function getDateAndTime(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const unixTimestamp = json.data.daily.data[position].time;
        // gets date and subtracts 4 hours
        const date = new Date(unixTimestamp * 1000);
        date.setHours(date.getHours() - 4);
        console.log(date);
    });
}
exports.getDateAndTime = getDateAndTime;
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
function temperature(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp1 = json.data.daily.data[position].temperatureHigh;
        const temp2 = json.data.daily.data[position].temperatureHighTime;
        const temp3 = json.data.daily.data[position].temperatureLow;
        const temp4 = json.data.daily.data[position].temperatureLowTime;
        const temp5 = json.data.daily.data[position].apparentTemperatureHigh;
        const temp6 = json.data.daily.data[position].apparentTemperatureHighTime;
        const temp7 = json.data.daily.data[position].apparentTemperatureLow;
        const temp8 = json.data.daily.data[position].apparentTemperatureLowTime;
        const t1 = getSSTime(temp2);
        const t2 = getSSTime(temp4);
        const t3 = getSSTime(temp6);
        const t4 = getSSTime(temp8);
        console.log(`High Temp is ${temp1} and Feels Like ${temp5}`);
        console.log(`High Temp Time is ${t1} and ${t3}`);
        console.log(`Low Temp is ${temp3} and Feels Like ${temp7}`);
        console.log(`Low Temp Time is ${t2} and ${t4}`);
    });
}
exports.temperature = temperature;
function humidity(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].humidity;
        const value = val * 100;
        console.log(`Humidity: ${value}%`);
    });
}
exports.humidity = humidity;
function clouds(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].cloudCover;
        const value = val * 100;
        console.log(`Cloud Cover: ${value}%`);
    });
}
exports.clouds = clouds;
function uvIndex(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].uvIndex;
        const val1 = json.data.daily.data[position].uvIndexTime;
        const time = getSSTime(val1);
        console.log(`UV Index: ${val}`);
        console.log(`UV Index will be highest at ${time}`);
    });
}
exports.uvIndex = uvIndex;
function visibility(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].visibility;
        console.log(`Visibility: ${val} miles`);
    });
}
exports.visibility = visibility;
function pressure(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].pressure;
        console.log(`Pressure: ${val}`);
    });
}
exports.pressure = pressure;
function wind(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const speed = json.data.daily.data[position].windSpeed;
        const gust = json.data.daily.data[position].windGust;
        const gustTime = json.data.daily.data[position].windGustTime;
        const t1 = getSSTime(gustTime);
        console.log(`Wind Speed: ${speed} mph`);
        console.log(`Wind Gust: ${gust} mph`);
        console.log(`Highest Wind Gust Time: ${t1}`);
    });
}
exports.wind = wind;
function windBearing(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.daily.data[position].windBearing;
        const direction = getDegrees(val);
        console.log(`Wind is coming from the ${direction}`);
    });
}
exports.windBearing = windBearing;
function getDegrees(json) {
    const val = json;
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
    else {
        return "No Direction";
    }
}
function getProbability(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val1 = json.data.daily.data[position].precipProbability;
        const val = val1 * 100;
        console.log(`Precip Probability is ${val}% in ${position} minutes`);
    });
}
exports.getProbability = getProbability;
function getIntensity(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val1 = json.data.daily.data[position].precipIntensity;
        const val = val1 * 100;
        console.log(`Precip Intensity is ${val} inches per hour in ${position} minutes`);
    });
}
exports.getIntensity = getIntensity;
function precipitation(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val1 = json.data.daily.data[position].precipProbability * 100;
        const val2 = json.data.daily.data[position].precipIntensity * 100;
        const val3 = json.data.daily.data[position].precipIntensityMax * 100;
        const val4 = json.data.daily.data[position].precipIntensityMaxTime;
        const val5 = json.data.daily.data[position].precipType;
        const time = getSSTime(val4);
        const val6 = json.data.daily.data[position].precipAccumulation;
        console.log(`Precip Probability is ${val1}%`);
        console.log(`Precip Intensity is ${val2} inches per hour`);
        console.log(`Maximum Precip Intensity is ${val3} inches per hour`);
        console.log(`Maximum Precip Time is ${time}`);
        console.log(`Precipitation Type ${val5}`);
        console.log(`${val6} inches of snow`);
    });
}
exports.precipitation = precipitation;
function sun(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const sunrise = json.data.daily.data[position].sunriseTime;
        const sunset = json.data.daily.data[position].sunsetTime;
        const sunriseTime = getSSTime(sunrise);
        const sunsetTime = getSSTime(sunset);
        console.log(`Sunrise ${sunriseTime}`);
        console.log(`Sunset ${sunsetTime}`);
    });
}
exports.sun = sun;
function getSSTime(json) {
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
function getDateOnly(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.getDateOnly = getDateOnly;
function getDaily(json, days) {
    return __awaiter(this, void 0, void 0, function* () {
        // const sum = json.data.daily.data.length;
        const sum = days + 1;
        // console.log(`Days ${sum}`);
        for (let i = 0; i < sum;) {
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
    });
}
exports.getDaily = getDaily;
