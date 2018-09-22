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
        const sum = json.data.minutely.summary;
        console.log(sum);
    });
}
exports.getSummary = getSummary;
function precip(json) {
    return __awaiter(this, void 0, void 0, function* () {
        const sum = json.data.minutely.data.length;
        // console.log(sum);
        for (let i = 0; i < sum;) {
            const val1 = json.data.minutely.data[i].precipProbability;
            const val2 = val1 * 100;
            const val3 = json.data.minutely.data[i].precipIntensity;
            const val4 = val3 * 100;
            console.log(`Precip Probability is ${val2}% in ${i} minutes`);
            console.log(`Precip Intensity is ${val4} inches per hour in ${i} minutes`);
            i++;
        }
    });
}
exports.precip = precip;
