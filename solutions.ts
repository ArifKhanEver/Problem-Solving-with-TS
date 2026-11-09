function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {

    if (typeof value === "string") {
        return value.trim().toLowerCase()
    }
    if (typeof value === "number") {
        return value * 10
    }
    return value ? "Active" : "Inactive"
}



function formatCoordinate([latitude, longitude, locationName]: readonly [number, number, string]): string {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


function concatenateArrays<T>( ...arrays:T[][]):T[]{
    return arrays.flat();
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses:Course[], minStudents:number):Course[]{
    return courses.filter((arr)=> arr.isPublished === true && arr.students >= minStudents)
}


function pluckValues<T, K extends keyof T>(items: T[], key: K):T[K][]{
    return items.map(item => item[key])
}



class Employee {

    constructor(protected name:string, private baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor (name: string, baseSalary: number, private department: string){
        
        super (name, baseSalary)
        
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}



async function validateAgeAsync(age:number) :Promise<string> {

    if(age < 18){
        throw new Error("Access Denied: Must be 18 or older")
    }else {
        return new Promise((resolve, rejectd)=>{
            setTimeout(()=> resolve("Access Granted"), 1000)
        })
    }
}

