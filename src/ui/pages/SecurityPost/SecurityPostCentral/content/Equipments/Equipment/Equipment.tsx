import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { Device } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { Event } from 'redux/App/appTypes';
import { securityPostCentralSelectDevice } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import _ from 'lodash';
import openModal from 'utils/openModal/openModal';
import { Tourniquet } from 'assets/images/svgr/tourniquet';
import { Barrier } from 'assets/images/svgr/barrier';
import { RfidCard } from 'assets/images/svgr/rfid-card';
import { Profile } from 'assets/images/svgr/userIcon';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Pin } from 'assets/images/svgr/pin';
import { ModalError } from 'assets/images/svgr/modal-error';
import { TurnstileSettings } from './TurnstileSettings/TurnstileSettings';
import './Equipment.scss';

interface EquipmentProps {
    device: Device;
}

export const EquipmentInner = (props: EquipmentProps) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { event } = useSelector((state: State) => state.app.wsEvent, shallowEqual);
    const [currentEvent, setCurrentEvent] = useState<null | Event>(null);
    const [equipmentToFront, setEquipmentToFront] = useState(false);
    const [isOnTheWindow, setIsOnTheWindow] = useState(false);
    const [order, setOrder] = useState(-1);
    const equipment = useRef<HTMLDivElement>(null);
    const equipmentSettings = useRef<HTMLDivElement>(null);
    const pin = useRef<HTMLDivElement>(null);

    const shownHideAnim = () => {
        if (equipmentSettings.current) {
            const targetElement = equipmentSettings.current.classList!;

            if (targetElement.contains('hidden') && targetElement.contains('shown')) {
                targetElement.add('shown');
            } else if (targetElement.contains('hidden')) {
                targetElement.remove('hidden');
                targetElement.add('shown');
            } else {
                targetElement.remove('shown');
                targetElement.add('hidden');
            }
        }
    };

    const triggerFilterDebounce = _.debounce(shownHideAnim, 250);

    const onAnimEnd = () => {
        if (equipmentSettings.current?.classList!.contains('hidden')) {
            setEquipmentToFront(!equipmentToFront);
        }
    };

    const closeHandler = useCallback(() => {
        if (!isOnTheWindow) {
            triggerFilterDebounce();
        }
    }, [isOnTheWindow, triggerFilterDebounce]);

    const changeOrder = () => {
        if (!pin.current?.classList!.contains('pin')) {
            pin.current?.classList.add('pin');
            equipment.current?.setAttribute('style', `order:${order};`);

            setOrder(order - 1);
        } else {
            pin.current?.classList.remove('pin');
            equipment.current?.removeAttribute('style');
        }
    };

    useEffect(() => {
        if (equipmentToFront) {
            document.addEventListener('click', closeHandler);

            return () => document.removeEventListener('click', closeHandler);
        }

        return undefined;
    }, [equipmentToFront, closeHandler]);

    useEffect(() => {
        if (event) {
            if (props.device.name === event.payload.deviceName && (event.code === 10004 || event.code === 10002)) {
                setCurrentEvent(event);
            }
        }
    }, [event, props.device.name]);

    useEffect(() => {
        let clearEventTimer: number;

        if (currentEvent) {
            clearEventTimer = window.setTimeout(() => {
                setCurrentEvent(null);
            }, 5000);
        }

        return () => {
            clearTimeout(clearEventTimer);
        };
    }, [currentEvent]);

    const accessPointDriver = (device: Device) => {
        dispatch(securityPostCentralSelectDevice(device.uuid));

        openModal('access-point-control', history);
    };

    const accessPointSettings = (device: Device) => {
        dispatch(securityPostCentralSelectDevice(device.uuid));

        triggerFilterDebounce();
    };

    const convertTime = (timestamp: string) => {
        const date = new Date(timestamp);
        const time = `${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${
            (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
        }`;

        return time;
    };

    return (
        <div
            ref={equipment}
            className={`
                equipment ${equipmentToFront ? 'equipment--front' : ''}
                ${props.device.enabled ? 'active' : 'inactive'}
                ${currentEvent?.code === 10002 ? 'error' : ''}
            `}
            onAnimationStart={() => setEquipmentToFront(true)}
            onAnimationEnd={onAnimEnd}
        >
            <div className="equipment__wrapper">
                <div className="equipment__header">
                    <div className={`equipment__header-icon ${props.device.enabled ? 'active' : 'inactive'}`}>
                        {props.device.type === 1 && <Tourniquet />}
                        {props.device.type === 2 && <Barrier />}
                        {props.device.type === 3 && <RfidCard />}
                    </div>

                    <div className="equipment__header-description">
                        <div className="description__name">
                            <p className="p--md--bold">{props.device.name}</p>
                        </div>

                        {currentEvent && (
                            <div className="description__time">
                                <p className="p--sm--thin">{convertTime(currentEvent.payload.date)}</p>
                            </div>
                        )}
                    </div>

                    <div ref={pin} className={`equipment__pin-to-order ${currentEvent ? 'top' : 'centre'}`} onClick={changeOrder}>
                        <Pin />
                    </div>
                </div>

                <div className="equipment__body">
                    {props.device.enabled && (
                        <div className="equipment__body-photo">
                            {currentEvent && currentEvent.payload.photo !== 'Не определено' && currentEvent.payload.photo ? (
                                <img src={`data:image/jpeg;base64, ${currentEvent.payload.photo}`} alt="Emploee" />
                            ) : (
                                <Profile />
                            )}
                        </div>
                    )}

                    <div className="equipment__body-content">
                        <div className="content__description">
                            {currentEvent &&
                                currentEvent?.code !== 10002 &&
                                props.device.enabled &&
                                (currentEvent.payload.personFirstName ? (
                                    <>
                                        <div className="body-description__employee-name">
                                            <p className="p--md--bold">{currentEvent.payload.personLastName}</p>

                                            <p className="p--md--bold">{`${currentEvent.payload.personFirstName} ${currentEvent.payload.personMiddleName}`}</p>
                                        </div>

                                        <div className="body-description__employee-position">
                                            <p className="p--sm--normal">{currentEvent.payload.position}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="body-description__free-passage">
                                        <p className="p--md--bold">Свободный проход</p>
                                    </div>
                                ))}

                            {!currentEvent && props.device.enabled && (
                                <>
                                    <div className="body-description__mode-title">
                                        <p className="p--md--bold">Режим</p>
                                    </div>

                                    <div className="body-description__mode-type">
                                        <div className="enter">
                                            <p className="p--sm--normal">Вход:</p>

                                            <p className="p--md--normal">
                                                {props.device.accessModeIn === 0 && 'Свободный проход'}
                                                {props.device.accessModeIn === 1 && 'Контроль'}
                                                {props.device.accessModeIn === -1 && 'Блокировка'}
                                            </p>
                                        </div>

                                        <div className="exit">
                                            <p className="p--sm--normal">Выход:</p>

                                            <p className="p--md--normal">
                                                {props.device.accessModeOut === 0 && 'Свободный проход'}
                                                {props.device.accessModeOut === 1 && 'Контроль'}
                                                {props.device.accessModeOut === -1 && 'Блокировка'}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {currentEvent?.code === 10002 && props.device.enabled && (
                                <div className="body-description__error">
                                    <ModalError />

                                    <p className="p--sm--bold">Внимание! Предъявлен неизвестный ключ</p>
                                </div>
                            )}

                            {!props.device.enabled && (
                                <div className="body-description__error">
                                    <ModalError />

                                    <p className="p--sm--bold">Внимание! Точка доступа отключена</p>
                                </div>
                            )}
                        </div>

                        <div className="content__drive-equipment">
                            <Buttons
                                name="Gear"
                                size="m"
                                typical={!!props.device.enabled}
                                disable={!props.device.enabled}
                                active={equipmentToFront}
                                onPress={props.device.enabled ? () => accessPointSettings(props.device) : undefined}
                            />

                            <Buttons
                                name="Layers"
                                size="m"
                                typical={!!props.device.id}
                                disable={!props.device.id}
                                onPress={props.device.id ? () => accessPointDriver(props.device) : undefined}
                            />

                            <Buttons
                                name="ScanFace"
                                size="m"
                                // typical
                                disable
                                onPress={() => console.log('Click!')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={equipmentSettings}
                className="equipment__settings hidden"
                onMouseOver={() => setIsOnTheWindow(true)}
                onFocus={() => void 0}
                onMouseLeave={() => setIsOnTheWindow(false)}
                onBlur={() => void 0}
            >
                {props.device.type === 1 && <TurnstileSettings />}
                {props.device.type === 2 && <div>123</div>}
                {props.device.type === 3 && <div>123</div>}
            </div>
        </div>
    );
};

export const Equipment = memo(EquipmentInner);
