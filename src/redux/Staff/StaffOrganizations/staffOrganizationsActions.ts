import {
    StaffOrganizationsActions,
    Organization,
    STAFF_ORGANIZATIONS_SELECTED_ROW,
    STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR,
    STAFF_ORGANIZATIONS_TOGGLE_BAR
} from './staffOrganizationsTypes';

export const staffOrganizationsSelectedRow = (payload: Organization): StaffOrganizationsActions => {
    return {
        type: STAFF_ORGANIZATIONS_SELECTED_ROW,
        payload
    };
};

export const staffOrganizationsToggleSidebar = (): StaffOrganizationsActions => ({
    type: STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR
});

export const staffOrganizationsToggleToggleBar = (): StaffOrganizationsActions => ({
    type: STAFF_ORGANIZATIONS_TOGGLE_BAR
});
