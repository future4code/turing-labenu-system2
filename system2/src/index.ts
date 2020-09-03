import { FileManager } from './FileManager';
import { Student } from './Student';

const fileDataStudents: FileManager = new FileManager('./students.json');

console.log(fileDataStudents.readFile)

const student: Student = new Student("1234", "Carlota Joaquina", "carlota-florzinha@gmail.com", "15/02/1994", ["desenhar", "cantar", "jogar xadrez"]);

console.log(student)
console.log(student.getAge())