import { IChord, SeventhType } from '../@types';
import * as _ from 'lodash'

const pitchSets = {
    'Major': [0,4,7,11],
    'Dominant': [0,4,7,10],
    'Minor': [0,3,7,10],
    'Minor/Major': [0,4,8,11],
    'Augmented': [0,4,8,11],
    'Half-Diminished': [0,3,6,10],
    'Diminished': [0,3,6,9],
}

const stringRanges = [
    [0, 4],
    [5, 9],
    [10, 14],
    [15, 18],
    [19,23],
    [24,28]
]

const stringSets = [
    [0,1,2],
    [1,2,3],
    [2,3,4],
    [3,4,5],
    [0,1,2,3,4,5],
]

function rotatePitchSet(pitchSet: number[], rotation: number): number[] {
    return pitchSet.map(p => (p + rotation) % 12)
}

function pitchesForStrings(strings: number[], pitchSet: number[]): number[] {
    const result: number[] = []

    const min = stringRanges[strings[0]][0];
    const max = stringRanges[_.last(strings) as number][1];

    for (let k = min; k <= max; k++) {
        if (pitchSet.includes(k % 12)) result.push(k)
    }

    return result
}

export function calculateAllChords(): IChord[] {
    const result: IChord[] = []

    Object.entries(pitchSets).forEach(entry => {
        const [type, set] = entry as [SeventhType, number[]]
        for (let strings of stringSets) {
            for (let pos = 0; pos <= 11; pos++) {
                const rotated = rotatePitchSet(set, pos)
                const pitches = pitchesForStrings(strings, rotated)
                result.push({
                    fingeredNotes: pitches.map(pitch => ({
                        semitonesFromBase: pitch,
                        isTonic: pitch % 12 === pos
                    })),
                    type,
                    strings,
                    relativeTonicPosition: pos
                })
            }
        }
    })

    return result
}
