import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDevicePort,
    setupWizardDeviceBaudrate,
    setupWizardDeviceParity,
    setupWizardDeviceBitCount,
    setupWizardDeviceStopBit,
    requestDevicePorts,
    setupWizardDeviceConfig
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';

const ControllerSetupsRsInner = () => {
    const dispatch = useDispatch();
    const { deviceSetup, deviceConfigs, deviceConfig } = useSelector(
        (state: State) => state.setupWizard.setupWizardEquipments.configs,
        shallowEqual
    );

    const initialState = {
        speedList: ['9600', '19200', '38400', '57600', '115200'],
        parityList: ['Да', 'Нет'],
        bitList: ['7', '8'],
        stopBitList: ['1', '2']
    };

    const [accessPointSettings] = useState(initialState);

    // REQUEST DEVICE PORTS
    useEffect(() => {
        dispatch(requestDevicePorts());
    }, [dispatch]);

    // DEFINED AND SET DEFAULT DEVICE PORT
    useEffect(() => {
        if (deviceSetup.devicePorts.ports.length > 0) {
            dispatch(setupWizardDevicePort(deviceSetup.devicePorts.ports[0]));
        }
    }, [dispatch, deviceSetup.devicePorts.ports]);

    // DEFINED AND SET DEFAULT DEVICE CONFIG
    useEffect(() => {
        if (deviceConfigs.length > 0) {
            dispatch(setupWizardDeviceConfig(deviceConfigs[0]));
        }
    }, [dispatch, deviceConfigs]);

    // APPLY DEFALT RS CONFIG
    useEffect(() => {
        if (deviceConfig) {
            dispatch(setupWizardDeviceBaudrate(deviceConfig.baudrate));
            dispatch(setupWizardDeviceParity(deviceConfig.parity));
            dispatch(setupWizardDeviceBitCount(deviceConfig.bitCount));
            dispatch(setupWizardDeviceStopBit(deviceConfig.stopBits));
        }
    }, [dispatch, deviceConfig]);

    return (
        <>
            <div className="device-settings__body-top">
                <div className="port-settings">
                    <Inputs
                        label="Порт"
                        type="text"
                        name="eaccessPointPort"
                        onInputChange={(e) => {
                            dispatch(setupWizardDevicePort(e.target.value));
                        }}
                        value={deviceSetup.devicePorts.port}
                        list={deviceSetup.devicePorts.ports}
                    />

                    <Buttons name="Refresh" size="m" typical onPress={() => dispatch(requestDevicePorts())} />
                </div>

                <Inputs
                    label="Скорость"
                    type="number"
                    name="accessPointSpeed"
                    onInputChange={(e) => {
                        dispatch(setupWizardDeviceBaudrate(+e.target.value));
                    }}
                    value={deviceSetup.baudrate}
                    list={accessPointSettings.speedList}
                />
            </div>

            <div className="device-settings__body-bottom">
                <Inputs
                    label="Четность"
                    type="text"
                    name="accessPointsParity"
                    onInputChange={(e) => {
                        e.target.value === 'Нет' ? dispatch(setupWizardDeviceParity(0)) : dispatch(setupWizardDeviceParity(1));
                    }}
                    value={deviceSetup.parity === 1 ? 'Да' : 'Нет'}
                    list={accessPointSettings.parityList}
                />

                <Inputs
                    label="Биты данных"
                    type="text"
                    name="accessPointsBits"
                    onInputChange={(e) => {
                        dispatch(setupWizardDeviceBitCount(+e.target.value));
                    }}
                    value={deviceSetup.bitCount}
                    list={accessPointSettings.bitList}
                />

                <Inputs
                    label="Стоповые биты"
                    type="text"
                    name="accessPointsStopBits"
                    onInputChange={(e) => {
                        dispatch(setupWizardDeviceStopBit(+e.target.value));
                    }}
                    value={deviceSetup.stopBit}
                    list={accessPointSettings.stopBitList}
                />
            </div>
        </>
    );
};

export const ControllerSetupsRs = memo(ControllerSetupsRsInner);
