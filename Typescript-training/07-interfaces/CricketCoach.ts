import { Coach } from "./Coach";

export class CricketCoach implements Coach {

    getDailyWorkout(): String {
        return "Practice hidden cricket techniques";
    }

}