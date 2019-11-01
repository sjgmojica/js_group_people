const people = [{
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
}, {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
}, {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
}, {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
}, {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
}, {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
}, {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
}, {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
}, {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
}, {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
}];


function listByGender(gender) {
    // lists of gender
    let gender_list_by_gender = [];

    // Check if param gender value is equal to define values
    if (!['F', 'M', 'm', 'f'].includes(gender)) {
        return 'Invalid gender';
    } 
  
    // For every people
    for (let i=0; i <= people.length; ++i) {

        // Check if object of people gender is equal to gender param
        if (typeof people[i] !== 'undefined' && people[i]['gender'] === gender.toUpperCase()) {
            // If satisfied the condition. push the object this list.
            gender_list_by_gender.push(people[i]);
        }
    }
    
    // Return result
    return gender_list_by_gender
}

console.log(listByGender('k'));