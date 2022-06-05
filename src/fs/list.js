import * as fs from 'fs';
import * as path from 'path';

const pathFile = path.resolve("./files");

export const list = async () => {
    fs.access(pathFile, (err) => {
        if (err) {
            console.log("Error: FS operation failed");
        } else {
            fs.readdir(pathFile, (err, data) => {
                if (err) {
                    throw err
                }
                console.log(data);
            })
        }
    });
};
list();