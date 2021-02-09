/**
 * Positions list
 */
export type PositionsList = Array<Position>;

/**
 * Position
 */
export interface Position {
    positionUuid: string;
    posName: string;
    orgUuid: string;
    shortName: string;
    legalName: string;
    deleted: number;
    deletedStr: string;
    creationDate: string;
    externalId: string;
    emplCount: number;
}

/**
 * Add position params
 */
export interface AddPositionParams {
    posName: string;
    orgUuid: string;
}

/**
 * Edit position params
 */
export interface EditPositionParams extends AddPositionParams {
    positionUuid: string;
}
