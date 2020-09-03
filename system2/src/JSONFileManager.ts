import * as fs from "fs";

export class JSONFileManager {
  private fileName: string;

  constructor(fileName: string) {
      this.fileName = fileName;
  }

  public readFile(): any {
      try {
          const fileData: string = fs.readFileSync(this.fileName).toString()
          return JSON.parse(fileData)
          
      } catch(err) {
          console.log(`Erro ao ler a base de dados: ${err.message}`);
          return []
      }
  }

  public writeFile(data: any): void {
      try {
          const dataAsString: string = JSON.stringify(data, null, 3)
          fs.writeFileSync(this.fileName, dataAsString)
      } catch(err) {
          console.log(`Erro ao ler a base de dados: ${err.message}`);
      }
  }
}