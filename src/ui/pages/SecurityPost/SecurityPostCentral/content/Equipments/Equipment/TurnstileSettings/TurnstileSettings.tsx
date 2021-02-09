import React, { useState, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { triggerDeviceMode, oneTimePass, changeAllDirection } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { Buttons } from 'ui/components/Buttons/Buttons';
import './TurnstileSettings.scss';

const TurnstileSettingsInner = () => {
    const dispatch = useDispatch();
    const { selectedDevice } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);
    const [isLetInOneOn, setIsLetInOneOn] = useState(false);
    const [isLetOutOneOn, setIsLetOutOneOn] = useState(false);

    const activeFirstSlider = () => {
        if (selectedDevice) {
            dispatch(changeAllDirection(selectedDevice, 'free'));
        }
    };

    const activeSecondSlider = () => {
        if (selectedDevice) {
            dispatch(changeAllDirection(selectedDevice, 'control'));
        }
    };

    const activeThirdSlider = () => {
        if (selectedDevice) {
            dispatch(changeAllDirection(selectedDevice, 'block'));
        }
    };

    const equipmentOneTimePass = (direction: string) => {
        if (selectedDevice) {
            dispatch(oneTimePass(selectedDevice, direction));
        }

        if (direction === 'enter') {
            setIsLetInOneOn(true);

            setTimeout(() => {
                setIsLetInOneOn(false);
            }, 5000);
        } else if (direction === 'exit') {
            setIsLetOutOneOn(true);

            setTimeout(() => {
                setIsLetOutOneOn(false);
            }, 5000);
        }
    };

    const changeEquipmentMode = (direction: string, accessMode: string) => {
        if (selectedDevice) {
            dispatch(triggerDeviceMode(selectedDevice, direction, accessMode));
        }
    };

    return (
        <div className="turnstile">
            <div className="turnstile__modes">
                <div className="turnstile__modes-title">
                    <div className="p--md--normal">Режим</div>
                </div>

                <div className="turnstile__modes-slider turnstile-slider">
                    <div
                        className={`
                            turnstile-slider__child
                            ${
                                selectedDevice && selectedDevice.accessModeIn === 0 && selectedDevice.accessModeOut === 0
                                    ? 'turnstile-slider__child--active-first'
                                    : ''
                            }
                        `}
                        onClick={activeFirstSlider}
                    >
                        <button type="button" className="turnstile-slider__child-buttons">
                            <div className="turnstile-slider__child-ring" />
                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Свободный</div>
                        </div>
                    </div>

                    <div
                        className={`
                            turnstile-slider__spliter
                            ${
                                selectedDevice && selectedDevice.accessModeIn === 0 && selectedDevice.accessModeOut === 0
                                    ? 'turnstile-slider__spliter--active-first'
                                    : ''
                            }
                            ${
                                selectedDevice && selectedDevice.accessModeIn === 1 && selectedDevice.accessModeOut === 1
                                    ? 'turnstile-slider__spliter--active-second'
                                    : ''
                            }
                            first-spliter
                        `}
                    >
                        <div className="turnstile-slider__spliter-element" />
                    </div>

                    <div
                        className={`turnstile-slider__child ${
                            selectedDevice && selectedDevice.accessModeIn === 1 && selectedDevice.accessModeOut === 1
                                ? 'turnstile-slider__child--active-second'
                                : ''
                        }`}
                        onClick={activeSecondSlider}
                    >
                        <button type="button" className="turnstile-slider__child-buttons">
                            <div className="turnstile-slider__child-ring" />

                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Контроль</div>
                        </div>
                    </div>

                    <div
                        className={`
                            turnstile-slider__spliter
                            ${
                                selectedDevice && selectedDevice.accessModeIn === 1 && selectedDevice.accessModeOut === 1
                                    ? 'turnstile-slider__spliter--active-second'
                                    : ''
                            }
                            ${
                                selectedDevice && selectedDevice.accessModeIn === -1 && selectedDevice.accessModeOut === -1
                                    ? 'turnstile-slider__spliter--active-third'
                                    : ''
                            }
                            second-spliter
                        `}
                    >
                        <div className="turnstile-slider__spliter-element" />
                    </div>

                    <div
                        className={`turnstile-slider__child ${
                            selectedDevice && selectedDevice.accessModeIn === -1 && selectedDevice.accessModeOut === -1
                                ? 'turnstile-slider__child--active-third'
                                : ''
                        }`}
                        onClick={activeThirdSlider}
                    >
                        <button type="button" className="turnstile-slider__child-buttons">
                            <div className="turnstile-slider__child-ring" />

                            <div className="turnstile-slider__child-dot" />
                        </button>

                        <div className="turnstile-slider__child-titles">
                            <div className="p--sm--normal">Блокировка</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="turnstile__control">
                <div className="turnstile__control-title">
                    <div className="p--md--normal">Контроль</div>
                </div>

                <div className="turnstile__control-buttons turnstile-control__buttons">
                    <div className="turnstile-control__buttons-grups">
                        <Buttons
                            name="LetInOne"
                            size="m"
                            typical
                            active={isLetInOneOn}
                            onPress={() => equipmentOneTimePass('enter')}
                            prompt="Разовый вход"
                        />

                        <Buttons
                            name="LetInMany"
                            size="m"
                            typical
                            active={selectedDevice?.accessModeIn === 0}
                            onPress={() => changeEquipmentMode('enter', 'free')}
                            prompt="Многократный вход"
                        />

                        <Buttons
                            name={selectedDevice?.accessModeIn === -1 ? 'BlockLock' : 'BlockUnLock'}
                            size="m"
                            typical
                            active={selectedDevice?.accessModeIn === -1}
                            danger
                            onPress={() => changeEquipmentMode('enter', 'blocked')}
                            prompt="Блокировка входа"
                        />
                    </div>

                    <div className="turnstile-control__buttons-grups">
                        <Buttons
                            name="LetOutOne"
                            size="m"
                            typical
                            active={isLetOutOneOn}
                            onPress={() => equipmentOneTimePass('exit')}
                            prompt="Разовый выход"
                        />

                        <Buttons
                            name="LetOutMany"
                            size="m"
                            typical
                            active={selectedDevice?.accessModeOut === 0}
                            onPress={() => changeEquipmentMode('exit', 'free')}
                            prompt="Многократный выход"
                        />

                        <Buttons
                            name={selectedDevice?.accessModeOut === -1 ? 'BlockLock' : 'BlockUnLock'}
                            size="m"
                            typical
                            active={selectedDevice?.accessModeOut === -1}
                            danger
                            onPress={() => changeEquipmentMode('exit', 'blocked')}
                            prompt="Блокировка выход"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TurnstileSettings = memo(TurnstileSettingsInner);
