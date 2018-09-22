const axios = require("axios");
const config = require("../config.json");
import * as current from "./currentUtils";
import * as daily from "./dailyUtils";
import * as hour from "./hourUtils";
import * as minute from "./minuteUtils";

// const baseUrl = config.baseUrl;
// import * as emailer from "./emailer";
// const weather: string = "daily";

export async function getWeather(weather: string, hours: number, days: number): Promise<void>{
    const lat = config.latitude;
    const long = config.longitude;
    const url: string = `${config.baseUrl}/${config.apiKey}/${lat},${long}?exclude=flags`;
    // console.log(url);
    const argHour = hours;
    // console.log(argHour);
    const argDaily = days;
    // console.log(argDaily);

    const json = await axios.get(url);
    // console.log(json.data);

    if (weather === "current"){
        await currentWeather(json);
    }
    if (weather === "minute"){
        await nextHourWeather(json);
    }
    if (weather === "hour"){
        await hourlyWeather(json, argHour);
    }
    if (weather === "daily"){
        await dailyWeather(json, argDaily);
    }
}

async function currentWeather(json: any){
    console.log(`----------Current Weather----------`);
    await current.getDateAndTime(json);
    await current.getSummary(json);
    await current.temperature(json);
    await current.humidity(json);
    await current.wind(json);
    await current.windBearing(json);
    await current.clouds(json);
    await current.uvIndex(json);
    await current.visibility(json);
    await current.stormDistance(json);
    await current.stormBearing(json);
}

async function nextHourWeather(json: any){
    console.log(`----------Next Hour's Weather----------`);
    await current.getDateAndTime(json);
    await minute.getSummary(json);
    await minute.precip(json);
}

async function hourlyWeather(json: any, hours: number){
    console.log(`----------Hourly Weather For Next 48 Hours----------`);
    await current.getDateAndTime(json);
    await hour.getSummary(json);
    await hour.getHourly(json, hours);
}

async function dailyWeather(json: any, days: number){
    console.log(`----------Daily Weather For Next 7 Days----------`);
    await current.getDateAndTime(json);
    await daily.getSummary(json);
    await daily.getDaily(json, days);
}
