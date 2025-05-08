import { log } from "console";
import { stat } from "fs";

export function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) return input.toLowerCase();

    return input.toUpperCase();
}

export function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter((item) => {
        return item.rating >= 4;
    });
}

class Vehicle {
    constructor(private make: string, private year: number) {}

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

export class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.forEach((element) => {
        result = [...result, ...element];
    });

    return result;
}

export function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}

export interface Product {
    name: string;
    price: number;
}

export function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let max = products[0].price;
    let maxidx = 0;
    products.forEach((product, index) => {
        if (product.price > max) {
            max = product.price;
            maxidx = index;
        }
    });

    return products[maxidx];
}

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) return "Weekend";
    else return "Weekday";
}

export async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) reject(new Error("Negative number not allowed"));
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}

//squareAsync(4).then(console.log); // Output after 1s: 16
//squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
let a: number;
let b: null;

//

type SchoolStudent = {
    name: string;
    registration: number;
    schoolName: string;
};

type CollegeStudent = {
    name: string;
    registration: number;
    collegeName: string;
};

type Student = SchoolStudent & CollegeStudent;

enum status {
    pending = "PENDING_PROCESS",
    processing = "PROCESSING",
    completed = "COMPLETED"
}

console.log(status.pending);

