const persons = [

    {
        firstName: 'John',
        lastName: 'Doe',
        age: 35,
        adress :{
            street: '200 South reynold street',
            zipcode: 21090,
            district: 'alexandria',
            states: 'VA'
        },
        firstname: 'Jonny',
        lastName: 'Smith',
        age: '30',
        adress :{
            street: '176 South alexandria street',
            zipcode: 21878,
            district: 'fairFax county',
            states: 'Maryland'
        },

        firstname: 'Danielle ',
        lastName: 'Hundley',
        age: 29,
        adress: {
            street: '165 North van dorn street',
            zipcode: 22303,
            district: 'alexandria',
            states: 'VA'
        }

    }];

console.log(persons);

const convertPersonToJSON = JSON.stringify(persons);
console.log(convertPersonToJSON);
