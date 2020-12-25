import React, { memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Device } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { triggerSensor } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { Sensors } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { ModuleElement } from './ModuleElement/ModuleElement';

interface ItemDriveProps {
    item: Sensors;
}

export interface TriggeredSensor {
    device: Device;
    sensorUuid: string | number;
    sensorName: string;
    enabled: boolean;
}

const ModulesDirectionInner = (props: ItemDriveProps) => {
    const dispatch = useDispatch();
    const { selectedDevice } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    const switchTrigger = (uuid: number | string, name: string, enabled: boolean) => {
        if (selectedDevice) {
            const item = {
                device: selectedDevice,
                sensorUuid: uuid,
                sensorName: name,
                enabled: enabled
            };

            // console.log(uuid, name, enabled);

            dispatch(triggerSensor(item));
        }
    };

    return (
        <div className="access-sequence-enter">
            <CustomScrollbar>
                {props.item.map((elem) => {
                    return (
                        <ModuleElement
                            key={elem.uuid}
                            sensor={elem}
                            switchTrigger={switchTrigger}
                            enabledCounter={props.item.filter((elem) => elem.enabled).length}
                        />
                    );
                })}
            </CustomScrollbar>
        </div>
    );
};

export const ModulesDirection = memo(ModulesDirectionInner);
