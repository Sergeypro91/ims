export interface LimitsProps {
    timeToggler: () => void;
    limitTimeIsOff: boolean;
    timeFromFunc: (payload: string) => void;
    limitTimeFrom: string;
    timeToFunc: (payload: string) => void;
    limitTimeTo: string;
    passToggler: () => void;
    limitPassIsOff: boolean;
    passCountFunc: (payload: string) => void;
    limitPassCount: string;
    minPass?: number;
    maxPass?: number;
    clearTimeLimit: () => void;
    clearPassLimit: () => void;
}
