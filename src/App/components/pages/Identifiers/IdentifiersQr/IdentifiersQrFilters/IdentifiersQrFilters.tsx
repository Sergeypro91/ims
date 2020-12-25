import React, { useState, memo } from 'react';
import './IdentifiersQrFilters.scss';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Add } from 'assets/images/svgr/add_button';
import { Accordion } from './Accordion/Accordion';
import { Status } from './FilterParameters/Status/Status';
import { Validity } from './FilterParameters/Validity/Validity';
import { PassLimit } from './FilterParameters/Passlimit/Passlimit';

const IdentifiersQrFiltersInner = () => {
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

            <Accordion header="Статус">
                <Status />
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

export const IdentifiersQrFilters = memo(IdentifiersQrFiltersInner);
