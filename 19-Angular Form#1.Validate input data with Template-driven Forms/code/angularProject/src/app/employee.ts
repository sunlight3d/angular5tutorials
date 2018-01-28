/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Employee class => Employee's model
*/
export class Employee {
    constructor(
        public id: number,
        public name: string,
        public dateOfBirth: Date,
        public alias?: string,//optional
        public jobCategory?: string, //optional. Eg: technology, social, sciences, doctor 
    ) {

    }
}
