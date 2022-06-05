import * as fs from 'fs';
import * as path from 'path';
    
const pathToDelete = path.resolve( "./files/fileToRemove.txt");

export const remove = async () => {
        fs.access(pathToDelete, (err) => {
            if (err) {
                console.log("Error: FS operation failed");
            } else {
                fs.unlink(pathToDelete, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`remove - ${path.basename(pathToDelete)} completed`);
                    }
                });
            }
        });
    
};
remove ()