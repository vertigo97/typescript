// const person: {
//     name: string;
//     age: number; 
// } = {
var person = {
    name: 'Adnan',
    age: 30,
    hobbies: [
        'Sports', 'Cooking'
    ],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 4;
var favouriteSports;
favouriteSports = ['Sports', 'Cooking', 'Football'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
