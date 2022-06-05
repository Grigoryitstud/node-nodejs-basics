import * as fs from 'fs';
import * as path from 'path';

const pathToRead = path.resolve("./files/fileToRead.txt");

export const read = async () => {
    fs.access(pathToRead, (err) => {
        if (err) {
            console.log("Error: FS operation failed");
        } else {
            fs.readFile(pathToRead, 'utf8', (err, data) => {
                if (err) throw err;               
              
                console.log(data);
              });
        }
    });
};
read();