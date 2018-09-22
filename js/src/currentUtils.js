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
        const sum = json.data.currently.summary;
        console.log(sum);
    });
}
exports.getSummary = getSummary;
function getDateAndTime(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const unixTimestamp = json.data.currently.time;
        // gets date and subtracts 4 hours
        const date = new Date(unixTimestamp * 1000);
        date.setHours(date.getHours() - 4);
        console.log(date);
    });
}
exports.getDateAndTime = getDateAndTime;
function temperature(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = json.data.currently.temperature;
        const aTemp = json.data.currently.apparentTemperature;
        console.log(`Current Temp ${temp}`);
        console.log(`Feels Like ${aTemp}`);
    });
}
exports.temperature = temperature;
function humidity(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.humidity;
        const value = val * 100;
        console.log(`Humidity: ${value}%`);
    });
}
exports.humidity = humidity;
function clouds(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.cloudCover;
        const value = val * 100;
        console.log(`Cloud Cover: ${value}%`);
    });
}
exports.clouds = clouds;
function uvIndex(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.uvIndex;
        console.log(`UV Index: ${val}`);
    });
}
exports.uvIndex = uvIndex;
function visibility(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.visibility;
        console.log(`Visibility: ${val} miles`);
    });
}
exports.visibility = visibility;
function stormDistance(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.windSpeed;
        console.log(`Storm is ${val} miles away`);
    });
}
exports.stormDistance = stormDistance;
function stormBearing(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.nearestStormBearing;
        const direction = yield getDegrees(val);
        console.log(`Storm is Bearing from the ${direction}`);
    });
}
exports.stormBearing = stormBearing;
function wind(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const speed = json.data.currently.windSpeed;
        const gust = json.data.currently.windGust;
        console.log(`Wind Speed: ${speed} mph`);
        console.log(`Wind Gust: ${gust} mph`);
    });
}
exports.wind = wind;
function windBearing(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json.data.currently.windBearing;
        const direction = yield getDegrees(val);
        console.log(`Wind is coming from the ${direction}`);
    });
}
exports.windBearing = windBearing;
function getDegrees(json) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.getDegrees = getDegrees;
