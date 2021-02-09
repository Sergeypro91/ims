import { Buttons } from 'ui/components/Buttons/Buttons';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import Tooltip from 'ui/components/Tooltip/Tooltip';
import { Add } from 'assets/images/svgr/add_button';
import React from 'react';
import './FilterSaved.scss';

const FilterSaved = () => {
    return (
        <div className="filter-saved">
            <div className="filter-saved__card">
                <div className="filter-saved__content">
                    <span className="filter-saved__header">Сохраненные фильтры</span>
                    <div className="filter-saved__controls">
                        <div className="filter-saved-controls__dropdown">
                            <Dropdown
                                placeholder="Фильтр"
                                idField="id"
                                labelField="name"
                                value={''}
                                onChange={(val) => {}}
                                options={[
                                    { id: 214, name: 'Фильтр 1' },
                                    { id: 243214, name: 'Фильтр 2' },
                                    { id: 32214, name: 'Фильтр 3' }
                                ]}
                            />
                        </div>
                        <div className="filter-saved-controls__button">
                            <Tooltip id="delete" type="delete">
                                <Buttons name="Delete" size="m" typical={true} />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="filter-saved__save">
                        <Add />
                        <span>Сохранить фильтр</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSaved;
