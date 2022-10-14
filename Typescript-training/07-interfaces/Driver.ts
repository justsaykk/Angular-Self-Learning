import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";


let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let myCoaches: Coach[] = []; 
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

/* Interesting that the interface acts like a class in the sense that it can be used as 
a type just like other classes */

for (let coach of myCoaches) {
    console.log(coach.getDailyWorkout());
}