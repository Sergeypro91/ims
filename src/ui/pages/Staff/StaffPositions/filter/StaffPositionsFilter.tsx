import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import { State } from 'redux/store';
import { SPToggleIsFilterOpened } from 'redux/Staff/StaffPositions/staffPositionsActions';
import FilterSaved from 'ui/components/SideFilter/FilterSaved/FilterSaved';
import { Accordion } from 'ui/components/Accordion/Accordion';
import { Inputs } from 'ui/components/Inputs/Inputs';

const StaffPositionsFilter = () => {
    const dispatch = useDispatch();
    const { isFilterOpened } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);

    return (
        <SideFilter onClose={() => dispatch(SPToggleIsFilterOpened())} isOpen={isFilterOpened} iconName="Настройки">
            <>
                <FilterSaved />
                <div>
                    <Accordion type="simple" header="Организация">
                        <Inputs onInputChange={() => {}} name="org" type="text" value={''} placeholder="Введите что-нибудь" />
                    </Accordion>
                    <Accordion type="simple" header="Подразделение">
                        <Inputs onInputChange={() => {}} name="dep" type="text" value={''} placeholder="Введите что-нибудь" />
                    </Accordion>
                </div>
            </>
        </SideFilter>
    );
};

export default StaffPositionsFilter;
