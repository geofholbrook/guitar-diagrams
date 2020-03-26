import { IFingeredNote } from '@musicenviro/ui-elements'

export type SeventhType = 'Augmented' | 'Major' | 'Dominant' | 'MajorMinor' | 'Minor' |  'HalfDiminished' | 'Diminished'

interface IChord {
    fingeredNotes: IFingeredNote[];
    type: SeventhType;
    relativeTonicPosition: number;
    strings: number[];
}

