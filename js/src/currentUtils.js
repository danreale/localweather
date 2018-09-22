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
        console.log(`Storm is traveling ${direction}`);
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
        console.log(`Degrees: ${val}`);
        const direction = yield getDegrees(val);
        console.log(`Wind is blowing ${direction}`);
    });
}
exports.windBearing = windBearing;
function getDegrees(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const val = json;
        if ((val > 0) && (val <= 10)) {
            // console.log("North East");
            return "North to South";
        }
        else if ((val > 10) && (val <= 80)) {
            // console.log("South East");
            return "North East to South West";
        }
        else if ((val > 80) && (val <= 110)) {
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
        else if ((val > 260) && (val <= 280)) {
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
    });
}
exports.getDegrees = getDegrees;
