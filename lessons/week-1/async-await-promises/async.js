const fs = require("fs");

function onDone(data) {
  console.log(data);
}

// Async Code without Promises

function demoReadFile(callback) {
  fs.readFile("a.txt", "utf-8", function (_, data) {
    callback(data);
  });
}

demoReadFile(onDone);

// Async Code with Promises

function readFilePromise() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (_, data) {
      resolve(data);
    });
  });
}

readFilePromise().then(onDone);

/* 
 Promises usually have three states
 => pending - The state where the async function is running and doing its task.
 => resolved - Where the async task is already done and promise is having value.
 => rejected -
*/

// Async & Await Syntax

async function main() {
  let value = await readFilePromise();
  onDone(value);
}

main();
