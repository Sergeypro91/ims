export interface LimitsProps {
    timeFromFunc: (payload: string) => void;
    limitTimeFrom: string;
    timeToFunc: (payload: string) => void;
    limitTimeTo: string;
    passCountFunc: (payload: string) => void;
    limitPassCount: string;
    clearTimeLimit: () => void;
    clearPassLimit: () => void;
}
