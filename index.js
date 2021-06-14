// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');

// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:04:34 AM";
let astronautCount = Number(input.question("How many astronauts on board today? "));
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";
let clearForTakeoff = true;



// Write code to generate the LC04 report here:
let dashes = "-------------------------------------";

console.log(dashes);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(dashes);
console.log(`Date: ${date}`);
console.log(`Time: ${time}`);
console.log()

console.log(dashes);
console.log("> ASTRONAUT INFO");
console.log(dashes);
console.log(`* count: ${astronautCount}`);
console.log(`* status: ${astronautStatus}`);
console.log()

console.log(dashes);
console.log("> FUEL DATA");
console.log(dashes);
console.log(`* Fuel temp celsius: ${fuelTempCelsius}`);
console.log(`* Fuel level: ${fuelLevel}%`);
console.log();

console.log(dashes);
console.log("> MASS DATA");
console.log(dashes);
console.log(`* Crew mass: ${crewMassKg} kg`);
console.log(`* Fuel mass: ${fuelMassKg} kg`);
console.log(`* Shuttle mass: ${shuttleMassKg} kg`);
console.log(`* Total mass: ${totalMassKg} kg`);
console.log()

console.log(dashes);
console.log("> FLIGHT PLAN");
console.log(dashes);
console.log(`* weather: ${weatherStatus}`);
console.log()

console.log(dashes);
console.log("> OVERALL STATUS");
console.log(dashes);
if (clearForTakeoff === true){
  console.log(`* Clear for takeoff: YES`);
}
console.log()




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.