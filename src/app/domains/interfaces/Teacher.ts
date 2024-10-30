import { Person } from "./Person";

export interface Teacher extends Person{

    available: boolean;
    speciality: string;
    
}