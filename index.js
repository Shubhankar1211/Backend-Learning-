//const path = require("path");  //  path is internal library
//console.log(__dirname);
//console.log(__dirname + "/index.js"); // this can also do same thing join two paths  or contacination
//console.log(path.join(__dirname,"index.js")) // path join help to join multiple path 


// whenever we intall an external lib in our system it directly became the dependecies and also automatically added to json file
// major.minor.patch -:"chalk": "^5.4.1" so here 5 is major 4 is minor nad 1 is patch
// if i changes major things bump the major version i some minor yo can bump minor and if fixing soome bugs you have to bum patch version
// ^ it is called carret this help in automatically update the version whenever it lauched you simply have to delete the node modules and just npm install it install latest version




/* one more assignment you have given a file have to return how many words in that file
const fs = require("fs");
function main(file){
    fs.readFile(file ,"utf-8",(err, data)=>{
        let count =0;
        for(let i = 0; i< data.length ; i++){
            if(data[i] === " "){
                count++;
            }
        }
        console.log(count+1);
    })
}

main(process.argv[2]);  it will says that you have to take argumnet 2 in it  // ndoe index.js /Users/shubhankar/a.txt
*/








// commaneder is an external library which helps in writing own clis(command line interface)

// create a commamnd line interface that lets the user specify a file path  and the nodejs process the counts the number if words inside it 
// input - node index,js /user/lirat/file.txt
// output you have 10 words in this file
// example  like node index.js here node in a cli and index.js is a argument and main task is that it run the index.js file 
// node --experimental_modules index.mjs // here node is a cli --experimental-modules is a option index.js is script file someitmes it act argument asnd we also add argument after the script file
// same i have to make a cli

// this is the original code of cli 
const fs = require('fs');
const {Command} = require('commander'); // simple here command is a class
const program = new Command();

// hrer is simply give the name ,description and version
program
   .name('counter') 
   .description('CLI to do file based Tasks')
   .version('0.8.0');

program
   .command('count')
   .description('count the number of words in the files')
   .argument('<file>','file to count')
   .action((file)=>{ // action Runs a function when command is called
    fs.readFile(file, 'utf-8' ,(err ,data)=>{ // we use utf-8 It tells Node.js to read the file as text, not as raw binary data. It tells Node.js to read the file as text, not as raw binary data.
        if(err){
           console.log(err)
        }
        else{
            const words = data.split(' ').length;  //it is a sipple syntax how to find the number of words // like above we have write the functional call to find the words in the number
            console.log(`there are ${words} words in ${file}`)
        }
    })
})
program.parse();






// this is the improve version of the above code
const fs = require('fs');
const { Command } = require('commander');
const program2 = new Command();

program2
  .name('counter')
  .description('CLI to do file based Tasks')
  .version('1.0.0');

program2
  .command('count')
  .description('Count words, lines, and characters in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(`❌ Could not read file: ${file}`);
        console.error(err.message);
        return;
      }

      const words = data.trim().split(/\s+/).filter(Boolean).length;
      const lines = data.split('\n').length;
      const characters = data.length;

      console.log(`\n📄 ${file} contains:\n---------------------------`);
      console.log(`📝 Words      : ${words}`);
      console.log(`📚 Lines      : ${lines}`);
      console.log(`🔠 Characters : ${characters}\n`);
    });
  });

program2.parse();

// how to make our official cli 

// by writing this into the terminal wordscli count_sentences /user/shubhankar/node/a.txt
//vi a.txt
//alias worldcli ="node index.js"
//worldcli -h