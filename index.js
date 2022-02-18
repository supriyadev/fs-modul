const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//Create file and read and write

// writeFile function with filename, content and callback function
// fs.writeFile("student.json", "Learn Node FS module", function (err) {
//   if (err) throw err;
//   console.log("File is created successfully.");
// });

// appendFile function with filename, content and callback function
// fs.appendFile('newfile_2.txt', 'Learn Node FS module', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });

// fs.open('newfile_3.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('File is opened in write mode.');
//   });

// const content = "Some content!";
//their are some flags
// fs.writeFile("student.json", { flag: "w+" }, (err) => {
//   // const stats = fs.statSync('test.txt')
//   if (err) {
//     console.error(err);
//     return;
//   }
// file written successfully
// });

// r+ open the file for reading and writing
// w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if it does not exist
// a open the file for writing, positioning the stream at the end of the file. The file is created if it does not exist
// a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if it does not exist

// const notes = "/users/joe/notes.txt";

// console.log(path.dirname(notes)); // /users/joe
// console.log(path.basename(notes)); // notes.txt
// console.log(path.extname(notes)); // .txt

// console.log(path.basename(notes, path.extname(notes))); //notes

// const name = "joe";
// console.log(path.join("/", "users", name, "notes.txt"));

// read file simple text
// fs.readFile('test.txt', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })

//delete file
// fs.unlink('abc.json', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// make directory
// fs.mkdir(path.join(__dirname, 'test'), { recursive: true },(err,files) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });

// check if file exist
// fs.access("test", function(error) {
//     if (error) {
//       console.log("Directory does not exist.")
//     } else {
//       console.log("Directory exists.")
//     }
//   })

// Rename folder,file
//   fs.rename('foldername', 'Users', err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//
//   })

//remove folder
// const dir ='test/user/';
// fs.rm(dir, { recursive: true }, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log(`${dir} is deleted!`);
// });

// fs.readFile('student.json', (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

// console.log('This is after the read call');

// source to copy content
const src = "student.json";
// destination for copied content
const dest = "tst.json";
fs.copyFile(src, dest, (error) => {
  // incase of any error
  if (error) {
    console.error(error);
    return;
  }

  console.log("Copied Successfully!");
});

const AdmZip = require("adm-zip");

async function createZipArchive() {
  try {
    const zip = new AdmZip();
    const outputFile = "Users.zip";
    zip.addLocalFolder("./test");
    zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}

createZipArchive();
