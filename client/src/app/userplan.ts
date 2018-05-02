import { Time } from "@angular/common";
import { Tags } from "./tags";

export class UserPlan {
    id: number;
    date: Date;
    start_time: Time;
    end_time: Time;
    budget: number;
    userplantags: Array<Tags>[]
}