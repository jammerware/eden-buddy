class GeneralNote {
    note: string;
}

class PositionNote extends GeneralNote {
    positions: string[];
}

class PositionTagNote extends GeneralNote {
    positionTags: string[];
}

export type Note = GeneralNote | PositionNote | PositionTagNote;