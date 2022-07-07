class Students {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

const students1 = new Students("Roshni", 2017);
const students2 = new Students("Mahesh", 2019);

console.log(students1.name + " " + students1.year);
console.log(students2.name + " " + students2.year);