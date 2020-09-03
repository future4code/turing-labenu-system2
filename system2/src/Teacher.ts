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
}

//Codigo para implementar no index

// import {TEACHER_SPECIALTY, Teacher} from './Teacher';

// const teacher: Teacher = new Teacher("1", "Soter", "soter@gmail.com", "22/10/1989", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])

// console.log(`
//     Nome: ${teacher.name}
//     Email: ${teacher.email}
//     Data de nascimento: ${teacher.dateOfBirth}
//     Especialidades: ${teacher.skills}
// `)