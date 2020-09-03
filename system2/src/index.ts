import { Student } from './Student';
import { MainTaskManager } from './MainTaskManager';


const student1: Student = new Student("1234", "Carlota Joaquina", "carlota-florzinha@gmail.com", "15/02/1994", ["desenhar", "cantar", "jogar xadrez"]);

const student2: Student = new Student("1235", "Cirilo", "cirilo@gmail.com", "15/02/1994", ["Carlotinha", "games", "assistir séries de ficção"]);

const mainTaksManager: MainTaskManager = new MainTaskManager();

// mainTaksManager.createStudent(student1);
// mainTaksManager.createStudent(student2);
console.log(mainTaksManager.getStudents())