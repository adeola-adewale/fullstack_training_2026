// scopes in Javascript

// 1. Global Scope - can be accessed globally (anywhere)
const year = 2000;

function calculateAge () {
    const fullName = "Hardey Hollar"
    
    console.log(fullName)
    //const year = 2022;
    console.log(`My name is ${fullName}, and I am ${year}.`)
}
calculateAge()