import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import { State } from 'redux/store';
import { EGToggleIsFilterOpened } from 'redux/Education/EducationGroups/educationGroupsActions';

const EducationGroupsFilter = () => {
    const dispatch = useDispatch();
    const { isFilterOpened } = useSelector((state: State) => state.education.educationGroups, shallowEqual);

    return (
        <SideFilter onClose={() => dispatch(EGToggleIsFilterOpened())} isOpen={isFilterOpened} iconName="Настройки">
            <div>
                <span>123</span>
            </div>
        </SideFilter>
    );
};

export default EducationGroupsFilter;
