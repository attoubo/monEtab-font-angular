import { Student } from "./Student";

export interface Absence{
    id: number;
    absenceDate: Date;
    absenceNumber: number;
    student: Student;
}