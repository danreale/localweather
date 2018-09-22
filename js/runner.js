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
const weather = __importStar(require("./src/weather"));
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
function runAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const w = args.weather;
        let h = args.hours;
        let d = args.days;
        // console.log(w);
        // console.log(h);
        // console.log(d);
        if (h > 48) {
            h = 48;
        }
        if (d > 7) {
            d = 7;
        }
        yield weather.getWeather(w, h, d); // current, minute, hour, daily
    });
}
// errHandling();
runAll();
