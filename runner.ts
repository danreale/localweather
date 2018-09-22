import * as weather from "./src/weather";
const args = require("yargs")
.usage("Usage: $0 <command> [options]")
.version("1.0.0", "version")
.alias("version", "V")
.describe("weather", "Type of Weather to get")
.alias("w", "weather")
.default("weather", "current")
.describe("hours", "Number of hours to get weather for")
.alias("h", "hours")
.default("hours", 48)
.describe("days", "Number of days to get weather for")
.alias("d", "days")
.default("days", 7)
.demandOption(["weather"])
.help("help")
.epilog("copyright 2018").argv;

// function errHandling(){
//     if (args.hours > 49){
//         args.hours = 49;
//     }
//     if (args.days > 8){
//         args.days = 7;
//     }
// }

async function runAll(): Promise<void>{

    const w = args.weather;
    let h = args.hours;
    let d = args.days;
    // console.log(w);
    // console.log(h);
    // console.log(d);
    if (h > 48) {
        h = 48;
    }
    if (d > 7){
        d = 7;
    }
    await weather.getWeather(w, h, d); // current, minute, hour, daily
}
    // errHandling();
    runAll();
