import {
    StaffEmployeesState,
    StaffEmployeesActions,
    GET_STAFF_EMPLOYEES,
    STAFF_EMPLOYEES_SELECTED_ROW,
    STAFF_EMPLOYEES_TOGGLE_SIDEBAR,
    STAFF_EMPLOYEES_TOGGLE_BAR,
    STAFF_EMPLOYEES_QUICK_FILTER,
    STAFF_EMPLOYEES_SETUP_WIZARD_TYPE,
    STAFF_EMPLOYEES_SETUP_WIZARD_KEY,
    STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO,
    STAFF_EMPLOYEES_SETUP_WIZARD_QR,
    STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS,
    STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE
} from './staffEmployeesTypes';

const initialState: StaffEmployeesState = {
    employeesTable: [],
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    quickFilter: false,
    identifiersWizard: {
        type: '',
        key: '',
        photo: null,
        qr: null,
        accesZones: [],
        limits: {
            limitTimeIsOn: true,
            limitPassIsOn: true,
            limitTime: {
                limitTimeFrom: '',
                limitTimeTo: ''
            },
            limitPass: ''
        }
    }
};

const StaffEmployees = (state = initialState, action: StaffEmployeesActions): StaffEmployeesState => {
    switch (action.type) {
        case GET_STAFF_EMPLOYEES:
            return {
                ...state,
                employeesTable: action.payload
            };
        case STAFF_EMPLOYEES_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case STAFF_EMPLOYEES_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case STAFF_EMPLOYEES_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case STAFF_EMPLOYEES_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_TYPE:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    type: action.payload
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_KEY:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    key: action.payload
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    photo: action.payload
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_QR:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    qr: action.payload
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    accesZones: action.payload
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    limits: {
                        ...state.identifiersWizard.limits,
                        limitTimeIsOn: !state.identifiersWizard.limits.limitTimeIsOn
                    }
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    limits: {
                        ...state.identifiersWizard.limits,
                        limitPassIsOn: !state.identifiersWizard.limits.limitPassIsOn
                    }
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    limits: {
                        ...state.identifiersWizard.limits,
                        limitTime: {
                            ...state.identifiersWizard.limits.limitTime,
                            limitTimeFrom: action.payload
                        }
                    }
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    limits: {
                        ...state.identifiersWizard.limits,
                        limitTime: {
                            ...state.identifiersWizard.limits.limitTime,
                            limitTimeTo: action.payload
                        }
                    }
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    limits: {
                        ...state.identifiersWizard.limits,
                        limitPass: action.payload
                    }
                }
            };
        case STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE:
            return {
                ...state,
                identifiersWizard: {
                    ...state.identifiersWizard,
                    type: '',
                    key: '',
                    photo: null,
                    qr: null,
                    accesZones: [],
                    limits: {
                        limitTimeIsOn: true,
                        limitPassIsOn: true,
                        limitTime: {
                            limitTimeFrom: '',
                            limitTimeTo: ''
                        },
                        limitPass: ''
                    }
                }
            };
        default:
            return state;
    }
};

export default StaffEmployees;
