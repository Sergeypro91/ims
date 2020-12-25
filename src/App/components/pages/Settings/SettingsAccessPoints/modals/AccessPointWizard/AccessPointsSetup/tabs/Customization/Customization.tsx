import React, { useState, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsAccessPointsPointPort,
    settingsAccessPointsPointSpeed,
    settingsAccessPointsPointParity,
    settingsAccessPointsPointBit,
    settingsAccessPointsPointStopBit,
    settingsAccessPointsPointControllerType,
    settingsAccessPointsPointZoneToEnter,
    settingsAccessPointsPointZoneToExit,
    settingsAccessPointsPointSerialNumber,
    settingsAccessPointsPointBusPort
} from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { СheckMark } from 'assets/images/svgr/check-mark';
import { ModalWarning } from 'assets/images/svgr/modal-warning';
import './Customization.scss';

const CustomizationInner = () => {
    const dispatch = useDispatch();
    const { accessPoint } = useSelector(
        (state: State) => state.settings.settingsAccessPoints.accessPointsWizard,
        shallowEqual
    );

    const [accessPointPortList] = useState(['COM1', 'COM2']);
    const [accessPointSpeedList] = useState(['38400', '12000']);
    const [accessPointParityList] = useState(['Да', 'Нет']);
    const [accessPointBitList] = useState(['1', '2']);
    const [accessPointStopBitList] = useState(['8', '9']);
    const [accessPointControllerTypeList] = useState(['8', '9']);
    const [accessPointZoneToEnterList] = useState(['Зона №1', 'Зона №2']);
    const [accessPointZoneToExitList] = useState(['Отдел кадров', 'Отдел разработки']);

    const [controllerIsFinfd, setControllerIsFinfd] = useState(false);
    const [message, setMessage] = useState(false);

    const findController = () => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * Math.floor(2));

            if (random === 1) {
                dispatch(settingsAccessPointsPointSerialNumber(`${Math.floor(Math.random() * 10000000000)}`));
                setControllerIsFinfd(true);
                setMessage(true);
            } else {
                dispatch(settingsAccessPointsPointSerialNumber(''));
                setControllerIsFinfd(true);
                setMessage(false);
            }
        }, 2000);
    };

    return (
        <div className="access-points-setup__customization-tab">
            <div className="customization-tab__header">
                <Inputs
                    label="Порт"
                    type="text"
                    name="eaccessPointPort"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointPort(e.target.value));
                    }}
                    value={accessPoint.port}
                    list={accessPointPortList}
                />

                <Inputs
                    label="Скорость"
                    type="text"
                    name="accessPointSpeed"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointSpeed(e.target.value));
                    }}
                    value={accessPoint.speed}
                    list={accessPointSpeedList}
                />

                <Inputs
                    label="Четность"
                    type="text"
                    name="accessPointsParity"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointParity(e.target.value));
                    }}
                    value={accessPoint.parity}
                    list={accessPointParityList}
                />

                <Inputs
                    label="Биты данных"
                    type="text"
                    name="accessPointsBits"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointBit(e.target.value));
                    }}
                    value={accessPoint.bit}
                    list={accessPointBitList}
                />

                <Inputs
                    label="Стоповые биты"
                    type="text"
                    name="accessPointsStopBits"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointStopBit(e.target.value));
                    }}
                    value={accessPoint.stopBit}
                    list={accessPointStopBitList}
                />
            </div>

            <div className="customization-tab__body">
                <Inputs
                    label="Тип контроллера"
                    type="text"
                    name="accessPointsControllerType"
                    placeholder="Выберите тип"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointControllerType(e.target.value));
                    }}
                    value={accessPoint.controllerType}
                    list={accessPointControllerTypeList}
                />

                <Inputs
                    label="Зона доступа на вход"
                    type="text"
                    name="accessPointsZoneToEnter"
                    placeholder="Выберите тип"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointZoneToEnter(e.target.value));
                    }}
                    value={accessPoint.zoneToEnter}
                    list={accessPointZoneToEnterList}
                />

                <Inputs
                    label="Зона доступа на выход"
                    type="text"
                    name="accessPointsZoneToExit"
                    placeholder="Выберите тип"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointZoneToExit(e.target.value));
                    }}
                    value={accessPoint.zoneToExit}
                    list={accessPointZoneToExitList}
                />
            </div>

            <div className="customization-tab__footer">
                <Buttons name="Setup" label="Определить контроллер" typical onPress={findController} />

                {controllerIsFinfd || accessPoint.serialNumber !== '' ? (
                    <>
                        <Inputs
                            label="Серийный номер"
                            type="text"
                            name="accessPointsSerialNumber"
                            placeholder="Номер не указан"
                            readonly
                            onInputChange={(e) => {
                                dispatch(settingsAccessPointsPointSerialNumber(e.target.value));
                            }}
                            value={accessPoint.serialNumber}
                        />

                        <Inputs
                            label="Номер на шине"
                            type="text"
                            name="accessPointsBusPort"
                            placeholder="Номер не указан"
                            onInputChange={(e) => {
                                dispatch(settingsAccessPointsPointBusPort(e.target.value));
                            }}
                            value={accessPoint.busPort}
                        />
                    </>
                ) : null}

                {controllerIsFinfd && (
                    <div className="customization-tab__footer-message">
                        <div
                            className={`customization-tab__footer-message-icon ${
                                message ? 'icon--success' : 'icon--warning'
                            }`}>
                            {message ? <СheckMark /> : <ModalWarning />}
                        </div>

                        <div className="customization-tab__footer-message-label">
                            <div className="p--sm--normal">
                                {message ? 'Тип контроллера успешно определен.' : 'Определить контроллер не удалось.'}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const Customization = memo(CustomizationInner);
