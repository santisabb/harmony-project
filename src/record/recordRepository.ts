import { Repository } from "../shared/repository.js"
import { Record } from "./recordEntity.js"

const records = [
    new Record(
        'FAFA',
        ['El Doctor'],
        ['Intro',
        'Jesus',
        'No Esta Vez',
        'Coco',
        'Ni Makri Ni Kirchner',
        'Bullying',
        'Vida Gangsta',
        'El Triple',
        'Cerca',
        'Freestyle Fumando',
        'One Direction',
        'Dame un Beso',
        'Mias',
        'El Aval',
        'Me Voy'],
        '15/10/2021',
        49.55,
        'src de la imagen'
    )
]

export class RecordRepository implements Repository<Record>{
    findAll(): Record[] | undefined {
        return records
    }
    findOne(i: { id: string; }): Record | undefined {
        return records.find((record) => record.id === i.id)
    }
    add(i: Record): Record | undefined {
        records.push(i)
        return i
    }
    update(i: Record): Record | undefined {
        const recordIdx = records.findIndex((record) => record.id === i.id)

        if (recordIdx !== -1){
            records[recordIdx] = { ...records[recordIdx], ...i}
        }
        return records[recordIdx]
    }
    delete(i: { id: string; }): Record | undefined {
        const recordIdx = records.findIndex((record) => record.id === i.id)

        if(recordIdx !== -1){
            const deletedRecord = records[recordIdx]
            records.splice(recordIdx, 1)
            return deletedRecord
        }
    }
}