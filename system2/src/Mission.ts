import Moment from 'moment';
import { Teacher } from './Teacher';
import { Student } from './Student';

export abstract class Mission {
    private name: string = "";

    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule?: number = undefined
    ) {}

    public getId(): string {
        return this.id;
    }

    public getStartDate(): moment.Moment {
        return this.startDate;
    }

    public getEndDate(): moment.Moment {
        return this.endDate;
    }

    public getTeachers(): Teacher[] {
        return this.teachers;
    }

    public getStudents(): Student[] {
        return this.students;
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }
}