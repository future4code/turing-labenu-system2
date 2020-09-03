export abstract class USer {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected dateOfBirth: string,

    ) { }

    
    public getId(): string {
        return this.id;
  }
    
    public getName(): string {
        return this.name;
  }
    
    public getEmail(): string {
        return this.email;
  }
    
    public getDateOfBirth(): string {
        return this.dateOfBirth;
  }
}