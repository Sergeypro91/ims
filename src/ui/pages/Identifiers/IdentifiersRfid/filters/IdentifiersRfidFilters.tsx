import React, { useState, memo } from 'react';
import './IdentifiersRfidFilters.scss';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Add } from 'assets/images/svgr/add_button';
import { Accordion } from './Accordion/Accordion';
import { Status } from './FilterParameters/Status/Status';
import { Class } from './FilterParameters/Class/Class';
import { Validity } from './FilterParameters/Validity/Validity';
import { PassLimit } from './FilterParameters/Passlimit/Passlimit';

const IdentifiersRfidFiltersInner = () => {
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
                    <Inputs list={options} type="select" name="working__time" value={filterPattern} onInputChange={inputHandler} />
                    <Buttons name="Delete" size="m" typical />
                </div>
                <button type="button" className="p--sm--bold">
                    <Add />
                    Сохранить
                </button>
            </div>
            <Accordion header="Статус">
                <Status />
            </Accordion>
            <Accordion header="Класс">
                <Class />
            </Accordion>
            <Accordion header="Срок действия">
                <Validity />
            </Accordion>
            <Accordion header="Лимит прохода">
                <PassLimit />
            </Accordion>
        </div>
    );
};

export const IdentifiersRfidFilters = memo(IdentifiersRfidFiltersInner);
