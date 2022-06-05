import * as fs from 'fs';
import * as path from 'path';

const pathWrite = path.resolve("./files/fileToWrite.txt");

export const write = async () => {
    const writeStream = fs.createWriteStream(pathWrite)
    process.stdin.on('data', data => {
        writeStream.write(data)
        // writeStream.on(data, (chunk) => {
        //     writeStream.write(chunk)
        // })
        process.exit();
    });
    // const readStream = fs.createReadStream(pathFile)
    // const writeStream = fs.createWriteStream(pathWrite)
    // readStream.on('data', (chunk) => {
    //     process.stdin.write(chunk)
    // })
};
write();