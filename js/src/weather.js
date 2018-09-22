"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const config = require("../config.json");
const current = __importStar(require("./currentUtils"));
const daily = __importStar(require("./dailyUtils"));
const hour = __importStar(require("./hourUtils"));
const minute = __importStar(require("./minuteUtils"));
// const baseUrl = config.baseUrl;
// import * as emailer from "./emailer";
// const weather: string = "daily";
function getWeather(weather, hours, days) {
    return __awaiter(this, void 0, void 0, function* () {
        const lat = config.latitude;
        const long = config.longitude;
        const url = `${config.baseUrl}/${config.apiKey}/${lat},${long}?exclude=flags`;
        // console.log(url);
        const argHour = hours;
        // console.log(argHour);
        const argDaily = days;
        // console.log(argDaily);
        const json = yield axios.get(url);
        // console.log(json.data);
        if (weather === "current") {
            yield currentWeather(json);
        }
        if (weather === "minute") {
            yield nextHourWeather(json);
        }
        if (weather === "hour") {
            yield hourlyWeather(json, argHour);
        }
        if (weather === "daily") {
            yield dailyWeather(json, argDaily);
        }
    });
}
exports.getWeather = getWeather;
function currentWeather(json) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`----------Current Weather----------`);
        yield current.getDateAndTime(json);
        yield current.getSummary(json);
        yield current.temperature(json);
        yield current.humidity(json);
        yield current.wind(json);
        yield current.windBearing(json);
        yield current.clouds(json);
        yield current.uvIndex(json);
        yield current.visibility(json);
        yield current.stormDistance(json);
        yield current.stormBearing(json);
    });
}
function nextHourWeather(json) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`----------Next Hour's Weather----------`);
        yield current.getDateAndTime(json);
        yield minute.getSummary(json);
        yield minute.precip(json);
    });
}
function hourlyWeather(json, hours) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`----------Hourly Weather For Next 48 Hours----------`);
        yield current.getDateAndTime(json);
        yield hour.getSummary(json);
        yield hour.getHourly(json, hours);
    });
}
function dailyWeather(json, days) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`----------Daily Weather For Next 7 Days----------`);
        yield current.getDateAndTime(json);
        yield daily.getSummary(json);
        yield daily.getDaily(json, days);
    });
}
