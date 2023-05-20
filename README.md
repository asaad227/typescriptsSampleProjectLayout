# typescriptsSampleProjectLayout

To start a TypeScript project, you can follow these steps:

1. Set up your development environment: Ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official Node.js website: https://nodejs.org

2. Create a new directory for your project: Choose a suitable location on your system and create a new directory for your TypeScript project.

3. Initialize a new npm project: Open a terminal or command prompt, navigate to the project directory you created, and run the following command to initialize a new npm project:

npm init -y

4. Install TypeScript: In the terminal, run the following command to install TypeScript as a development dependency for your project:

npm install typescript --save-dev

for globally install command

npm install -g typescript --save-dev

5. Create a tsconfig.json file: In the project directory, create a tsconfig.json file that will serve as the TypeScript configuration file. You can create an empty file and add the necessary configuration options.

Here's a basic example:

{
"compilerOptions": {
"target": "ES2022",
"module": "commonjs",
"outDir": "dist",
"rootDir": "src"
},
"include": ["src/**/*.ts"],
"exclude": ["node_modules"]
}

This configuration specifies that the TypeScript compiler should target ECMAScript 2022, use CommonJS modules, place the compiled JavaScript files in the "dist" directory, and consider the "src" directory as the root directory for TypeScript files.

6. Create a "src" directory: In the project directory, create a "src" directory. This is where you'll place your TypeScript source files.

7. Write TypeScript code: Create a new TypeScript file in the "src" directory and start writing your TypeScript code.

8. Build and run the TypeScript code: In the terminal, run the following command to compile your TypeScript code:

npx tsc

This will invoke the TypeScript compiler (tsc) and compile the TypeScript files based on the configuration in the tsconfig.json file. The compiled JavaScript files will be placed in the "dist" directory.

### Run the TypeScript compiler (tsc) command followed by the file name(s) or glob pattern(s) of the TypeScript file(s) you want to compile. For example, if you want to compile a single file named app.ts, you can run:

npx tsc app.ts

### If you want to compile multiple files or all TypeScript files in a directory, you can use a glob pattern. For example, to compile all TypeScript files in the "src" directory, you can run:

npx tsc src/\*.ts

The npx command allows you to run the locally installed tsc executable.

By default, the TypeScript compiler will look for a tsconfig.json file in the current directory and use the configuration options specified in that file. If your tsconfig.json file is located in a different directory or has a different name, you can specify its path using the --project flag. For example:

npx tsc --project path/to/tsconfig.json

Replace "path/to/tsconfig.json" with the actual path to your tsconfig.json file.

The TypeScript compiler will generate the corresponding JavaScript files based on the configuration in your tsconfig.json file. By default, it will place the generated JavaScript files in the output directory specified by the "outDir" option in the tsconfig.json file. If no "outDir" option is specified, it will place the JavaScript files in the same directory as the corresponding TypeScript files.

Run the JavaScript code: Once the TypeScript code is compiled, you can run the resulting JavaScript code using a suitable JavaScript runtime environment (e.g., a web browser or Node.js). For example, if you have a main.js file in the "dist" directory, you can run it using Node.js:

node dist/main.js

Make sure to adjust the file name and location based on your project's structure.

### If the TypeScript compiler (tsc) is not generating the JavaScript files in the specified output directory ("dist" folder), there could be a few reasons for this. Here are some troubleshooting steps you can follow:

<br/>

Verify the outDir option in tsconfig.json: Double-check that you have correctly specified the outDir option in your tsconfig.json file. Make sure the value is set to "dist" as intended. For example:

{
"compilerOptions": {
"outDir": "dist"
}
}

1. Check the tsconfig.json file location: Ensure that the tsconfig.json file is located in the project root directory and is being picked up by the TypeScript compiler. Run the npx tsc --showConfig command to confirm that the compiler is reading the correct tsconfig.json file.

2. Run tsc without specifying file names: If you are running tsc without specifying any file names or glob patterns, it will compile all TypeScript files in the project based on the configuration in tsconfig.json. Make sure you are executing the tsc command in the project root directory.

3. Clean the output directory: If you have previously compiled the TypeScript files and the JavaScript files were not placed in the "dist" folder as expected, there might be remnants of the old build. Remove any existing JavaScript files from the "dist" folder manually and try recompiling.

4. Verify file paths and names: Ensure that the TypeScript files you want to compile are located in the correct directory (e.g., "src") relative to the tsconfig.json file. Double-check the file names and extensions to ensure they match the file names specified in the tsc command.

5. Check for error messages: Look for any error messages or warnings displayed by the TypeScript compiler. If there are errors in your TypeScript code, the compiler may abort the compilation process, and the JavaScript files may not be generated. Address any compilation errors and try compiling again.

6. Update TypeScript version: If you have recently upgraded TypeScript or are using a different version, ensure that your project and configuration are compatible with that version. Verify that the installed TypeScript version matches the one specified in your package.json file.
