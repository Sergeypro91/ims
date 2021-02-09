import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import { setupWizardDeviceAccessModuleDirection } from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { ModuleOrderElement } from '../ModuleOrderElement/ModuleOrderElement';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './Enter.scss';

const EnterInner = () => {
    const dispatch = useDispatch();
    const { accessModules } = useSelector((state: State) => state.setupWizard.setupWizardEquipments, shallowEqual);

    const spliceToLastOf = (arr: any[]) => {
        let counter = 0;

        arr.forEach((val) => {
            if (val.sequence.onEnter) {
                counter += 1;
            }
        });

        console.log(counter);

        return counter;
    };

    const switchTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index, 'index');
        const moovingElem = newModules[currentIndex];

        newModules[currentIndex].sequence.onEnter = !accessModules[currentIndex].sequence.onEnter; // turn isOn: true / false

        newModules.splice(currentIndex, 1);
        newModules.splice(spliceToLastOf(newModules), 0, moovingElem);

        dispatch(setupWizardDeviceAccessModuleDirection(newModules));
    };

    const arrowUpTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index, 'index');
        const moovingElem = newModules[currentIndex];

        if (currentIndex !== 0 && newModules[currentIndex].sequence.onEnter) {
            newModules.splice(currentIndex, 1);
            newModules.splice(currentIndex - 1, 0, moovingElem);
        }

        dispatch(setupWizardDeviceAccessModuleDirection(newModules));
    };

    const arrowDownTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index, 'index');
        const moovingElem = newModules[currentIndex];

        if (
            currentIndex < newModules.length - 1 &&
            newModules[currentIndex].sequence.onEnter &&
            newModules[currentIndex + 1].sequence.onEnter
        ) {
            newModules.splice(currentIndex, 1);
            newModules.splice(currentIndex + 1, 0, moovingElem);
        }

        dispatch(setupWizardDeviceAccessModuleDirection(newModules));
    };

    return (
        <div className="access-sequence-enter">
            <CustomScrollbar>
                {accessModules.map((elem, id) => {
                    return (
                        <ModuleOrderElement
                            key={elem.index}
                            index={id + 1}
                            name={elem.name}
                            isOn={elem.sequence.onEnter}
                            isNextOn={id + 1 <= accessModules.length - 1 ? accessModules[id + 1].sequence.onEnter : false}
                            switchTrigger={() => switchTrigger(elem.index)}
                            arrowUpTrigger={() => arrowUpTrigger(elem.index)}
                            arrowDownTrigger={() => arrowDownTrigger(elem.index)}
                        />
                    );
                })}
            </CustomScrollbar>
        </div>
    );
};

export const Enter = memo(EnterInner);
