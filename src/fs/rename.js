import * as fs from 'fs';
import * as path from 'path';

const pathWrong = path.resolve("./files/wrongFilename.txt");
const pathProper = path.resolve("./files/properFilename.md");



export const rename = async () => {
    fs.access(pathProper, (err) => {
        if (err) {
            fs.stat(pathWrong, function (err, stats) {
                if (err) {
                    console.log("Error: FS operation failed");
                } else {
                    fs.readdir(pathWrong, (err, file) => {
                        fs.rename(pathWrong, pathProper, err => {
                            if (err) throw err;
                            console.log(`rename - ${path.basename(pathProper)} completed!`);
                        });
                    });
                }
            });

        }
        else {
            console.log("Error: FS operation failed");
        }
    });
}
rename();