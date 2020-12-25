import fakeData from 'App/components/pages/Staff/StaffOrganizations/fakeData';
import {
    StaffOrganizationsState,
    StaffOrganizationsActions,
    STAFF_ORGANIZATIONS_SELECTED_ROW,
    STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR,
    STAFF_ORGANIZATIONS_TOGGLE_BAR
} from './staffOrganizationsTypes';

const initialState: StaffOrganizationsState = {
    organizationsTable: fakeData,
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false
};

const StaffOrganizationsReducer = (
    state = initialState,
    action: StaffOrganizationsActions
): StaffOrganizationsState => {
    switch (action.type) {
        case STAFF_ORGANIZATIONS_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case STAFF_ORGANIZATIONS_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default StaffOrganizationsReducer;
