import React, { useState, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsAccessPointsPointName,
    settingsAccessPointsPointConnectionType,
    settingsAccessPointsPointDescription
} from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import './General.scss';

const GeneralInner = () => {
    const dispatch = useDispatch();
    const { accessPoint } = useSelector(
        (state: State) => state.settings.settingsAccessPoints.accessPointsWizard,
        shallowEqual
    );
    const [accessPointTypeList] = useState(['RS-485', 'Ethernet']);

    return (
        <div className="access-points-setup__general-tab">
            <div className="general-tab__header">
                <Inputs
                    label="Наименование точки доступа"
                    type="text"
                    name="eaccessPointName"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointName(e.target.value));
                    }}
                    value={accessPoint.name}
                />

                <Inputs
                    label="Тип подключения"
                    type="text"
                    name="accessPointType"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointConnectionType(e.target.value));
                    }}
                    value={accessPoint.connectionType}
                    list={accessPointTypeList}
                />
            </div>

            <div className="general-tab__body">
                <Inputs
                    name="templates"
                    label="Краткое описание"
                    onInputChange={(e) => {
                        dispatch(settingsAccessPointsPointDescription(e.target.value));
                    }}
                    type="textarea"
                    value={accessPoint.description}
                />
            </div>
        </div>
    );
};

export const General = memo(GeneralInner);
