// const person: {
//     name: string;
//     age: number; 
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {

        name: 'Adnan',
        age: 30,
        hobbies: [
            'Sports', 'Cooking'
        ],
        role: [2, 'author']
}


person.role.push('admin');



let favouriteSports: string[];
favouriteSports = ['Sports','Cooking', 'Football'];


console.log(person.name);
for(const hobby of person.hobbies)
{
        console.log(hobby.toUpperCase());
    }

