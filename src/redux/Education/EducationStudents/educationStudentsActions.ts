import {
    EducationStudentsPageActions,
    ES_SET_STUDENTS,
    ES_SET_SELECTED_ROW,
    ES_TOGGLE_IS_SIDEBAR_OPENED,
    ES_TOGGLE_IS_FILTER_OPENED,
    ES_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    ES_TOGGLE_IS_DELETED_DISPLAYED
} from './educationStudentsTypes';

export const ESSetStudents = (students: []): EducationStudentsPageActions => ({
    type: ES_SET_STUDENTS,
    payload: students
});

export const ESSetSelectedRow = (row: {} | null): EducationStudentsPageActions => ({
    type: ES_SET_SELECTED_ROW,
    payload: row
});

export const ESToggleIsSidebarOpened = (): EducationStudentsPageActions => ({
    type: ES_TOGGLE_IS_SIDEBAR_OPENED
});

export const ESToggleIsFilterOpened = (): EducationStudentsPageActions => ({
    type: ES_TOGGLE_IS_FILTER_OPENED
});

export const ESToggleIsQuickFilterActive = (): EducationStudentsPageActions => ({
    type: ES_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const ESToggleIsDeletedDisplayed = (): EducationStudentsPageActions => ({
    type: ES_TOGGLE_IS_DELETED_DISPLAYED
});
