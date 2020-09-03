import moment from 'moment';
import { User } from './User';

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public dateOfBirth: string,
        public hobbies: string[]
    ) {}

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getDateOfBirth(): string {
        return this.dateOfBirth
    }

    getHobbies(): string[] {
        return this.hobbies
    }

    getAge():number {
        const birth = moment(this.dateOfBirth, "DD/MM/YYYY");
        const age = moment().diff(birth, "years")
        return age
    }

}
