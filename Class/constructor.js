/* Example 1 */
// ------- Create Class
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    fullName() {
        return `Your FullName is ${this.firstName} ${this.lastName}`
    }
}

// ---- Create Instance
let firstStudent = new Student('Colt', 'Steele')

/* Example 2 */

class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

const poly1 = new Polygon();

console.log(poly1.name);
  // expected output: "Polygon"