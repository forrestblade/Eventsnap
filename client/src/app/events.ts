import { Time } from "@angular/common";
import { Tags } from "./tags";

export class Events {
    id: number;
    name: String;
    date: Date;
    start_time: Time;
    end_time: Time;
    price: number;
    eventstags: Array<Tags>[]


}