import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { setSettingsParams, updateSettingsParameters } from 'redux/Settings/SettingParameters/settingsParametersActions';
import { OptionType } from 'redux/Settings/SettingParameters/settingsParametersTypes';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { Parameters } from 'redux/Settings/SettingParameters/settingsParametersTypes';
import { Loader } from 'assets/images/svgr/bx-loader-alt';
import _ from 'lodash';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';

interface ParametersOptionsProps {
    selectedParam: number;
    setSelectedParam: (payload: number) => void;
    search: string;
}

const ParametersOptionsInner = (props: ParametersOptionsProps) => {
    const dispatch = useDispatch();
    const { parameters, copyParam } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);
    const [filteredParam, setFilteredParam] = useState<Parameters>([]);
    const [validadionError, setValidadionError] = useState(false);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        const cloneLocalParam = _.cloneDeep(parameters);
        const paramOptions = cloneLocalParam[props.selectedParam];
        const paramOptionElement = paramOptions.options[findIndexFunc(paramOptions.options, target.name, 'name')];

        if (paramOptionElement.type === 'string') {
            if (paramOptionElement.max) {
                if (target.value.length <= paramOptionElement.max) {
                    if (paramOptionElement.fontCase === 'upperCase') {
                        paramOptionElement.value = target.value.toUpperCase();
                    } else {
                        paramOptionElement.value = target.value;
                    }
                }
            } else {
                if (paramOptionElement.fontCase === 'upperCase') {
                    paramOptionElement.value = target.value.toUpperCase();
                } else {
                    paramOptionElement.value = target.value;
                }
            }
        } else if (paramOptionElement.type === 'number') {
            if (target.value === '') {
                paramOptionElement.value = '0';
            } else if (target.value[0] === '0') {
                paramOptionElement.value = target.value.replace('0', '');
            } else {
                paramOptionElement.value = target.value;
            }

            setValidadionError(checkOnValidNumber(target.value, paramOptionElement.min, paramOptionElement.max));
        } else if (paramOptionElement.type === 'boolean') {
            paramOptionElement.condition = !paramOptionElement.condition;
        } else if (paramOptionElement.type === 'list') {
            paramOptionElement.selected = target.value;
            paramOptionElement.selectedId = paramOptionElement.list!.findIndex((str) => str === target.value);
        }

        dispatch(updateSettingsParameters(cloneLocalParam));
    };

    const checkboxListHandler = (currentOptionId: number, currentListElemId: number) => {
        const cloneLocalParam = _.cloneDeep(parameters);
        const paramOptions = cloneLocalParam[props.selectedParam];
        const paramOptionElement = paramOptions.options[currentOptionId];

        paramOptionElement.selectedList![currentListElemId] = !paramOptionElement.selectedList![currentListElemId];

        dispatch(updateSettingsParameters(cloneLocalParam));
    };

    const numbersValidateTitle = (minValue: number | undefined, maxValue: number | undefined) => {
        if (minValue !== undefined && maxValue !== undefined) {
            return `Не меньше ${minValue}, не больше ${maxValue}`;
        } else if (minValue === undefined && maxValue) {
            return `Не больше ${maxValue}`;
        } else if (minValue && maxValue === undefined) {
            return `Не меньше ${minValue}`;
        }
    };

    const checkOnValidNumber = (value: string | number | undefined, minValue: number | undefined, maxValue: number | undefined) => {
        if (value) {
            if (minValue && maxValue) {
                if (+value < minValue || +value > maxValue) {
                    return true;
                }

                return false;
            } else if (minValue && maxValue === undefined) {
                if (+value < minValue) {
                    return true;
                }

                return false;
            } else if (minValue === undefined && maxValue) {
                if (+value > maxValue) {
                    return true;
                }

                return false;
            }
        }

        return false;
    };

    const saveParam = () => {
        dispatch(setSettingsParams(_.cloneDeep(parameters)));
    };

    const discardParam = () => {
        dispatch(updateSettingsParameters(_.cloneDeep(copyParam)));
    };

    useEffect(() => {
        const filteredArr = _.cloneDeep(copyParam);

        if (props.search.length > 0) {
            filteredArr.map((elem) => {
                const filteredOption = elem.options.filter((item) => {
                    if (item.label.includes(props.search)) {
                        return true;
                    } else {
                        return false;
                    }
                });

                elem.options = filteredOption;

                return elem;
            });
        }

        console.log(copyParam);

        setFilteredParam(filteredArr);
    }, [copyParam, props.search]);

    return (
        <div className="setting-parameters__options">
            <CustomScrollbar>
                <div className="parameters-options__body">
                    {parameters.length !== 0 ? (
                        parameters[props.selectedParam].options.map((currentItem: OptionType, currentItemId: number) => {
                            return (
                                <React.Fragment key={currentItemId}>
                                    {currentItem.type === 'string' && (
                                        <div key={currentItem.name} className="parameters-options__elem parameters-options__elem--input">
                                            <Inputs
                                                name={currentItem.name}
                                                label={currentItem.label}
                                                onInputChange={inputHandler}
                                                type={currentItem.type}
                                                readonly={currentItem.readonly}
                                                value={
                                                    currentItem.value
                                                        ? typeof currentItem.value === 'string'
                                                            ? currentItem.value
                                                            : currentItem.value.toString()
                                                        : ''
                                                }
                                                min={currentItem.min}
                                                max={currentItem.max}
                                            />
                                        </div>
                                    )}

                                    {currentItem.type === 'number' && (
                                        <div key={currentItem.name} className="parameters-options__elem parameters-options__elem--number">
                                            <Inputs
                                                name={currentItem.name}
                                                label={currentItem.label}
                                                onInputChange={inputHandler}
                                                type={currentItem.type}
                                                list={currentItem.list}
                                                value={
                                                    currentItem.value
                                                        ? typeof currentItem.value === 'string'
                                                            ? currentItem.value
                                                            : currentItem.value.toString()
                                                        : ''
                                                }
                                                min={currentItem.min ? currentItem.min : 0}
                                                max={currentItem.max ? currentItem.max : 0}
                                                error={checkOnValidNumber(currentItem.value, currentItem.min, currentItem.max)}
                                                validationTitle={
                                                    currentItem.min !== undefined && currentItem.max !== undefined
                                                        ? numbersValidateTitle(currentItem.min, currentItem.max)
                                                        : ''
                                                }
                                            />
                                        </div>
                                    )}

                                    {currentItem.type === 'list' && (
                                        <div key={currentItem.name} className="parameters-options__elem parameters-options__elem--list">
                                            <Inputs
                                                name={currentItem.name}
                                                label={currentItem.label}
                                                onInputChange={inputHandler}
                                                type={currentItem.type}
                                                list={currentItem.list}
                                                value={currentItem.selected ? currentItem.selected : ''}
                                            />
                                        </div>
                                    )}

                                    {currentItem.type === 'checkboxList' && (
                                        <div
                                            key={currentItem.name}
                                            className="parameters-options__elem parameters-options__elem--checkbox-list"
                                        >
                                            <div className="option-elem__label">
                                                <div className="p--sm--normal">{currentItem.label}</div>
                                            </div>

                                            <div className="option-elem__list">
                                                {currentItem.list &&
                                                    currentItem.list.map((listElem, currentListElemId) => {
                                                        return (
                                                            <Checkbox
                                                                key={listElem}
                                                                name={currentItem.name + listElem}
                                                                checked={currentItem.selectedList![currentListElemId]}
                                                                label={listElem}
                                                                onChange={() => checkboxListHandler(currentItemId, currentListElemId)}
                                                            />
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    )}

                                    {currentItem.type === 'boolean' && (
                                        <div key={currentItem.name} className="parameters-options__elem parameters-options__elem--checkbox">
                                            <Checkbox
                                                name={currentItem.name}
                                                checked={currentItem.condition ? currentItem.condition : false}
                                                label={currentItem.label}
                                                onChange={inputHandler}
                                            />
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <div className="loader">
                            <Loader />
                        </div>
                    )}
                </div>
            </CustomScrollbar>

            {JSON.stringify([...parameters]) !== JSON.stringify([...copyParam]) && (
                <div className="parameters-options__footer">
                    <Buttons
                        name="Save"
                        label="Сохранить"
                        typical
                        disable={validadionError}
                        onPress={!validadionError ? () => saveParam() : undefined}
                    />

                    <Buttons name="Deny" label="Отмена" typical danger onPress={discardParam} />
                </div>
            )}
        </div>
    );
};

export const ParametersOptions = memo(ParametersOptionsInner);
