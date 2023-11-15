/* 1. Use the inquirer npm package to get user input.*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
.prompt([{
    message: "Type in your URL: ", 
    name: "URL"
}])
    .then((answers) => {
    //   console.log(answers); check first if you get an answer
    const url = answers.URL;
    /*2. Use the qr-image npm package to turn the user entered URL into a QR code image.*/
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            
        })
})
.catch((error) => {
if (error.isTtyError) {
   //Prompt couldnt rendered in environment
} else {
   //soemthing else happens that is wrong
}
});

