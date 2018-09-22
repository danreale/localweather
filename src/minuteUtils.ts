export async function getSummary(json: any){
    const sum = json.data.minutely.summary;
    console.log(sum);
}

export async function precip(json: any){
    const sum: number = json.data.minutely.data.length;
    // console.log(sum);
    for (let i: number = 0; i < sum;) {
        const val1: number = json.data.minutely.data[i].precipProbability;
        const val2 = val1 * 100;
        const val3: number = json.data.minutely.data[i].precipIntensity;
        const val4 = val3 * 100;

        console.log(`Precip Probability is ${val2}% in ${i} minutes`);
        console.log(`Precip Intensity is ${val4} inches per hour in ${i} minutes`);

        i++;
    }
}
