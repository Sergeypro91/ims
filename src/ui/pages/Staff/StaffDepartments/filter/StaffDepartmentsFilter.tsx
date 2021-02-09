import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import { State } from 'redux/store';
import { SDToggleIsFilterOpened } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';

const StaffDepartmentsFilter = () => {
    const dispatch = useDispatch();
    const { isFilterOpened } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);

    return (
        <SideFilter onClose={() => dispatch(SDToggleIsFilterOpened())} isOpen={isFilterOpened} iconName="Настройки">
            <div>
                <span>123</span>
            </div>
        </SideFilter>
    );
};

export default StaffDepartmentsFilter;
