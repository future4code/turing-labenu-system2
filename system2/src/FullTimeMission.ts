import { Mission } from './Mission';
import { Teacher } from './Teacher';
import { Student } from './Student';

export class FullTimeMission extends Mission {
    constructor(
        protected id: string,
        protected startDate: moment.Moment,
        protected endDate: moment.Moment,
        protected teachers: Teacher[] = [],
        protected students: Student[] = [],
        protected currentModule?: number | undefined
    ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }


}