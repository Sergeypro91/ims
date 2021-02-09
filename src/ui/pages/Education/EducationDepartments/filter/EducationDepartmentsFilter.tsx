import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import { State } from 'redux/store';
import { EDToggleIsFilterOpened } from 'redux/Education/EducationDepartments/educationDepartmentsActions';

const EducationDepartmentsFilter = () => {
    const dispatch = useDispatch();
    const { isFilterOpened } = useSelector((state: State) => state.education.educationDepartments, shallowEqual);

    return (
        <SideFilter onClose={() => dispatch(EDToggleIsFilterOpened())} isOpen={isFilterOpened} iconName="Настройки">
            <div>
                <span>123</span>
            </div>
        </SideFilter>
    );
};

export default EducationDepartmentsFilter;
