export interface IdentifiersLimitsTime {
    limitTimeFrom: string;
    limitTimeTo: string;
}

export interface WizardLimits {
    limitTimeIsOff: boolean;
    limitPassIsOff: boolean;
    limitTime: IdentifiersLimitsTime;
    limitPass: string;
}

export type AccesPatterns = Array<AccesPattern>;

export interface AccesPattern {
    id: number;
    uuid: string;
    name: string;
    description: string;
    zoneInName: string;
    zoneOutName: string;
}

export type Newdentifiers = Array<Newdentifier>;

export interface Newdentifier {
    uuid?: number;
    type: number;
    content: string;
    index?: string;
    status: number;
    identificatorClass: number;
    validFrom?: string;
    validTo?: string;
    passCount?: number;
    deleted: boolean;
    personId: string;
    personName: string;
}

export interface IdentifiersState {
    type: string;
    accesPatterns: AccesPatterns;
    selectedAccesPatterns: AccesPatterns;
    limits: WizardLimits;
}

export const IDENTIFIERS_GENERAL_TYPE = 'IDENTIFIERS_GENERAL_TYPE';
export const IDENTIFIERS_GENERAL_ACCES_PATERNS = 'IDENTIFIERS_GENERAL_ACCES_PATERNS';
export const IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS = 'IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS';
export const IDENTIFIERS_GENERAL_LIMIT_TIME_FROM = 'IDENTIFIERS_GENERAL_LIMIT_TIME_FROM';
export const IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON = 'IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON';
export const IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON = 'IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON';
export const IDENTIFIERS_GENERAL_LIMIT_TIME_TO = 'IDENTIFIERS_GENERAL_LIMIT_TIME_TO';
export const IDENTIFIERS_GENERAL_LIMIT_PASS = 'IDENTIFIERS_GENERAL_LIMIT_PASS';
export const IDENTIFIERS_GENERAL_CLOSE = 'IDENTIFIERS_GENERAL_CLOSE';

interface IdentifiersType {
    type: typeof IDENTIFIERS_GENERAL_TYPE;
    payload: string;
}

interface IdentifiersAccesPatterns {
    type: typeof IDENTIFIERS_GENERAL_ACCES_PATERNS;
    payload: AccesPatterns;
}

interface IdentifiersSelectedAccesPatterns {
    type: typeof IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS;
    payload: AccesPatterns;
}

interface IdentifiersLimitTimeIsOn {
    type: typeof IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON;
}

interface IdentifiersLimitPassIsOn {
    type: typeof IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON;
}

interface IdentifiersLimitTimeFrom {
    type: typeof IDENTIFIERS_GENERAL_LIMIT_TIME_FROM;
    payload: string;
}

interface IdentifiersLimitTimeTo {
    type: typeof IDENTIFIERS_GENERAL_LIMIT_TIME_TO;
    payload: string;
}

interface IdentifiersLimitPass {
    type: typeof IDENTIFIERS_GENERAL_LIMIT_PASS;
    payload: string;
}

interface IdentifiersClose {
    type: typeof IDENTIFIERS_GENERAL_CLOSE;
}

export type IdentifiersActions =
    | IdentifiersType
    | IdentifiersAccesPatterns
    | IdentifiersSelectedAccesPatterns
    | IdentifiersLimitTimeIsOn
    | IdentifiersLimitPassIsOn
    | IdentifiersLimitTimeFrom
    | IdentifiersLimitTimeTo
    | IdentifiersLimitPass
    | IdentifiersClose;