import React, { useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { requestDeviceTypes, setupWizardDevicesType } from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Turniket } from 'assets/images/svgr/turniket';
import { Barrier } from 'assets/images/svgr/barrier';
import { Door } from 'assets/images/svgr/door';
import './AccessPointsType.scss';

const AccessPointsTypeInner = () => {
    const dispatch = useDispatch();
    const { deviceTypes, deviceType } = useSelector((state: State) => state.setupWizard.setupWizardEquipments.device, shallowEqual);

    useEffect(() => {
        dispatch(requestDeviceTypes());
    }, [dispatch]);

    return (
        <div className="access-points-type">
            <div className="access-points-type__description">
                <div className="p--sm--normal">Этот мастер поможет вам настроить точки доступа в вашей организации.</div>

                <div className="p--sm--normal">Следуйте указаниям мастера для завершения процесса настройки.</div>
            </div>

            <div className="access-points-type__selector">
                <div className="access-points-type__selector-title">
                    <div className="p--lg--bold">Выберите тип точек доступа</div>
                </div>

                <div className="access-points-type__selector-wrapper">
                    {deviceTypes
                        .sort((a, b) => a.idx - b.idx)
                        .map((elem) => {
                            return (
                                <button
                                    key={elem.id}
                                    type="button"
                                    className={`access-points-type__selector-item ${
                                        !elem.enabled && 'access-points-type__selector-item--disabled'
                                    } ${deviceType ? deviceType.name === elem.name && 'access-points-type__selector-item--active' : ''}`}
                                    onClick={elem.enabled ? () => dispatch(setupWizardDevicesType(elem)) : undefined}
                                >
                                    {elem.idx === 0 && <Turniket />}
                                    {elem.idx === 1 && <Barrier />}
                                    {elem.idx === 2 && <Door />}

                                    <div className="p--md--bold">{elem.name}</div>
                                </button>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export const AccessPointsType = memo(AccessPointsTypeInner);
