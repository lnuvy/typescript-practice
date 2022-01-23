class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name:string, age:number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lnuvy = new Human("lnuvy", 123, "male")

  const sayHi = (person: Human): void => {
    console.log(`Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!!!`);
  }

  sayHi(lnuvy);

  export {};