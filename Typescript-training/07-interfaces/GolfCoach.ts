import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): String {
        return "Practice hidden gold techniques";
    }

}