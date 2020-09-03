import { JSONFileManager } from './JSONFileManager';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Mission } from './Mission';
import { FullTimeMission } from './FullTimeMission';

export class MainTaskManager {
    private students: Student[] = [];
    private teachers: Teacher[] = [];
    private missions: Mission[] = [];

    private fileManager: JSONFileManager = new JSONFileManager("./students.json");
    private fileManagerTeachers: JSONFileManager = new JSONFileManager("./teachers.json");
    private fileManagerMissions: JSONFileManager = new JSONFileManager("./missions.json");

    constructor() {
        const fileData: any = this.fileManager.readFile();
        const fileDataTeachers: any = this.fileManagerTeachers.readFile();
        const fileDataMissions: any = this.fileManagerMissions.readFile();
        
        this.students = fileData.map( (student: Student) => {
            return new Student(
                student.id,
                student.name,
                student.email,
                student.dateOfBirth,
                student.hobbies
            )
        });
        
        this.teachers = fileDataTeachers.map( (teacher: Teacher) => {
            return new Teacher(
                teacher.id,
                teacher.name,
                teacher.email,
                teacher.dateOfBirth,
                teacher.skills
            )
        });
        
        // this.missions = fileDataMissions.map( (mission: FullTimeMission) => {
        //     return new FullTimeMission(
        //         mission.id,
        //         mission.startDate,
        //         mission.endDate,
        //         mission.students,
        //         mission.teachers,
        //         mission.currentModule,
        //     )
        // });

    }

    getStudents(): Student[] {
        return this.students
    }

    createStudent(student: Student): void {
        const duplicateStudent: Student | undefined = this.students.find(
            (item: any) => {
                return item.name === student.name
            }
        )
        if(duplicateStudent) {
            throw Error("Já existe um estudante com esse nome")
        } else {
            this.students.push(student);
            this.fileManager.writeFile(this.students)
        }
    }

    getTeachers(): Teacher[] {
        return this.teachers
    }

    createTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
        this.fileManagerTeachers.writeFile(this.teachers)
    }

    getMissions(): Mission[] {
        return this.missions
    }

    createMission(mission: Mission): void {
        this.missions.push(mission);
        this.fileManagerMissions.writeFile(this.missions)
    }

}