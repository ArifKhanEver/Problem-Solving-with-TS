# Assignment 1: Problem Solving with TypeScript & OOP

## Overview
This repository contains solutions for Assignment 1 of the Level-2 Web Development Course. The assignment focuses on applying core TypeScript and Object-Oriented Programming (OOP) concepts, including basic types, union and intersection types, type narrowing, generics, access modifiers, inheritance, and asynchronous operations with Promises.

All coding solutions are implemented in a single file: [`solutions.ts`](./solutions.ts).

---

## Problems Covered

1. **`multiplyValue`**: Handles optional and default parameters, correctly handling `0` multipliers.
2. **`processInput`**: Type narrowing using `typeof` for `string`, `number`, and `boolean` inputs with union return types.
3. **`formatCoordinate`**: Implements a `readonly` tuple `[number, number, string]` to safely format location coordinates.
4. **`concatenateArrays`**: A generic function using rest parameters (`...arrays: T[][]`) to merge multiple arrays.
5. **`getPopularCourses`**: Filters an array of `Course` interfaces based on publication status and minimum student count (`>= minStudents`).
6. **`pluckValues`**: A generic utility function using `keyof` constraints (`<T, K extends keyof T>`) to extract property values.
7. **`Employee` & `Manager` Classes**: Demonstrates OOP principles in TypeScript using `protected` and `private` access modifiers, parameter properties, inheritance (`extends`), and `super()`.
8. **`validateAgeAsync`**: An asynchronous function returning a `Promise<string>` that resolves after a 1-second delay or rejects with an `Error`.

---

## Technical Blog Posts

As part of this assignment, two technical blog posts have been written explaining core TypeScript concepts in detail:

1. 📖 **[Type Narrowing Methodology in TypeScript](./type-narrowing.md)**  
   *Explains how type narrowing works using `typeof`, `instanceof`, and the `in` operator to achieve runtime type safety.*

2. 📖 **[TypeScript Type Hierarchy: Any, Unknown, and Never](./typeScript-type-hierarchy.md)**  
   *Explores TypeScript's type hierarchy, focusing on top types (`any` vs. `unknown`), why `unknown` is preferred, and the bottom type (`never`).*
