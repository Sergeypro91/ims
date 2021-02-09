import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDeviceAccessModuleAdd,
    setupWizardDeviceAccessModuleRemove,
    setupWizardDeviceAccessModuleDirection
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { AccordionModulees } from 'ui/components/AccordionModulees/AccordionModulees';
import { ModuleSetup } from './ModuleSetup/ModuleSetup';
import { ModuleTesting } from './ModuleTesting/ModuleTesting';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './AccessPointsModules.scss';

interface InitialState {
    eaccessPointModuleClass: null | string;
    accessPointModuleType: null | string;
}

const AccessPointsModulesInner = () => {
    const dispatch = useDispatch();
    const { accessModules } = useSelector((state: State) => state.setupWizard.setupWizardEquipments, shallowEqual);
    const initialState = {
        eaccessPointModuleClass: null,
        accessPointModuleType: null
    };

    const [inputsState, setInputsState] = useState<InitialState>(initialState);

    const accessModulesClassType = [
        {
            class: 'Модуль идентификации',
            type: ['Считыватель бесконтактных карт EM Marine', 'Биометрический считыватель отпечатков пальцев']
        },
        {
            class: 'Модуль контроля',
            type: ['Терминал распознавания лиц', 'Алкотестер', 'Тепловизор']
        }
    ];

    useEffect(() => {
        if (inputsState.eaccessPointModuleClass === null) {
            setInputsState({
                ...inputsState,
                eaccessPointModuleClass: accessModulesClassType[0].class,
                accessPointModuleType: accessModulesClassType[0].type[0]
            });
        }

        accessModulesClassType.forEach((elem, id) => {
            if (inputsState.eaccessPointModuleClass && inputsState.accessPointModuleType) {
                if (elem.class === inputsState.eaccessPointModuleClass) {
                    if (!accessModulesClassType[id].type.includes(inputsState.accessPointModuleType)) {
                        setInputsState({
                            ...inputsState,
                            accessPointModuleType: accessModulesClassType[id].type[0]
                        });
                    }
                }
            }
        });
    }, [inputsState, accessModulesClassType]);

    const addModule = () => {
        const modulesArr = [...accessModules];

        const newModule = {
            index: accessModules.length,
            class: inputsState.eaccessPointModuleClass ? inputsState.eaccessPointModuleClass : '',
            type: inputsState.accessPointModuleType ? inputsState.accessPointModuleType : '',
            name: inputsState.accessPointModuleType ? inputsState.accessPointModuleType : '',
            direction: 'Exit',
            sequence: {
                onEnter: false,
                onExit: false
            }
        };

        modulesArr.push(newModule);

        dispatch(setupWizardDeviceAccessModuleAdd(newModule));
    };

    const directionToEnter = (index: number) => {
        const newModules = [...accessModules];

        if (newModules[findIndexFunc(accessModules, index, 'index')].direction === 'Exit') {
            newModules[findIndexFunc(accessModules, index, 'index')].direction = 'Enter';
        }

        dispatch(setupWizardDeviceAccessModuleDirection(newModules));
    };

    const directionToExit = (index: number) => {
        const newModules = [...accessModules];

        if (newModules[findIndexFunc(accessModules, index, 'index')].direction === 'Enter') {
            newModules[findIndexFunc(accessModules, index, 'index')].direction = 'Exit';
        }

        dispatch(setupWizardDeviceAccessModuleDirection(newModules));
    };

    const deleteModule = (index: number) => {
        const newModules = [...accessModules];

        newModules.splice(findIndexFunc(accessModules, index, 'index'), 1);

        dispatch(setupWizardDeviceAccessModuleRemove(newModules));
    };

    return (
        <div className="access-points-modules">
            <div className="access-points-modules__header">
                <div className="access-points-modules__header-title">
                    <div className="p--md--bold">Выберите модуль доступа</div>
                </div>

                <div className="access-points-modules__header-settings">
                    <Inputs
                        label="Класс модуля"
                        type="text"
                        name="eaccessPointModuleClass"
                        onInputChange={(e) => {
                            console.log(e.target.value);
                            setInputsState({
                                ...inputsState,
                                eaccessPointModuleClass: e.target.value
                            });
                        }}
                        value={inputsState.eaccessPointModuleClass ? inputsState.eaccessPointModuleClass : ''}
                        list={
                            accessModulesClassType.length !== 0 && inputsState.eaccessPointModuleClass
                                ? accessModulesClassType.map((obj) => {
                                      return obj.class;
                                  })
                                : ['']
                        }
                    />

                    <Inputs
                        label="Тип модуля"
                        type="text"
                        name="accessPointModuleType"
                        onInputChange={(e) => {
                            console.log(e.target.value);
                            setInputsState({
                                ...inputsState,
                                accessPointModuleType: e.target.value
                            });
                        }}
                        value={inputsState.accessPointModuleType ? inputsState.accessPointModuleType : ''}
                        list={
                            accessModulesClassType.length !== 0 && inputsState.accessPointModuleType
                                ? accessModulesClassType[
                                      accessModulesClassType.findIndex((obj) => obj.class === inputsState.eaccessPointModuleClass)
                                  ].type
                                : ['']
                        }
                    />

                    <Buttons
                        name="AddModule"
                        label="Добавить"
                        typical
                        disable={inputsState.eaccessPointModuleClass === null || inputsState.accessPointModuleType === null}
                        onPress={addModule}
                    />
                </div>
            </div>

            <div className="access-points-modules__body">
                <CustomScrollbar>
                    {accessModules.length < 1 ? (
                        <div className="access-points-modules__body-empty">
                            <div className="p--md--normal">
                                Список модулей пуст. Выберите и добавьте необходимые модули в списке выше, чтобы перейти к этапу настройки
                            </div>
                        </div>
                    ) : (
                        accessModules.map((elem) => {
                            return (
                                <AccordionModulees
                                    key={elem.index}
                                    header={elem.name}
                                    activator={() => console.log(elem.name)}
                                    directionToEnter={() => directionToEnter(elem.index)}
                                    directionToExit={() => directionToExit(elem.index)}
                                    delete={() => deleteModule(elem.index)}
                                    direction={elem.direction}
                                >
                                    <>
                                        {elem.class === 'Модуль идентификации' && <ModuleTesting />}
                                        {elem.class === 'Модуль контроля' && <ModuleSetup />}
                                    </>
                                </AccordionModulees>
                            );
                        })
                    )}
                </CustomScrollbar>
            </div>
        </div>
    );
};

export const AccessPointsModules = memo(AccessPointsModulesInner);
