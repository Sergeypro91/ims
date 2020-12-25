import React, { useMemo, useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    staffEmployeesSetupWizardKey,
    staffEmployeesSetupWizardLimitTimeFrom,
    staffEmployeesSetupWizardLimitTimeTo,
    staffEmployeesSetupWizardLimitPass
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { Limits } from 'App/components/global/Limits/Limits';
import './Reserve.scss';

const ReserveInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const identifiersArr: HTMLButtonElement[] = useMemo(() => [], []);

    const keys = [
        { key: '9453214569874521', index: 0 },
        { key: '5453214569874521', index: 1 },
        { key: '1453214569874521', index: 2 },
        { key: '4453214569874521', index: 3 },
        { key: '9453214569674521', index: 4 },
        { key: '8453214569874521', index: 5 },
        { key: '8453219569874521', index: 6 },
        { key: '9453214549874521', index: 7 },
        { key: '5453214369874521', index: 8 },
        { key: '1453214569871521', index: 9 },
        { key: '4453214569844521', index: 10 },
        { key: '9453214269874521', index: 11 },
        { key: '8453214579874521', index: 12 },
        { key: '8453214561874521', index: 13 }
    ];

    const selectIdentifier = (index: number) => {
        dispatch(staffEmployeesSetupWizardKey(keys[index].key));

        const activeTableRow = document.querySelector('.reserve-table__body-item--active');

        if (activeTableRow) {
            activeTableRow.classList.remove('reserve-table__body-item--active');
        }

        identifiersArr[index].classList.add('reserve-table__body-item--active');
    };

    useEffect(() => {
        keys.forEach((obj, id) => {
            if (obj.key === identifiersWizard.key) {
                identifiersArr[id].classList.add('reserve-table__body-item--active');
            }
        });
    }, [identifiersArr, keys, identifiersWizard.key]);

    return (
        <div className="reserve">
            <div className="reserve__title">
                <div className="p--md--bold">Резервные ключи, доступные для выдачи</div>
            </div>

            <div className="reserve__body">
                <div className="reserve-body__left">
                    <div className="reserve-table">
                        <div className="reserve-table__header">
                            <div className="reserve-table__header-title">
                                <div className="p--sm--bold">Ключ №</div>
                            </div>
                        </div>

                        <div className="reserve-table__body">
                            <CustomScrollbar>
                                <div className="reserve-table__body-key">
                                    {keys.map((elem) => {
                                        return (
                                            <button
                                                key={elem.index}
                                                type="button"
                                                ref={(e: HTMLButtonElement) => {
                                                    identifiersArr[elem.index] = e;
                                                }}
                                                className="reserve-table__body-item"
                                                onClick={() => selectIdentifier(elem.index)}>
                                                <div className="p--md--normal">{elem.key}</div>
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
                        timeFromFunc={(e) => dispatch(staffEmployeesSetupWizardLimitTimeFrom(e))}
                        limitTimeFrom={identifiersWizard.limits.limitTime.limitTimeFrom}
                        timeToFunc={(e) => dispatch(staffEmployeesSetupWizardLimitTimeTo(e))}
                        limitTimeTo={identifiersWizard.limits.limitTime.limitTimeTo}
                        passCountFunc={(e) => dispatch(staffEmployeesSetupWizardLimitPass(e))}
                        limitPassCount={identifiersWizard.limits.limitPass}
                        clearTimeLimit={() => {
                            dispatch(staffEmployeesSetupWizardLimitTimeFrom(''));
                            dispatch(staffEmployeesSetupWizardLimitTimeTo(''));
                        }}
                        clearPassLimit={() => dispatch(staffEmployeesSetupWizardLimitPass(''))}
                    />
                </div>
            </div>
        </div>
    );
};

export const Reserve = memo(ReserveInner);
