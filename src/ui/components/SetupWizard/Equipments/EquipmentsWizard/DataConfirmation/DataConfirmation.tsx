import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDevicesUseForTimeTracking,
    setupWizardDevicesAllowOfflineWork
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import './DataConfirmation.scss';

const DataConfirmationInner = () => {
    const dispatch = useDispatch();
    const { setupWizardEquipments } = useSelector((state: State) => state.setupWizard, shallowEqual);

    return (
        <div className="acess-point-data-confirmation">
            <div className="acess-point-data-confirmation__header">
                <div className="p--md--bold">Проверьте данные и завершите операцию</div>
            </div>

            <div className="acess-point-data-confirmation__body">
                <CustomScrollbar>
                    <div className="acess-point-data-confirmation__body-wrapper">
                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Наименование точки доступа</div>

                            <div className="block-info__text p--md--bold">{setupWizardEquipments.configs.deviceSetup.name}</div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Зона входа</div>

                            <div className="block-info__text p--md--bold">
                                {setupWizardEquipments.zonning.accessZoneOnIn && setupWizardEquipments.zonning.accessZoneOnIn.name}
                            </div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Описание точки доступа</div>

                            <div className="block-info__text p--md--bold">{setupWizardEquipments.configs.deviceSetup.description}</div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Зона выхода</div>

                            <div className="block-info__text p--md--bold">
                                {setupWizardEquipments.zonning.accessZoneOnOut && setupWizardEquipments.zonning.accessZoneOnOut.name}
                            </div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Модули доступа</div>

                            <div className="block-info__text">
                                {setupWizardEquipments.accessModules.map((elem) => {
                                    return (
                                        <div key={elem.index} className="p--md--bold">
                                            {elem.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </CustomScrollbar>
            </div>

            <div className="acess-point-data-confirmation__footer">
                <Checkbox
                    name="useInTimeTracking"
                    checked={setupWizardEquipments.useForTimeTracking}
                    label="Использовать для учета рабочего времени"
                    onChange={() => dispatch(setupWizardDevicesUseForTimeTracking())}
                />

                <Checkbox
                    name="allowOfline"
                    checked={setupWizardEquipments.allowOfflineWork}
                    label="Разрешить автономную работу"
                    onChange={() => dispatch(setupWizardDevicesAllowOfflineWork())}
                />
            </div>
        </div>
    );
};

export const DataConfirmation = memo(DataConfirmationInner);
