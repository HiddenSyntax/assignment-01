## Provide an example of using  **union**  and  **intersection**  types in TypeScript.

**Union Type**
In web development, APIs are used extensively to exchange data between the frontend and backend. However, the data returned from an API isn't always consistent — it might be a valid value, null, or even undefined, especially when dealing with optional inputs or missing fields. In such scenarios, TypeScript's union types are incredibly practical and widely used.

>It is the **OR operation** of types. It allows a single variable to hold **multiple possible types**. This is a very useful feature in TypeScript.

Example: 

	type  Temperature = number | null;

	function  farenhight2celcius(temperature: Temperature) {
		if (temperature === null) return  new  Error("Data fetching is failed");
		return ((temperature - 32) * 5) / 9;
	}

	let  temperature: Temperature = getData("weather.api");
	let  celcius: Temperature = fahrenheitToCelsius(temperature);

**Intersection Type**
An intersection type combines multiple types into one using the & operator. It is useful when we need all properties in a single variable.

    type  SchoolInfo = {
		name: string;
		registration: number;
		schoolName: string;
	};

	type  CollegeInfo = {
		name: string;
		registration: number;
		collegeName: string;
	};

	type Student = SchoolInfo & CollegeInfo;


 



## What is the use of `enums` in TypeScript? Provide an example of a numeric and string `enum`.

**ENUM**

An `enum` (short for "enumeration") in TypeScript is a way to define a set of named constants, making code more readable and maintainable. It allows to assign meaningful names to numeric or string values, improving type safety.

Numeric Type `enum`:

    enum Day {
	      Monday,
	      Tuesday,
	      Wednesday,
	      Thursday,
	      Friday,
	      Saturday,
	      Sunday
    }

String Type `enum`:

    enum Color {
    	  Red = "#FF0000",
    	  Green = "#00FF00",
    	  Blue = "#0000FF"
    }
