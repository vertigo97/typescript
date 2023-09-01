"use strict";
// const person: {
//     name: string;
//     age: number; 
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//         name: 'Adnan',
//         age: 30,
//         hobbies: [
//             'Sports', 'Cooking'
//         ],
//         role: [2, 'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Ado',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// } = {
//         name: 'Adnan',
//         age: 30,
//         hobbies: [
//             'Sports', 'Cooking'
//         ],
// };
if (person.role === Role.ADMIN) {
    console.log('Is admin');
}
// let favouriteSports: string[];
// favouriteSports = ['Sports','Cooking', 'Football'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
