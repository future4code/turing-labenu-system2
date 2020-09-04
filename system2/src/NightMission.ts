import { Mission } from './Mission';
import { Teacher } from './Teacher';
import { Student } from './Student';

export class NightMission extends Mission {

    constructor(
        public id: string,
        public startDate: moment.Moment,
        public endDate: moment.Moment,
        public teachers: Teacher[] = [],
        public students: Student[] = [],
        public currentModule?: number | undefined
    ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }

    public setName(name: string) {
        if (name.indexOf("-na-night") !== -1) {
          super.setName(name);
        }
    }

}