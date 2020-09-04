import Moment from 'moment';
import { Student } from './Student';
import { TEACHER_SPECIALTY, Teacher } from './Teacher';
import { MainTaskManager } from './MainTaskManager';
import { FullTimeMission } from './FullTimeMission';
import { NightMission } from './NightMission';


const student1: Student = new Student("1234", "Carlota Joaquina", "carlota-florzinha@gmail.com", "15/02/1994", ["desenhar", "cantar", "jogar xadrez"]);
const student2: Student = new Student("1235", "Cirilo", "cirilo@gmail.com", "15/02/1994", ["Carlotinha", "games", "assistir séries de ficção"]);

const teacher: Teacher = new Teacher("1", "Soter", "soter@gmail.com", "22/10/1989", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])
const teacher2: Teacher = new Teacher("1", "Mateus", "mateus@gmail.com", "22/10/1989", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])

const mainTaksManager: MainTaskManager = new MainTaskManager();

const fullTimeMission: FullTimeMission = new FullTimeMission("1236", Moment("15/02/2020", "DD/MM/YYYY"), Moment("18/11/2020", "DD/MM/YYYY"), [], [], 5);
fullTimeMission.setName("turma-1")
const nightMission: NightMission = new NightMission("1236", Moment("15/02/2020", "DD/MM/YYYY"), Moment("18/11/2020", "DD/MM/YYYY"), [], [], 5);
nightMission.setName("turma-1-na-night")

// mainTaksManager.createStudent(student1)
// mainTaksManager.createStudent(student2)

// mainTaksManager.createTeacher(teacher)
// mainTaksManager.createTeacher(teacher2)

mainTaksManager.createMission(fullTimeMission)
mainTaksManager.createMission(nightMission)

// console.log(mainTaksManager.getStudents())
// console.log(mainTaksManager.getTeachers())
console.log(mainTaksManager.getMissions())
