import React, { memo } from 'react';
import { Sensor } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { Switch } from 'App/components/global/Switch/Switch';
import './ModuleElement.scss';

interface ModuleElementProps {
    sensor: Sensor;
    switchTrigger: (uuid: number | string, name: string, enabled: boolean) => void;
    enabledCounter: number;
}

const ModuleElementInner = (props: ModuleElementProps) => {
    const triggerSwitcher = (uuid: number | string, name: string, enabled: boolean) => {
        props.switchTrigger(uuid, name, enabled);
    };

    return (
        <div className="module-element">
            <div
                className={`module-element__name ${
                    props.enabledCounter <= 1 && props.sensor.enabled ? 'inactive' : ''
                }`}>
                <div className="p--md--bold">{props.sensor.name}</div>
            </div>

            <Switch
                isActive={props.sensor.enabled}
                isDisabled={props.enabledCounter <= 1 && props.sensor.enabled}
                onTrigger={() => triggerSwitcher(props.sensor.uuid, props.sensor.name, props.sensor.enabled)}
            />
        </div>
    );
};

export const ModuleElement = memo(ModuleElementInner);
