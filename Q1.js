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
    console.log("JSON data is saved.");
});


fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    const infile = JSON.parse(data.toString());

    console.log(infile);
});
