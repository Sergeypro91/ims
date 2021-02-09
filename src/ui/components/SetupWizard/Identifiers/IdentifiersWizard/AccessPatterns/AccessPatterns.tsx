import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    identifierSetupWizardSelectedAccesPatterns,
    requestIdentifierSetupWizardAccesPatterns
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { AccesPattern } from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralTypes';
import { Accordion } from 'ui/components/Accordion/Accordion';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './AccessPatterns.scss';

const AccessPatternsInner = () => {
    const dispatch = useDispatch();
    const { accesPatterns, selectedAccesPatterns } = useSelector((state: State) => state.identifiers.identifiersGeneral, shallowEqual);
    const { parameters } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);
    const [zones, setZones] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(false);
    const [zoning, setZoning] = useState(false);

    useEffect(() => {
        dispatch(requestIdentifierSetupWizardAccesPatterns());
    }, [dispatch]);

    useEffect(() => {
        if (selectedAccesPatterns.length > 0) {
            selectedAccesPatterns.forEach((elem) => {
                let updatedZones: string[] = [];

                updatedZones.push(elem.zoneInName);
                updatedZones.push(elem.zoneOutName);

                setZones([...updatedZones]);
            });
        } else {
            setZones([]);
        }
    }, [selectedAccesPatterns]);

    useEffect(() => {
        if (parameters.length > 0) {
            parameters.forEach((elem) => {
                if (elem.name === 'general') {
                    elem.options.forEach((item) => {
                        if (item.name === 'useZoning') {
                            if (item.condition) {
                                setZoning(true);
                            }
                        }
                    });
                }
            });
        }
    }, [parameters]);

    const selectItem = (selectedAccessPattern: AccesPattern) => {
        if (selectedAccesPatterns.filter((item) => item.uuid === selectedAccessPattern.uuid).length > 0) {
            const updatedSelectedAccesPatterns = [...selectedAccesPatterns];
            const deletedPatternId = findIndexFunc(updatedSelectedAccesPatterns, selectedAccessPattern.uuid, 'uuid');

            updatedSelectedAccesPatterns.splice(deletedPatternId, 1);

            dispatch(identifierSetupWizardSelectedAccesPatterns([...updatedSelectedAccesPatterns]));
        } else {
            dispatch(identifierSetupWizardSelectedAccesPatterns([...selectedAccesPatterns, selectedAccessPattern]));
        }
    };

    const checkIsActivated = (uuid: string) => {
        return selectedAccesPatterns.filter((item) => item.uuid === uuid).length > 0;
    };

    return (
        <div className="access-patterns">
            <div className="patterns-selector">
                <div className="patterns-selector__title">
                    <div className="p--md--bold">Выберите шаблон доступа</div>
                </div>

                <div className="patterns-selector__body">
                    <CustomScrollbar>
                        {accesPatterns.map((elem) => {
                            return (
                                <Accordion
                                    key={elem.uuid}
                                    type="selectable"
                                    isChecked={checkIsActivated(elem.uuid)}
                                    header={elem.name}
                                    checkbox={() => selectItem(elem)}
                                    disabled={!zoning && elem.name === 'Доступ везде'}
                                    trigger={() => setTrigger(!trigger)}
                                >
                                    {elem.description}
                                </Accordion>
                            );
                        })}
                    </CustomScrollbar>
                </div>
            </div>

            <div className="access-zones">
                <div className="access-zones__title">
                    <div className="p--md--bold">Доступные зоны</div>
                </div>

                <div className="access-zones__body">
                    <CustomScrollbar>
                        {zones.map((elem) => {
                            return (
                                <div key={elem} className="zones__item">
                                    <div className="p--md--normal">{elem}</div>
                                </div>
                            );
                        })}
                    </CustomScrollbar>
                </div>
            </div>
        </div>
    );
};

export const AccessPatterns = memo(AccessPatternsInner);
