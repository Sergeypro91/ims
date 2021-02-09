import React, { useState, useEffect, useMemo, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    identifierSetupWizardLimitTimeIsOn,
    identifierSetupWizardLimitTimeFrom,
    identifierSetupWizardLimitTimeTo,
    identifierSetupWizardLimitPassIsOn,
    identifierSetupWizardLimitPass
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { requestIdentifiersRfidReservedKey, identifiersRfidKey } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { ReservedKeys } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidTypes';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Limits } from 'ui/components/Limits/Limits';
import './Reserve.scss';

const ReserveInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersRfid } = useSelector((state: State) => state.identifiers, shallowEqual);
    const [requiredKey, setКequiredKey] = useState('');
    const [foundKeys, setFoundKeys] = useState<ReservedKeys>([]);
    const identifiersArr: HTMLButtonElement[] = useMemo(() => [], []);

    useEffect(() => {
        dispatch(requestIdentifiersRfidReservedKey());
    }, [dispatch]);

    useEffect(() => {
        if (requiredKey === '') {
            setFoundKeys(identifiersRfid.reservedKeys);
        } else {
            const searchKey = [...identifiersRfid.reservedKeys];

            setFoundKeys(searchKey.filter((elem) => elem.indexSysFormat.includes(requiredKey)));
        }
    }, [requiredKey, identifiersRfid.reservedKeys]);

    const selectIdentifier = (index: number) => {
        dispatch(identifiersRfidKey(identifiersRfid.reservedKeys[index].indexSysFormat));

        const activeTableRow = document.querySelector('.reserve-table__body-item--active');

        if (activeTableRow) {
            activeTableRow.classList.remove('reserve-table__body-item--active');
        }

        identifiersArr[index].classList.add('reserve-table__body-item--active');
    };

    useEffect(() => {
        if (identifiersRfid.key) {
            foundKeys.forEach((obj, id) => {
                if (obj.indexSysFormat === identifiersRfid.key) {
                    identifiersArr[id].classList.add('reserve-table__body-item--active');
                }
            });
        }
    }, [identifiersArr, foundKeys, identifiersRfid.key]);

    return (
        <div className="reserve">
            <div className="reserve__title">
                <div className="p--md--bold">Резервные ключи, доступные для выдачи</div>
            </div>

            <div className="reserve__body">
                <div className="reserve-body__left">
                    <div className="reserve-table">
                        <div className="reserve-table__header">
                            <div className="reserve-table__search-box">
                                <Inputs
                                    type="text"
                                    name="search"
                                    placeholder="Ключ №"
                                    onInputChange={(e) => setКequiredKey(e.target.value)}
                                    value={requiredKey}
                                />
                            </div>
                        </div>

                        <div className="reserve-table__body">
                            <CustomScrollbar>
                                <div className="reserve-table__body-key">
                                    {foundKeys.map((elem, id) => {
                                        return (
                                            <button
                                                key={elem.uuid}
                                                type="button"
                                                ref={(e: HTMLButtonElement) => {
                                                    identifiersArr[id] = e;
                                                }}
                                                className="reserve-table__body-item"
                                                onClick={() => selectIdentifier(id)}
                                            >
                                                <div className="p--md--normal">{elem.indexSysFormat}</div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </CustomScrollbar>
                        </div>
                    </div>
                </div>

                <div className="reserve-body__right">
                    <Limits
                        timeToggler={() => dispatch(identifierSetupWizardLimitTimeIsOn())}
                        limitTimeIsOff={identifiersGeneral.limits.limitTimeIsOff}
                        timeFromFunc={(e) => dispatch(identifierSetupWizardLimitTimeFrom(e))}
                        limitTimeFrom={identifiersGeneral.limits.limitTime.limitTimeFrom}
                        timeToFunc={(e) => dispatch(identifierSetupWizardLimitTimeTo(e))}
                        limitTimeTo={identifiersGeneral.limits.limitTime.limitTimeTo}
                        passToggler={() => dispatch(identifierSetupWizardLimitPassIsOn())}
                        limitPassIsOff={identifiersGeneral.limits.limitPassIsOff}
                        passCountFunc={(e) => dispatch(identifierSetupWizardLimitPass(e))}
                        limitPassCount={identifiersGeneral.limits.limitPass}
                        clearTimeLimit={() => {
                            dispatch(identifierSetupWizardLimitTimeFrom(''));
                            dispatch(identifierSetupWizardLimitTimeTo(''));
                        }}
                        clearPassLimit={() => dispatch(identifierSetupWizardLimitPass(''))}
                        minPass={1}
                        maxPass={10000}
                    />
                </div>
            </div>
        </div>
    );
};

export const Reserve = memo(ReserveInner);
