/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
1 User has many(n) Addresses
*/
export class User {
    id = 0;
    name = '';    
    email="";
    addresses: Address[];
}
export class Address {
    street = '';
    city = '';
    state = '';    
}
export const users: User[] = [
    {
        id: 1,
        name: 'Hoang',
        email: "sunlight4d@gmail.com",
        addresses: [
            { street: '111 Abc street', city: 'Some where in Alaska', state: 'Alaska'},
            { street: '222 Abc street', city: 'Somewhere in Colorado', state: 'Colorado'},
        ]
    },
    {
        id: 2,
        name: 'Alex',
        email: "alex234@gmail.com",
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'Texas'},
        ]
    },
    {
        id: 3,
        name: 'George',
        email: "george123@gmail.com",
        addresses: []
    },
];
export const states = ['Alaska', 'Colorado', 'Florida', 'Texas'];