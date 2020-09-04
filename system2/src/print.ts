import { MainTaskManager } from './MainTaskManager';


const mainTaksManager: MainTaskManager = new MainTaskManager();


switch(process.argv[2]) {
    case "students":
        mainTaksManager.printStudents();        
        break;
    case "teachers":
        mainTaksManager.printTeachers();   
        break;
    default:
        console.log("Operação inválida.")
}