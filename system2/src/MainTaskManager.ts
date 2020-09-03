import { JSONFileManager } from './JSONFileManager';
import { Student } from './Student';
import { Teacher } from './Teacher';

export class MainTaskManager {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    private fileManagerStudents: JSONFileManager = new JSONFileManager("students.json");

    constructor() {
        const fileDataStudents: any = this.fileManagerStudents.readFile();
        this.students = fileDataStudents.map( (student: Student) => {
            return new Student(
                student.id,
                student.name,
                student.email,
                student.dateOfBirth,
                student.hobbies
            )
        })
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
            this.fileManagerStudents.writeFile(this.students)
        }

    }
}