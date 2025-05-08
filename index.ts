function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) return input.toLowerCase();

    return input.toUpperCase();
}

function filterByRating(
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

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.forEach((element) => {
        result = [...result, ...element];
    });

    return result;
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
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

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) return "Weekend";
    else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) reject(new Error("Negative number not allowed"));
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}
