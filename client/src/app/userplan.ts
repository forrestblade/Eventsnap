import { Time } from "@angular/common";

export class UserPlan {
    id: number;
    date: Date;
    start_time: Time;
    end_time: Time;
    budget: number;
    userPlanTags_id: number
}