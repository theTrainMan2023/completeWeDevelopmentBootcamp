//NPM - Node Package Manager
//Place to collects modules poeple has build for Node

//Community Tool Library
//Open Source and search all the pacakages other developers has created
//Preloaded with Node
//1. npm init - 
//1.1 This creates a package.json file
//1.2 Create Package name [learning-npm]
//1.3 Version [press enter]
//1.4 descrition [be descriptive but concise]
//1.5 entry point [whatever js file is saved in folder]
//1.6 test command [leave empty]
//1.7 git repository  [leave empty]
//1.8 keywords  [leave empty]
//1.9 author [fill in your name]
//1.10 license: [leave as ISC]
//1.11 Is this ok? (yes) [type - y for yes]
//1.12 See a package.json file is created in your folder
//1.13 This consists of Key Value Pairs that was created based on your inputs.

//No you can INSTALL NPM Packages
//1. npm install <Something>
//2. See npmjs.com

//INSTALLING and npm PAckages
//1. npm i < plus the name of package>
//2. You can install more than one at the same time with a space inbetween
//3. node_modules folder is created with that specific index.js file and the code needed to utilise the package

/*How to use the PACKAGE as per the NPMJS.com Website*/
// var generateName = require("sillyname");
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

/*Version 12 now allows to use the import function with ECMS*/
// import generateName from "sillyname"
// var sillyName= generateName();
// console.log(`My name is ${sillyName}.`);

/*Super Hero*/
import superheroes from "superheroes";
const name = superheroes.random();

console.log(`I am ${name}, the mighest Super Hero Ever to Live!`);

