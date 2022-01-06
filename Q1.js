const fs = require('fs');

const user = {
    "Name": "John Doe",
    "Age": 35,
    "City": "Collingwood"
};

const data = JSON.stringify(user);

fs.writeFile('myfile.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("File created.");
});


const infile = JSON.parse(fs.fileReadSync("myfile.json").toString())
