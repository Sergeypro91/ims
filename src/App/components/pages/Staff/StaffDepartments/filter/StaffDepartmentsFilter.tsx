import React, { useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Add } from 'assets/images/svgr/add_button';
import Accordion from './Accordion/Accordion';
import Organization from './FilterParameters/Organization/Organization';
import RecordType from './FilterParameters/RecordType/RecordType';

const StaffDepartmentsFilter = () => {
    const [filterPattern, setFilterPattern] = useState('');
    const inputHandler = (ev: any) => {
        setFilterPattern(ev.target.value);
    };
    const options = ['', 'first option', 'second option', 'third option'];

    return (
        <div className="workingtime__filter__wrapper">
            <div className="filter__selector">
                <h4 className="filter__header p--sm--bold">Сохраненные фильтры</h4>
                <div className="filter__select__container">
                    <Inputs
                        list={options}
                        type="select"
                        name="working__time"
                        value={filterPattern}
                        onInputChange={inputHandler}
                    />
                    <Buttons name="Delete" size="m" typical />
                </div>
                <button type="button" className="p--sm--bold">
                    <Add />
                    Сохранить
                </button>
            </div>
            <Accordion header="Организация">
                <Organization />
            </Accordion>
            <Accordion header="Тип учета">
                <RecordType />
            </Accordion>
        </div>
    );
};

export default StaffDepartmentsFilter;
