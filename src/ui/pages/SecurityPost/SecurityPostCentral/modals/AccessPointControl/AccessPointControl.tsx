import React, { memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { triggerDevice } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { useHistory, useLocation } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Tourniquet } from 'assets/images/svgr/tourniquet';
import { Barrier } from 'assets/images/svgr/barrier';
import { RfidCard } from 'assets/images/svgr/rfid-card';
import { AccessModules } from './AccessModules/AccessModules';
// import { Statistics } from './Statistics/Statistics';
import './AccessPointControl.scss';

const AccessPointControlInner = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedDevice } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    return (
        <Modal
            modalName="access-point-control"
            modalHeader="Управление точкой доступа"
            denyButtonLabel="Закрыть"
            onDenyClick={() => history.push(location.pathname.replace('/access-point-control', ''))}
        >
            <>
                {selectedDevice && (
                    <div className="access-point-control__general">
                        <div className="access-point__description">
                            <div className="access-point__description-left">
                                <div className={`access-point__description-elem ${selectedDevice.enabled ? 'active' : 'inactive'}`}>
                                    <div
                                        className={`access-point__description-elem-icon ${selectedDevice.enabled ? 'active' : 'inactive'}`}
                                    >
                                        {selectedDevice.type === 1 && <Tourniquet />}
                                        {selectedDevice.type === 2 && <Barrier />}
                                        {selectedDevice.type === 3 && <RfidCard />}
                                    </div>

                                    <div className="p--md--bold">{selectedDevice.name}</div>
                                </div>

                                <div className="access-point__description-elem">
                                    <div className="p--md--bold">{selectedDevice.description}</div>
                                </div>
                            </div>

                            <div className="access-point__description-right">
                                <div className="access-point__description-elem">
                                    <div className="p--sm--normal">Контроллер:</div>

                                    <div className="p--md--bold">
                                        {selectedDevice.controllerTypeName ? selectedDevice.controllerTypeName : '_______'}
                                    </div>
                                </div>

                                <div className="access-point__description-elem">
                                    <div className="p--sm--normal">Сетевой адрес:</div>

                                    <div className="p--md--bold">
                                        {selectedDevice.connectionHost ? selectedDevice.connectionHost : '_______'}
                                    </div>
                                </div>

                                <div className="access-point__description-elem">
                                    <div className="p--sm--normal">Версия ПО:</div>

                                    <div className="p--md--bold">
                                        {selectedDevice.softwareVersion ? selectedDevice.softwareVersion : '_______'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="access-point__button">
                            <Buttons
                                name="Read"
                                label={selectedDevice.enabled ? 'Отключить' : 'Включить'}
                                typical
                                onPress={() => dispatch(triggerDevice(selectedDevice))}
                            />
                        </div>
                    </div>
                )}

                <TabBar>
                    <Tab header="Модули доступа" index={0}>
                        <AccessModules />
                    </Tab>

                    {/* <Tab header="Статистика" index={1}>
                        <Statistics />
                    </Tab> */}
                </TabBar>
            </>
        </Modal>
    );
};

export const AccessPointControl = memo(AccessPointControlInner);
