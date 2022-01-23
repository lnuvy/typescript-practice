interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "lnuvy",
  age: 24,
  gender: "male",
}

  const sayHi = (person: Human): void => {
    console.log(`Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!!!`);
  }

  sayHi(person);

  export {};