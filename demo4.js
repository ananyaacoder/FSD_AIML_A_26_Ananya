
 const student ={name: "Ananya Agarwal",
 id: "321",
 branch: "CSE-AIML",
 rollnumber: "27",
 section: "A"
}
 const newstudent= {...student,
    address:
    {
        street1: "Sector-15",
        city: "Noida",
        state: "U.P",
        pincode: 28566
    }
}
console.log("Student=", student);
console.log("New Student", newstudent);
