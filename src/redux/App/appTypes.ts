import { EventPayload } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';

export interface AppState {
    user: User;
    wsEvent: {
        status: number;
        event: null | Event;
    };
    toasts: Toast[];
    sideNavMenu: SideNavMenu;
    theme: string;
    progressBarVisible: boolean;
    sidenavOpened: boolean;
    sidebarOpened: boolean;
    bottombarOpened: boolean;
    toggleBar: boolean;
    windowSize: WindowSizeObj;
    setupWizard: SetupWizard;
}

export interface User {
    login: string;
    password: string;
    saved: boolean;
    isAuthenticated: boolean;
}

export interface Event {
    code: number;
    payload: EventPayload;
}

export type SideNavMenu = Array<NavLink>;

export interface NavLink {
    linkName: string;
    linkUrl?: string;
    linkSubLink?: SubLinkArr;
}

export type SubLinkArr = Array<SubLinkObj>;

export interface SubLinkObj {
    sublinkName: string;
    sublinkUrl?: string;
    linkSubLink?: SubLinkArr;
}

export interface WindowSizeObj {
    width: number;
    height: number;
}

export interface SetupWizard {
    stepsCount: number;
    currentStep: number;
    marckerElemWidth: number;
}

export interface Toast {
    type: string;
    message: string;
}

export const APP_USER = 'APP_USER';
export const SET_WS_STATUS = 'SET_WS_STATUS';
export const GET_WS_EVENT = 'GET_WS_EVENT';
export const APP_TOAST_ADD = 'APP_TOAST_ADD';
export const APP_TOAST_CLEAR = 'APP_TOAST_CLEAR';
export const GET_SIDE_NAV_MENU = 'GET_SIDE_NAV_MENU';
export const THEME = 'THEME';
export const APP_SHOW_PROGRESS_BAR = 'APP_SHOW_PROGRESS_BAR';
export const APP_HIDE_PROGRESS_BAR = 'APP_HIDE_PROGRESS_BAR';

export const APP_TOGGLE_SIDENAV = 'APP_TOGGLE_SIDENAV';
export const APP_TOGGLE_SIDEBAR = 'APP_TOGGLE_SIDEBAR';
export const APP_TOGGLE_BOTTOMBAR = 'APP_TOGGLE_BOTTOMBAR';
export const APP_TOGGLE_BAR = 'APP_TOGGLE_BAR';
export const APP_DETERM_WINDOW_SIZE = 'APP_DETERM_WINDOW_SIZE';
export const APP_WIZARD_STEPS = 'APP_WIZARD_STEPS';
export const APP_WIZARD_STEP = 'APP_WIZARD_STEP';
export const APP_WIZARD_MARCKER_WIDTH = 'APP_WIZARD_MARCKER_WIDTH';
export const APP_WIZARD_CLOSE = 'APP_WIZARD_CLOSE';

interface AppUser {
    type: typeof APP_USER;
    payload: User;
}

interface SetWsStatus {
    type: typeof SET_WS_STATUS;
    payload: number;
}

interface GetWsEvent {
    type: typeof GET_WS_EVENT;
    payload: null | Event;
}

interface AppToastAdd {
    type: typeof APP_TOAST_ADD;
    payload: Toast;
}

interface AppToastClear {
    type: typeof APP_TOAST_CLEAR;
}

interface AppSideNav {
    type: typeof GET_SIDE_NAV_MENU;
    payload: SideNavMenu;
}

interface AppTheme {
    type: typeof THEME;
    payload: string;
}

interface AppShowProgressBar {
    type: typeof APP_SHOW_PROGRESS_BAR;
}

interface AppHideProgressBar {
    type: typeof APP_HIDE_PROGRESS_BAR;
}

interface AppToggleSidenav {
    type: typeof APP_TOGGLE_SIDENAV;
}

interface AppToggleSidebar {
    type: typeof APP_TOGGLE_SIDEBAR;
}

interface AppToggleBottombar {
    type: typeof APP_TOGGLE_BOTTOMBAR;
}

interface AppToggleBar {
    type: typeof APP_TOGGLE_BAR;
}

interface AppWindowSize {
    type: typeof APP_DETERM_WINDOW_SIZE;
    payload: WindowSizeObj;
}

interface AppWizardStepsCount {
    type: typeof APP_WIZARD_STEPS;
    payload: number;
}

interface AppWizardCurrentStep {
    type: typeof APP_WIZARD_STEP;
    payload: number;
}

interface AppWizarMarckerElemWidth {
    type: typeof APP_WIZARD_MARCKER_WIDTH;
    payload: number;
}

interface AppWizardClose {
    type: typeof APP_WIZARD_CLOSE;
}

export type AppActions =
    | AppUser
    | SetWsStatus
    | GetWsEvent
    | AppToastAdd
    | AppToastClear
    | AppSideNav
    | AppTheme
    | AppShowProgressBar
    | AppHideProgressBar
    | AppToggleSidenav
    | AppToggleSidebar
    | AppToggleBottombar
    | AppToggleBar
    | AppWindowSize
    | AppWizardStepsCount
    | AppWizardCurrentStep
    | AppWizarMarckerElemWidth
    | AppWizardClose;
