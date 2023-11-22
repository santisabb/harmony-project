import crypto from 'node:crypto'

export class Record {
    constructor(
        public recordName: string,
        public artists: string[],
        public songs: string[],
        public releaseDate: string,
        public duration: number,
        public recordImage: string,
        public id = crypto.randomUUID()
    ) {}
}