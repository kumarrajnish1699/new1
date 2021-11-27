function Person(FirstName, LastName, Office_Address)
{
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.Office_Address = Office_Address;
}

const p1 = new Person("Rahul","Gandhi","Delhi");
const p2 = new Person("Sidharth","Shukla","Mumbai");
const p3 = new Person("Soumitra","Chatterjee","Kolkata");
console.log('First Person:->');
console.log(p1.FirstName,p1.LastName,p1.Office_Address);
console.log('Second Person:->');
console.log(p2.FirstName,p2.LastName,p2.Office_Address);
console.log('Third Person:->');
console.log(p3.FirstName,p3.LastName,p3.Office_Address)
