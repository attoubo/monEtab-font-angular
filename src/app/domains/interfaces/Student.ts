import { Absence } from "./Absence";
import { Person } from "./Person";

export interface Student extends Person {
    [x: string]: any;

    matricule: string;
    fatherPhoneNumber: string;
    absences?: Absence[];

}