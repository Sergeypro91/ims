import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsAccessPointsUseForTimeTracking,
    settingsAccessPointsAllowOfflineWork
} from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { Checkbox } from 'App/components/global/Checkbox/Checkbox';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import './DataConfirmation.scss';

const DataConfirmationInner = () => {
    const dispatch = useDispatch();
    const { accessPointsWizard } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);

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

                            <div className="block-info__text p--md--bold">{accessPointsWizard.accessPoint.name}</div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Зона входа</div>

                            <div className="block-info__text p--md--bold">
                                {accessPointsWizard.accessPoint.zoneToEnter}
                            </div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Описание точки доступа</div>

                            <div className="block-info__text p--md--bold">
                                {accessPointsWizard.accessPoint.description}
                            </div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Зона выхода</div>

                            <div className="block-info__text p--md--bold">
                                {accessPointsWizard.accessPoint.zoneToExit}
                            </div>
                        </div>

                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Модули доступа</div>

                            <div className="block-info__text">
                                {accessPointsWizard.accessModules.map((elem) => {
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
                    checked={accessPointsWizard.useForTimeTracking}
                    label="Использовать для учета рабочего времени"
                    onChange={() => dispatch(settingsAccessPointsUseForTimeTracking())}
                />

                <Checkbox
                    name="allowOfline"
                    checked={accessPointsWizard.allowOfflineWork}
                    label="Разрешить автономную работу"
                    onChange={() => dispatch(settingsAccessPointsAllowOfflineWork())}
                />
            </div>
        </div>
    );
};

export const DataConfirmation = memo(DataConfirmationInner);
