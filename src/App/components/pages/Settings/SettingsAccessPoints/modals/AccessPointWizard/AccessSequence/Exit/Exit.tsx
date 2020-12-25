import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import { settingsAccessPointsPointAccessModuleDirection } from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { ModuleOrderElement } from '../ModuleOrderElement/ModuleOrderElement';
import './Exit.scss';

const ExitInner = () => {
    const dispatch = useDispatch();
    const { accessModules } = useSelector(
        (state: State) => state.settings.settingsAccessPoints.accessPointsWizard,
        shallowEqual
    );

    const findIndexFunc = (arr: any[], index: number) => {
        function checkId(id1: number, id2: number) {
            return id1 === id2;
        }

        return arr.findIndex((val) => checkId(val.index, index));
    };

    const spliceToLastOf = (arr: any[]) => {
        let counter = 0;

        arr.forEach((val) => {
            if (val.sequence.onExit) {
                counter += 1;
            }
        });

        return counter;
    };

    const switchTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index);
        const moovingElem = newModules[currentIndex];

        newModules[currentIndex].sequence.onExit = !accessModules[currentIndex].sequence.onExit; // turn isOn: true / false

        if (newModules[currentIndex].sequence.onExit) {
            newModules.splice(currentIndex, 1);
            newModules.splice(spliceToLastOf(newModules), 0, moovingElem);
        } else {
            newModules.splice(currentIndex, 1);
            newModules.splice(spliceToLastOf(newModules), 0, moovingElem);
        }

        dispatch(settingsAccessPointsPointAccessModuleDirection(newModules));
    };

    const arrowUpTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index);
        const moovingElem = newModules[currentIndex];

        if (currentIndex !== 0 && newModules[currentIndex].sequence.onExit) {
            newModules.splice(currentIndex, 1);
            newModules.splice(currentIndex - 1, 0, moovingElem);
        }

        dispatch(settingsAccessPointsPointAccessModuleDirection(newModules));
    };

    const arrowDownTrigger = (index: number) => {
        const newModules = [...accessModules];
        const currentIndex = findIndexFunc(accessModules, index);
        const moovingElem = newModules[currentIndex];

        if (
            currentIndex < newModules.length - 1 &&
            newModules[currentIndex].sequence.onExit &&
            newModules[currentIndex + 1].sequence.onExit
        ) {
            newModules.splice(currentIndex, 1);
            newModules.splice(currentIndex + 1, 0, moovingElem);
        }

        dispatch(settingsAccessPointsPointAccessModuleDirection(newModules));
    };

    return (
        <div className="access-sequence-exit">
            <CustomScrollbar>
                {accessModules.map((elem, id) => {
                    return (
                        <ModuleOrderElement
                            key={elem.index}
                            index={id + 1}
                            name={elem.name}
                            isOn={elem.sequence.onExit}
                            isNextOn={id + 1 < accessModules.length - 1 ? accessModules[id + 1].sequence.onExit : false}
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

export const Exit = memo(ExitInner);
