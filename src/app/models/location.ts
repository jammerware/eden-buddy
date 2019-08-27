export interface GeneralLocation {
    location: string;
}

export interface PositionTagLocation extends GeneralLocation {
    positionTags: string[];
}

export interface PositionLocation extends GeneralLocation {
    positions: string[];
}