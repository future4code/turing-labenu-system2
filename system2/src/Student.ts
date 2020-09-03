import { User } from './User';
import moment from 'moment';

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public dateOfBirth: string,
        public hobbies: string[]
    ) {}

    getAge():number {
        const birth = moment(this.dateOfBirth, "DD/MM/YYYY");
        const age = moment().diff(birth, "years")
        return age
    }

}