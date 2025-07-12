import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer.prompt([
    {
        message: "Type in you URL",
        name:"URL",
    },
])
.then((answers) => {
    const url= answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    var svg_string = qr.imageSync('qr_image', { type: 'png' });
})
.catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
})
