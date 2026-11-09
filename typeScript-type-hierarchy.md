# TypeScript Type Hierarchy: Any, Unknown, and Never

### Introduction
TypeScript organizes its type system into a structured hierarchy consisting of top types and bottom types. At the extreme ends of this hierarchy sit three special types: `any`, `unknown`, and `never`. Understanding their behavior and interactions is essential for writing robust, type-safe, and bug-free applications.

### Body: Top and Bottom Types

**1. Top Types: `any` vs. `unknown`**  
Both `any` and `unknown` can hold any value, which places them at the top of the type hierarchy. However, their safety levels are completely opposite:
* **`any`:** Completely disables TypeScript's type-checking mechanism. You can access non-existent properties or call arbitrary methods without compiler warnings, which frequently leads to runtime exceptions.
* **`unknown`:** Acts as the type-safe alternative to `any`. While it accepts any value during assignment, TypeScript strictly prohibits performing operations on it until its type is verified using type narrowing.

```typescript
let userInput: unknown = "TypeScript";

// userInput.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Safe and allowed
}
```

Because `unknown` enforces validation before usage, it is always preferred over `any` when handling unpredictable data like API responses.

**2. Bottom Type: `never`**  
At the very bottom of the hierarchy sits `never`. It represents values that can never occur or exist. It is commonly used for functions that throw errors indefinitely or never return:

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

`never` is also utilized in exhaustive checks within switch cases to ensure every possible union variant is handled.

### Conclusion
While `any` bypasses type safety, `unknown` enforces defensive programming through mandatory type checking. Combined with `never` at the bottom, these types ensure complete type coverage and eliminate unpredictable runtime errors.
