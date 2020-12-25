import React, { memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    staffEmployeesSetupWizardKey,
    staffEmployeesSetupWizardLimitTimeFrom,
    staffEmployeesSetupWizardLimitTimeTo,
    staffEmployeesSetupWizardLimitPass
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Limits } from 'App/components/global/Limits/Limits';
import './Manual.scss';

const ManualInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    return (
        <div className="manual">
            <div className="manual__title">
                <div className="p--md--bold">Ввод данных RFID ключа в ручном режиме</div>
            </div>

            <div className="manual__body">
                <Inputs
                    type="text"
                    name="key"
                    label="Ключ №"
                    onInputChange={(e) => dispatch(staffEmployeesSetupWizardKey(e.target.value))}
                    value={identifiersWizard.key}
                />

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
    );
};

export const Manual = memo(ManualInner);
