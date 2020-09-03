import {User} from "./User";

export class Teacher implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public dateOfBirth: string,
        public skills: string,
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

const teacher: Teacher = new Teacher("1", "Soter", "soter@gmail.com", "22/10/1989", "CSS, React, Testes, Redux")