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
        const sum = json.data.hourly.summary;
        console.log(sum);
    });
}
exports.getSummary = getSummary;
function getDateAndTime(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const unixTimestamp = json.data.hourly.data[position].time;
        // gets date and subtracts 4 hours
        const date = new Date(unixTimestamp * 1000);
        date.setHours(date.getHours() - 4);
        console.log(date);
    });
}
exports.getDateAndTime = getDateAndTime;
function getTime(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function temperature(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = json.data.hourly.data[position].temperature;
        const aTemp = json.data.hourly.data[position].apparentTemperature;
        console.log(`Current Temp ${temp} and Feels Like ${aTemp}`);
    });
}
exports.temperature = temperature;
function humidity(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].humidity;
        const value = val * 100;
        console.log(`Humidity: ${value}%`);
    });
}
exports.humidity = humidity;
function clouds(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].cloudCover;
        const value = val * 100;
        console.log(`Cloud Cover: ${value}%`);
    });
}
exports.clouds = clouds;
function uvIndex(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].uvIndex;
        console.log(`UV Index: ${val}`);
    });
}
exports.uvIndex = uvIndex;
function visibility(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].visibility;
        console.log(`Visibility: ${val} miles`);
    });
}
exports.visibility = visibility;
function pressure(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].pressure;
        console.log(`Pressure: ${val}`);
    });
}
exports.pressure = pressure;
function wind(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const speed = json.data.hourly.data[position].windSpeed;
        const gust = json.data.hourly.data[position].windGust;
        console.log(`Wind Speed: ${speed} mph`);
        console.log(`Wind Gust: ${gust} mph`);
    });
}
exports.wind = wind;
function windBearing(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.hourly.data[position].windBearing;
        const direction = getDegrees(val);
        console.log(`Wind is blowing ${direction}`);
    });
}
exports.windBearing = windBearing;
function getDegrees(json) {
    const val = json;
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
    else {
        return "No Direction";
    }
}
function getProbability(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val1 = json.data.hourly.data[position].precipProbability;
        const val = val1 * 100;
        console.log(`Precip Probability is ${val}% in ${position} minutes`);
    });
}
exports.getProbability = getProbability;
function getIntensity(json, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const val1 = json.data.hourly.data[position].precipIntensity;
        const val = val1 * 100;
        console.log(`Precip Intensity is ${val} inches per hour in ${position} minutes`);
    });
}
exports.getIntensity = getIntensity;
function getHourly(json, hours) {
    return __awaiter(this, void 0, void 0, function* () {
        // const sum = json.data.hourly.data.length;
        const sum = hours + 1;
        // console.log(sum);
        for (let i = 0; i < sum;) {
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
    });
}
exports.getHourly = getHourly;
