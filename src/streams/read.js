import * as fs from 'fs';
import * as path from 'path';

const pathFile = path.resolve("./files/fileToRead.txt");


export const read = async () => {
    const readStream = fs.createReadStream(pathFile)
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};
read();
