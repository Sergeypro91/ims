import {
    IdentifiersState,
    IdentifiersActions,
    IDENTIFIERS_GENERAL_TYPE,
    IDENTIFIERS_GENERAL_ACCES_PATERNS,
    IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS,
    IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON,
    IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON,
    IDENTIFIERS_GENERAL_LIMIT_TIME_FROM,
    IDENTIFIERS_GENERAL_LIMIT_TIME_TO,
    IDENTIFIERS_GENERAL_LIMIT_PASS,
    IDENTIFIERS_GENERAL_CLOSE
} from './IdentifiersGeneralTypes';

const initialState: IdentifiersState = {
        type: '',
        accesPatterns: [],
        selectedAccesPatterns: [],
        limits: {
            limitTimeIsOff: true,
            limitPassIsOff: true,
            limitTime: {
                limitTimeFrom: '',
                limitTimeTo: ''
            },
            limitPass: ''
        }
};

const IdentifiersGeneral = (state = initialState, action: IdentifiersActions): IdentifiersState => {
    switch (action.type) {
        case IDENTIFIERS_GENERAL_TYPE:
            return {
                ...state,
                type: action.payload
            };
        case IDENTIFIERS_GENERAL_ACCES_PATERNS:
            return {
                ...state,
                accesPatterns: action.payload
            };
        case IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS:
            return {
                ...state,
                selectedAccesPatterns: action.payload
            };
        case IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON:
            return {
                ...state,
                    limits: {
                        ...state.limits,
                        limitTimeIsOff: !state.limits.limitTimeIsOff,
                        limitTime: {
                            ...state.limits.limitTime,
                            limitTimeFrom: new Date().toJSON().slice(0, 10),
                            limitTimeTo: new Date().toJSON().slice(0, 10)
                        }
                    }
            };
        case IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON:
            return {
                ...state,
                    limits: {
                        ...state.limits,
                        limitPassIsOff: !state.limits.limitPassIsOff,
                        limitPass: "1"
                    }
            };
        case IDENTIFIERS_GENERAL_LIMIT_TIME_FROM:
            return {
                ...state,
                    limits: {
                        ...state.limits,
                        limitTime: {
                            ...state.limits.limitTime,
                            limitTimeFrom: action.payload
                        }
                    }
            };
        case IDENTIFIERS_GENERAL_LIMIT_TIME_TO:
            return {
                ...state,
                    limits: {
                        ...state.limits,
                        limitTime: {
                            ...state.limits.limitTime,
                            limitTimeTo: action.payload
                        }
                    }
            };
        case IDENTIFIERS_GENERAL_LIMIT_PASS:
            return {
                ...state,
                    limits: {
                        ...state.limits,
                        limitPass: action.payload
                    }
            };
        case IDENTIFIERS_GENERAL_CLOSE:
            return {
                ...state,
                    type: '',
                    accesPatterns: [],
                    limits: {
                        limitTimeIsOff: true,
                        limitPassIsOff: true,
                        limitTime: {
                            limitTimeFrom: '',
                            limitTimeTo: ''
                        },
                        limitPass: ''
                    }
            };
        default:
            return state;
    }
};

export default IdentifiersGeneral;
