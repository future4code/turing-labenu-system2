import { Mission } from './Mission';
import { Teacher } from './Teacher';
import { Student } from './Student';

export class FullTimeMission extends Mission {
    
    constructor(
        public id: string,
        public startDate: moment.Moment,
        public endDate: moment.Moment,
        public teachers: Teacher[] = [],
        public students: Student[] = [],
        public currentModule?: number | undefined,
    ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }

}