import * as fs from 'fs';
import * as path from 'path';

const pathFile = path.resolve("./files");
const pathFiles_copy = path.resolve("./files_copy");
const fsPromises = fs.promises;



export const copy = async () => {

    fs.stat(pathFile, function (err, stats) {
        if (err) {
            console.log("Error: FS operation failed");
        }
        else {
            fs.access(pathFiles_copy, (error) => {
                if (error) {
                    fs.readdir(pathFile, (err, data) => {
                        if (err) {
                            throw err
                        }
                        fsPromises.mkdir(pathFiles_copy).then(function () {
                            console.log('Directory created successfully');
                        }).catch(function () {
                            console.log('failed to create directory');
                        });
                        console.log(data);
                        data.forEach(file => {
                            fs.copyFile(pathFile + '/' + file, pathFiles_copy + '/' + file, err => {
                                if (err) throw err;
                                console.log('Файл успешно скопирован' + ' ' + path.parse(file).name);
                            });
                        }
                        )
                    })
                } else {
                    console.log("Error: FS operation failed");
                }
            });
        }
    });
};
copy();