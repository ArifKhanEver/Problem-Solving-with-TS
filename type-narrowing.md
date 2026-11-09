# Type Narrowing Methodology in TypeScript

### Introduction

TypeScript allows variables to have multiple types using union types. Type Narrowing is the process of filtering a broad or union type into a more specific type at runtime. Type Narrowing helps the compiler to safely declare the exact value before execution.

### Body: Common Type Guards

There are several ways in TypeScript to narrow down types effectively:

**1. The `typeof` Operator:**  
This is primarily used for primitive data types such as `string`, `number`, or `boolean`.

```typescript
function printLength(item: string | number) {
    if (typeof item === "string") {
        return item.length;
    } else {
        return item;
    }
}
```

**2. The `instanceof` Operator:**  
The `instanceof` operator checks if an object is an instance of a specific class or constructor function.

```typescript
class Car {
    drive() {
        return "Driving";
    }
}

class Boat {
    sail() {
        return "Sailing";
    }
}

function travel(vehicle: Car | Boat) {
    if (vehicle instanceof Car) {
        return vehicle.drive();
    }
    return vehicle.sail();
}
```

**3. The `in` Operator:**  
The `in` operator checks if a specific property exists inside an object or not.

```typescript
type Admin = { name: string; role: string };
type User = { name: string };

function greet(person: Admin | User) {
    if ("role" in person) {
        return `Admin: ${person.role}`;
    }
    return `User: ${person.name}`;
}
```

### Conclusion

Type narrowing bridges runtime JavaScript checks with compile-time TypeScript safety. By leveraging `typeof`, `instanceof`, and the `in` operator, developers can handle complex union types safely without causing runtime crashes.
