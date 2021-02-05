const normalPerson = {
    firstName :'Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
 
 
 
    },
    
    chargeBill : function(amount,tax,tips){
        this.salary = this.salary - amount - tax - tips;
        return this.salary;

    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName :  'Balam',
    salary : 25000,
}

const friendlyPerson = {
    firstName : 'Hero',
    lastName :  'Golam',
    salary : 30000,
}
//   const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//   heroChargeBill(2000);
// //   console.log(heroPerson.salary);
// //   console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary);
// console.log(heroPerson.salary);

///Apply call function.

// normalPerson.chargeBill.call(heroPerson,1000);
// console.log(heroPerson.salary);


///method er parameter jodi aker odhik thake.


// normalPerson.chargeBill.call(friendlyPerson,2000,500,50);
// console.log(friendlyPerson.salary);


/// apply function use.

normalPerson.chargeBill.apply(heroPerson,[500,500,1000]);
console.log(heroPerson.salary);
