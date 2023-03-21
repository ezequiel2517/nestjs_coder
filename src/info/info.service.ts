import { Injectable } from '@nestjs/common';
import * as os from "os";
import * as yargs from 'yargs';

@Injectable()
export class InfoService {
    getInfo() {
        return {
            args: yargs.argv,
            so: process.platform,
            version: process.version,
            execPath: process.execPath,
            pid: process.pid,
            src: process.cwd(),
            cpus: os.cpus().length
        }
    }
}
