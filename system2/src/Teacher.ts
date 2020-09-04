import moment from 'moment';
import {User} from "./User";

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    TESTES = "TESTES", 
    BACKEND = "BACKEND",
    OOP = "OOP",
    CSS = "CSS",
    TYPESCRIPT = "TYPESCRIPT"
}

export class Teacher implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public dateOfBirth: string,
        public skills: TEACHER_SPECIALTY[]
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.id;
    }

    public getEmail(): string {
        return this.id;
    }

    public getDateOfBirth(): string {
        return this.id;
    }

    getAge():number {
        const birth = moment(this.dateOfBirth, "DD/MM/YYYY");
        const age = moment().diff(birth, "years")
        return age
    }

    getSkills(): TEACHER_SPECIALTY[] {
        return this.skills;
    }
}
