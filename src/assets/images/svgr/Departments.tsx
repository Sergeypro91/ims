import React, { memo } from 'react';

const DepartmentsInner = () => (
    <svg viewBox="0 0 21 21">
        <path d="M4.03854 1.75C4.03854 0.783501 4.82205 0 5.78854 0H15.2116C16.1781 0 16.9616 0.783502 16.9616 1.75V6.32692C16.9616 7.29342 16.1781 8.07692 15.2116 8.07692H10.9375V9.69228C10.9375 9.93391 10.7416 10.1298 10.5 10.1298C10.2584 10.1298 10.0625 9.93391 10.0625 9.69228V8.07692H5.78854C4.82205 8.07692 4.03854 7.29342 4.03854 6.32692V1.75ZM3.0625 13.125C3.0625 12.4001 3.65013 11.8125 4.375 11.8125H10.0625V15.75H7.875C7.39175 15.75 7 16.1418 7 16.625V20.125C7 20.6082 7.39175 21 7.875 21H13.125C13.6082 21 14 20.6082 14 20.125V16.625C14 16.1418 13.6082 15.75 13.125 15.75H10.9375V11.8125H16.625C17.3499 11.8125 17.9375 12.4001 17.9375 13.125V14H16.625C16.1418 14 15.75 14.3918 15.75 14.875V17.5C15.75 17.9832 16.1418 18.375 16.625 18.375H20.125C20.6082 18.375 21 17.9832 21 17.5V14.875C21 14.3918 20.6082 14 20.125 14H18.8125V13.125C18.8125 11.9169 17.8331 10.9375 16.625 10.9375H4.375C3.16688 10.9375 2.1875 11.9169 2.1875 13.125V14H0.875C0.391751 14 0 14.3918 0 14.875V17.5C0 17.9832 0.391751 18.375 0.875 18.375H4.375C4.85825 18.375 5.25 17.9832 5.25 17.5V14.875C5.25 14.3918 4.85825 14 4.375 14H3.0625V13.125Z" />
    </svg>
);

export const Departments = memo(DepartmentsInner);
