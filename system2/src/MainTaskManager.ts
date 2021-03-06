import { JSONFileManager } from './JSONFileManager';
import { Student } from './Student';
import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import { Mission } from './Mission';
import { FullTimeMission } from './FullTimeMission';
import { NightMission } from './NightMission';

export class MainTaskManager {
    private students: Student[] = [];
    private teachers: Teacher[] = [];
    private missions: Mission[] = [];

    private fileManager: JSONFileManager = new JSONFileManager("./students.txt");
    private fileManagerTeachers: JSONFileManager = new JSONFileManager("./teachers.txt");
    private fileManagerMissions: JSONFileManager = new JSONFileManager("./missions.txt");

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

        this.missions = fileDataMissions.map( (fullTimeMission: FullTimeMission) => {
            return new FullTimeMission(
                fullTimeMission.id,
                fullTimeMission.startDate,
                fullTimeMission.endDate,
                fullTimeMission.teachers,
                fullTimeMission.students,
                fullTimeMission.currentModule,
            )
        });

        this.missions = fileDataMissions.map( (nightMission: NightMission) => {
            return new NightMission(
                nightMission.id,
                nightMission.startDate,
                nightMission.endDate,
                nightMission.teachers,
                nightMission.students,
                nightMission.currentModule,
            )
        });
    }

    getStudents(): Student[] {
        return this.students
    }

    printStudents(): void {
        this.students.map(
            (student) => {
                console.log(`{
                    Nome: ${student.getName()},
                    Email: ${student.getEmail()},
                    Idade: ${student.getAge()},
                    Especialidades: ${student.getHobbies()} 
                }`)
            }
        )
        
    }

    printTeachers(): void {
        this.teachers.map(
            (teacher) => {
                console.log(`{
                    Nome: ${teacher.getName()},
                    Email: ${teacher.getEmail()},
                    Idade: ${teacher.getAge()},
                    Especialidades: ${teacher.getSkills()} 
                }`)
            }
        )
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
        
        const duplicateTeachers: Teacher | undefined = this.teachers.find(
            (item: any) => {
                return item.name === teacher.name
            }
        )
        if(duplicateTeachers) {
            throw Error("Já existe um professor com esse nome")
        } else {
            this.teachers.push(teacher);
            this.fileManagerTeachers.writeFile(this.teachers)
        }
    }

    getMissions(): Mission[] {
        return this.missions
    }

    createMission(mission: Mission): void {
        this.missions.push(mission);
        this.fileManagerMissions.writeFile(this.missions)
    }

}