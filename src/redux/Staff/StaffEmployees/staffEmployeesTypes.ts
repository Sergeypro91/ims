export interface TableItem {
    uuid: string;
    name: string;
    occupation: null;
}

export interface wizardLimitsTime {
    limitTimeFrom: string;
    limitTimeTo: string;
}

export interface wizardLimits {
    limitTimeIsOn: boolean;
    limitPassIsOn: boolean;
    limitTime: wizardLimitsTime;
    limitPass: string;
}

export interface Wizard {
    type: string;
    key: string;
    photo: string | ArrayBuffer | null;
    qr: string | ArrayBuffer | null;
    accesZones: string[];
    limits: wizardLimits;
}

export type StaffEmployees = Array<TableItem>;

export interface StaffEmployeesState {
    employeesTable: StaffEmployees;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    quickFilter: boolean;
    identifiersWizard: Wizard;
}

export const GET_STAFF_EMPLOYEES = 'GET_STAFF_EMPLOYEES';
export const STAFF_EMPLOYEES_SELECTED_ROW = 'STAFF_EMPLOYEES_SELECTED_ROW';
export const STAFF_EMPLOYEES_TOGGLE_SIDEBAR = 'STAFF_EMPLOYEES_TOGGLE_SIDEBAR';
export const STAFF_EMPLOYEES_TOGGLE_BAR = 'STAFF_EMPLOYEES_TOGGLE_BAR';
export const STAFF_EMPLOYEES_QUICK_FILTER = 'STAFF_EMPLOYEES_QUICK_FILTER';
export const STAFF_EMPLOYEES_SETUP_WIZARD_TYPE = 'STAFF_EMPLOYEES_SETUP_WIZARD_TYPE';
export const STAFF_EMPLOYEES_SETUP_WIZARD_KEY = 'STAFF_EMPLOYEES_SETUP_WIZARD_KEY';
export const STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO = 'STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO';
export const STAFF_EMPLOYEES_SETUP_WIZARD_QR = 'STAFF_EMPLOYEES_SETUP_WIZARD_QR';
export const STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES = 'STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES';
export const STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM = 'STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM';
export const STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON = 'STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON';
export const STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON = 'STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON';
export const STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO = 'STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO';
export const STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS = 'STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS';
export const STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE = 'STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE';

interface StaffEmployeesData {
    type: typeof GET_STAFF_EMPLOYEES;
    payload: StaffEmployees;
}

interface StaffEmployeesSelectTableRow {
    type: typeof STAFF_EMPLOYEES_SELECTED_ROW;
    payload: TableItem;
}

interface StaffEmployeesToggleSidebar {
    type: typeof STAFF_EMPLOYEES_TOGGLE_SIDEBAR;
}

interface StaffEmployeesToggleBar {
    type: typeof STAFF_EMPLOYEES_TOGGLE_BAR;
}

interface StaffEmployeesToggleQuickFilter {
    type: typeof STAFF_EMPLOYEES_QUICK_FILTER;
}

interface StaffEmployeesWizarIdetifiersType {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_TYPE;
    payload: string;
}

interface StaffEmployeesWizarIdetifiersKey {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_KEY;
    payload: string;
}

interface StaffEmployeesWizarIdetifiersPhoto {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO;
    payload: string | ArrayBuffer | null;
}

interface StaffEmployeesWizarIdetifiersQr {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_QR;
    payload: string | ArrayBuffer | null;
}

interface StaffEmployeesWizarAccesZones {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES;
    payload: string[];
}

interface StaffEmployeesWizarLimitTimeIsOn {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON;
}

interface StaffEmployeesWizarLimitPassIsOn {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON;
}

interface StaffEmployeesWizarLimitTimeFrom {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM;
    payload: string;
}

interface StaffEmployeesWizarLimitTimeTo {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO;
    payload: string;
}

interface StaffEmployeesWizarLimitPass {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS;
    payload: string;
}

interface StaffEmployeesWizarClose {
    type: typeof STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE;
}

export type StaffEmployeesActions =
    | StaffEmployeesData
    | StaffEmployeesSelectTableRow
    | StaffEmployeesToggleSidebar
    | StaffEmployeesToggleBar
    | StaffEmployeesToggleQuickFilter
    | StaffEmployeesWizarIdetifiersType
    | StaffEmployeesWizarIdetifiersKey
    | StaffEmployeesWizarIdetifiersPhoto
    | StaffEmployeesWizarIdetifiersQr
    | StaffEmployeesWizarAccesZones
    | StaffEmployeesWizarLimitTimeIsOn
    | StaffEmployeesWizarLimitPassIsOn
    | StaffEmployeesWizarLimitTimeFrom
    | StaffEmployeesWizarLimitTimeTo
    | StaffEmployeesWizarLimitPass
    | StaffEmployeesWizarClose;
