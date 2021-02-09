export interface OptionType {
    name: string;
    label: string;
    type: string;
    value?: string | number;
    readonly?: boolean;
    list?: string[];
    selected?: string;
    selectedId: number;
    selectedList?: boolean[];
    condition?: boolean;
    min?: number;
    max?: number;
    validationTitle?: string;
    fontCase?: string;
}

export type OptionsType = Array<OptionType>;

export interface ParametersType {
    name: string;
    label: string;
    options: OptionsType;
}

export type Parameters = Array<ParametersType>;

export interface SettingsParametersState {
    parameters: Parameters;
    copyParam: Parameters;
}

export const UPDATE_SETTINGS_PARAMETERS_CHANGE = 'UPDATE_SETTINGS_PARAMETERS_CHANGE';
export const SET_SETTINGS_PARAMETERS_CHANGE = 'SET_SETTINGS_PARAMETERS_CHANGE';
export const SETTINGS_PARAMETERS_COPY = 'SETTINGS_PARAMETERS_COPY';

interface SettingsParametersData {
    type: typeof UPDATE_SETTINGS_PARAMETERS_CHANGE;
    payload: Parameters;
}

interface SettingsParametersChange {
    type: typeof SET_SETTINGS_PARAMETERS_CHANGE;
    payload: Parameters;
}

interface SettingsParametersCopy {
    type: typeof SETTINGS_PARAMETERS_COPY;
    payload: Parameters;
}

export type SettingsParametersActions =
    | SettingsParametersData
    | SettingsParametersChange
    | SettingsParametersCopy;
