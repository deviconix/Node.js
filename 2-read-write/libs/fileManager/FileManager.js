import EventEmmiter from 'events';
import { checkFile } from '../path/checkFile.js';
import { createPathJoin } from '../../libs/path/createPathJoin.js'
import fs from 'fs';
import path from 'path';

export class FileManager extends EventEmmiter {

    constructor(FlagRewrite = false, nameEmmit = 'rewrite') {
        super();
        this.setFlagRewrite(FlagRewrite);
        this.setNameEmmit(nameEmmit);
    }

    setNameEmmit(nameEmmit) {
        this.nameEmmit = nameEmmit;
    }

    setLocalPathSave(sunPath) {
        this.subPath = sunPath;
    }

    setFlagRewrite(flag) {
        this.flagRewrite = flag;
    }

    getFlagRewrite() {
        return this.flagRewrite;
    }

    save(fileName, data) {
        //const pathFile = createPathJoin(fileName);
        const subPath = this.subPath;
        const pathFile = path.join(createPathJoin(subPath), fileName);
        // check isFile
        const isFile = checkFile(pathFile);
        const isRewrite = this.getFlagRewrite();
        // ша (isCheck and !FlagRewrite) emit('rewrite',fileName);return false;
        if (!isRewrite && isFile) {
            // send warning
            this.emit(this.nameEmmit, pathFile)
        } else {
            fs.writeFile(pathFile, data, function (error) {
                if (error) {  // если ошибка
                    return console.log(error);
                }
                console.log(`Файл ${fileName} - успешно записан`);
            });
        }


        //console.log(`isFile: ${ isFile } isRewrite: ${ isRewrite }`);
    }
}