const fs = require("fs");

function readTheFile(sendTheFinalValueHere){

  fs.readFile(readFile, "utf-8", function(err,data){
    sendTheFinalValueHere(data);
    if (err) {
        reject(err);
        return;
    }
  })
}

function readFile(filename){
  //read the file and return its value
  return new Promise(readTheFile)
}

const p = readFile("a.text");

function callback(contents){
  console.log(contents);
}
p.then(callback)