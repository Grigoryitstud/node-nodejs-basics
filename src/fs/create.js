import * as fs from 'fs';
import * as path from 'path';

const pathFresh = path.resolve( "./files/fresh.txt");

export const create = async () => {
    fs.access(pathFresh, (error) => {
        if (error) {
            fs.appendFile(pathFresh, "I am fresh and young", err => {
                if (err) {
                    throw err
                }
            })
        } else {
            console.log("Error: FS operation failed");
        }
    });
    // if (pathFresh.isFile()) {
    //     throw "Error: FS operation failed"
    // }else    
    
};
create ()