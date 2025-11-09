# TypeScript Learning Project

This project is a simple TypeScript application designed to demonstrate and explain various fundamental concepts of the TypeScript language. The main logic is contained in the `app.ts` file, which includes commented code examples.

## Concepts Covered

The `app.ts` file covers the following TypeScript concepts:

- **Basic Types**: `string`, `number`, `boolean`
- **Arrays**: `string[]`, `number[]`
- **Tuples**: Fixed-length arrays with specific types.
- **Union Types**: Variables that can hold multiple types (`string | number`).
- **Special Types**: `any`, `unknown`, `never`.
- **Functions**:
  - Basic functions with `void` return.
  - Functions with a `string` return type.
- **Objects**:
  - Using `interface` to define object shapes.
  - Using `type` aliases for object shapes.
- **Enums**: Creating sets of named constants.
- **Classes**: Basic class definition with properties, a constructor, and methods.
- **Generics**: Creating reusable components that can work with a variety of types.
- **Intersection Types**: Combining multiple types into one.

## How to Run the Project

To compile and run this project, you need to have Node.js and the TypeScript compiler (`tsc`) installed.

1.  **Install Dependencies**:
    If you haven't already, install the necessary `typescript` package.

    ```bash
    npm install
    ```

2.  **Compile the TypeScript file**:
    This command compiles the `app.ts` file and generates a corresponding `app.js` file.

    ```bash
    npx tsc app.ts
    ```

3.  **Run the JavaScript file**:
    This command executes the compiled JavaScript code using Node.js.

    ```bash
    node app.js
    ```
