/*
:-  console.log(__dirname);
    console.log(__filename);
    console.log(module); To get details about current module.

:-  Clear - command to clear/clean terminal. 

:-  ctrl + c - To stop setInterval() function

:-  Import and Export Modules
    https://www.geeksforgeeks.org/import-and-export-in-node-js/

:-  Types of Modules 
    https://www.geeksforgeeks.org/node-js-modules/
    https://data-flair.training/blogs/nodejs-modules/

:-  OS module

:-  Path module

:-  FS module

*/

const http = require("http");
const lodash = require("lodash");
// const bootstrap = require("bootstrap");

const arr = [1,[2,[3,[4,[5]]]]];
console.log(lodash.flattenDeep(arr));

