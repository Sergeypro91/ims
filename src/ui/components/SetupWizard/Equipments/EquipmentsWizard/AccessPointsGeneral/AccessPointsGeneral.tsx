import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDeviceName,
    setupWizardDeviceDescription,
    requestDeviceAccessZones,
    setupWizardDevicesAccessZoneOnIn,
    setupWizardDevicesAccessZoneOnOut
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { requestSettingsParameters } from 'redux/Settings/SettingParameters/settingsParametersActions';
import { AccessZones } from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesTypes';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './AccessPointsGeneral.scss';

const AccessPointsGeneralInner = () => {
    const dispatch = useDispatch();
    const { configs, zonning } = useSelector((state: State) => state.setupWizard.setupWizardEquipments, shallowEqual);
    const { parameters } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);
    const [localZonesIn, setLocalZonesIn] = useState<AccessZones>([]);
    const [localZonesOut, setLocalZonesOut] = useState<AccessZones>([]);
    const [useZonning, setUseZonning] = useState(false);

    useEffect(() => {
        dispatch(requestDeviceAccessZones());
        dispatch(requestSettingsParameters());
    }, [dispatch]);

    useEffect(() => {
        if (parameters.length > 0) {
            const parametersOption = parameters[findIndexFunc(parameters, 'general', 'name')].options;
            const useZoning = parametersOption[findIndexFunc(parametersOption, 'useZoning', 'name')].condition;

            if (useZoning) {
                setUseZonning(true);
            } else {
                setUseZonning(false);
            }
        }
    }, [parameters]);

    useEffect(() => {
        if (zonning.accessZones.length) {
            const copyZonesIn = [...zonning.accessZones];
            const copyZonesOut = [...zonning.accessZones];

            if (zonning.accessZoneOnIn) {
                const selectedZoneIn = findIndexFunc(copyZonesOut, zonning.accessZoneOnIn.name, 'name');

                copyZonesOut.splice(selectedZoneIn, 1);
            } else {
                const customZoneIn = findIndexFunc(copyZonesIn, 1, 'id');

                dispatch(setupWizardDevicesAccessZoneOnIn(copyZonesIn[customZoneIn]));

                copyZonesOut.splice(customZoneIn, 1);
            }

            if (zonning.accessZoneOnOut) {
                const selectedZoneOut = findIndexFunc(copyZonesIn, zonning.accessZoneOnOut.name, 'name');

                copyZonesIn.splice(selectedZoneOut, 1);
            } else {
                const customZoneOut = findIndexFunc(copyZonesOut, 0, 'id');

                dispatch(setupWizardDevicesAccessZoneOnOut(copyZonesOut[customZoneOut]));

                copyZonesIn.splice(customZoneOut, 1);
            }

            setLocalZonesIn([...copyZonesIn]);
            setLocalZonesOut([...copyZonesOut]);
        }
    }, [dispatch, zonning.accessZones, zonning.accessZoneOnIn, zonning.accessZoneOnOut]);

    const changeZone = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        if (target.name === 'accessPointsZoneToEnter') {
            const selectedObjId = findIndexFunc(localZonesIn, target.value, 'name');

            dispatch(setupWizardDevicesAccessZoneOnIn(localZonesIn[selectedObjId]));
        } else if (target.name === 'accessPointsZoneToExit') {
            const selectedObjId = findIndexFunc(localZonesOut, target.value, 'name');

            dispatch(setupWizardDevicesAccessZoneOnOut(localZonesOut[selectedObjId]));
        }
    };

    return (
        <div className="access-points-general">
            <div className="access-points-general__title">
                <div className="p--md--bold">Опишите новую точку доступа и выберите зоны доступа</div>
            </div>

            <div className="access-points-general__body">
                <div className="general-settings__header">
                    <Inputs
                        label="Наименование точки доступа"
                        type="text"
                        name="eaccessPointName"
                        onInputChange={(e) => {
                            dispatch(setupWizardDeviceName(e.target.value));
                        }}
                        value={configs.deviceSetup.name}
                    />
                </div>

                <div className="general-settings__body">
                    <Inputs
                        name="templates"
                        label="Описание точки доступа"
                        onInputChange={(e) => {
                            dispatch(setupWizardDeviceDescription(e.target.value));
                        }}
                        type="textarea"
                        value={configs.deviceSetup.description}
                    />
                </div>

                <div className="general-settings__footer">
                    <Inputs
                        label="Зона доступа на вход"
                        type="text"
                        name="accessPointsZoneToEnter"
                        placeholder="Выберите тип"
                        onInputChange={changeZone}
                        value={zonning.accessZoneOnIn ? zonning.accessZoneOnIn.name : ''}
                        list={localZonesIn.map((elem) => elem.name)}
                        disabled={!useZonning}
                    />

                    <Inputs
                        label="Зона доступа на выход"
                        type="text"
                        name="accessPointsZoneToExit"
                        placeholder="Выберите тип"
                        onInputChange={changeZone}
                        value={zonning.accessZoneOnOut ? zonning.accessZoneOnOut.name : ''}
                        list={localZonesOut.map((elem) => elem.name)}
                        disabled={!useZonning}
                    />
                </div>
            </div>
        </div>
    );
};

export const AccessPointsGeneral = memo(AccessPointsGeneralInner);
