export interface EducationNamesState {
    institutions: Array<{
        [key: string]: string;
    }>;
    faculties: Array<{
        [key: string]: string;
    }>;
    groups: Array<{
        [key: string]: string;
    }>;
    departments: Array<{
        [key: string]: string;
    }>;
}

export const EN_SET_INSTITUTIONS = 'EN_SET_INSTITUTIONS';
export const EN_SET_DEPARTMENTS = 'EN_SET_DEPARTMENTS';
export const EN_SET_FACULTIES = 'EN_SET_FACULTIES';
export const EN_SET_GROUPS = 'EN_SET_GROUPS';

interface ENSetInstitutions {
    type: typeof EN_SET_INSTITUTIONS;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface ENSetDepartments {
    type: typeof EN_SET_DEPARTMENTS;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface ENSetFaculties {
    type: typeof EN_SET_FACULTIES;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface ENSetGroups {
    type: typeof EN_SET_GROUPS;
    payload: Array<{
        [key: string]: string;
    }>;
}

export type EducationNamesActions = ENSetFaculties | ENSetDepartments | ENSetGroups | ENSetInstitutions;
