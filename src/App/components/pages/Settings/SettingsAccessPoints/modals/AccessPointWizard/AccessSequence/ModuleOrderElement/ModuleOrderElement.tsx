import React, { memo } from 'react';
import { ArrowTick } from 'assets/images/svgr/arrow-tick';
import { Switch } from 'App/components/global/Switch/Switch';
import './ModuleOrderElement.scss';

interface ModuleOrderElementProps {
    key: string | number;
    index: number;
    name: string;
    isOn: boolean;
    isNextOn: boolean;
    switchTrigger: () => void;
    arrowUpTrigger: () => void;
    arrowDownTrigger: () => void;
}

const ModuleOrderElementInner = (props: ModuleOrderElementProps) => {
    return (
        <div className={`module-order ${props.isOn ? 'active' : 'inactive'}`}>
            <div className="module-order__number">
                <div className="p--md--bold">{props.index}</div>
            </div>

            <div className="module-order__name">
                <div className="p--md--bold">{props.name}</div>
            </div>

            <Switch isActive={props.isOn} onTrigger={props.switchTrigger} />

            <div className="module-order__arrows">
                <button
                    type="button"
                    className={`module-order__arrows-up ${props.index === 1 && props.isOn ? 'disabled' : ''}`}
                    onClick={props.arrowUpTrigger}>
                    <ArrowTick />
                </button>

                <button
                    type="button"
                    className={`module-order__arrows-down ${!props.isNextOn && props.isOn ? 'disabled' : ''}`}
                    onClick={props.arrowDownTrigger}>
                    <ArrowTick />
                </button>
            </div>
        </div>
    );
};

export const ModuleOrderElement = memo(ModuleOrderElementInner);
