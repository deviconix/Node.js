
// extend event
export const exitScenario = mess => {
    console.log(`SCENARIO ERR : ${mess}`);
    //return false;
    process.exit(1);
}