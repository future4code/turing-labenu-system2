import * as fs from "fs";

export class JSONFileManager {
  private filePath: string;

  constructor(filePath: string) {
      this.filePath = filePath;
  }

  public readFile(): any {
      try {
          const fileData: string = fs.readFileSync(this.filePath).toString()
          return JSON.parse(fileData)
          
      } catch(err) {
          console.log(`Erro ao ler a base de dados: ${err.message}`);
          return []
      }
  }

  public writeFile(data: any): void {
      try {
          const dataAsString: string = JSON.stringify(data, null, 3)
          fs.writeFileSync(this.filePath, dataAsString)
      } catch(err) {
          console.log(`Erro ao ler a base de dados: ${err.message}`);
      }
  }

  public setFilePath(path: string): void {
    this.filePath = path;
  }

}