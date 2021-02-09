import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { appToastAdd } from 'redux/App/appActions';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { LimitsProps } from './limitsType';
import './Limits.scss';

const LimitsInner = (props: LimitsProps) => {
    const dispatch = useDispatch();
    const [errorTime, setErrorTime] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    const { clearTimeLimit, clearPassLimit } = props;

    useEffect(() => {
        if (props.limitTimeIsOff) {
            if (props.limitTimeFrom !== '' || props.limitTimeTo !== '') {
                clearTimeLimit();

                setErrorTime(false);
            }
        } else if (!props.limitTimeIsOff) {
            if (props.limitTimeFrom !== '' || props.limitTimeTo !== '') {
                const dateFrom = new Date(props.limitTimeFrom);
                const dateTo = new Date(props.limitTimeTo);

                if (dateFrom.getTime() > dateTo.getTime()) {
                    setErrorTime(true);
                } else {
                    setErrorTime(false);
                }
            }
        }
    }, [props.limitTimeIsOff, props.limitTimeFrom, props.limitTimeTo, clearTimeLimit]);

    useEffect(() => {
        if (props.limitPassIsOff) {
            if (props.limitPassCount !== '') {
                clearPassLimit();

                setErrorPass(false);
            }
        } else if (!props.limitPassIsOff) {
            if (props.limitPassCount !== '') {
                if (+props.limitPassCount < 1) {
                    console.log('Error - field canot be lower then "1"');

                    setErrorPass(true);
                } else {
                    setErrorPass(false);
                }
            }
        }
    }, [props.limitPassIsOff, props.limitPassCount, clearPassLimit]);

    useEffect(() => {
        if (errorTime) {
            const toast = {
                type: 'error',
                message: 'Ошибка: "Дата с" - не может быть больше "Дата по"'
            };

            dispatch(appToastAdd(toast));
        }

        if (errorPass) {
            const toast = {
                type: 'error',
                message: 'Ошибка: "Лимит проходов" - не может быть меньге "0" и больше "10000"'
            };

            dispatch(appToastAdd(toast));
        }
    }, [dispatch, errorTime, errorPass]);

    return (
        <div className="limits">
            <div className="limits__time">
                <div className="limits__time-title">
                    <div className="p--sm--normal">Срок действия</div>
                </div>

                <Checkbox name="props.limitTimeIsOff" checked={props.limitTimeIsOff} label="Бессрочный" onChange={props.timeToggler} />

                <Inputs
                    type="date"
                    name="limitTimeFrom"
                    placeholder="С"
                    onInputChange={(e) => props.timeFromFunc(e.target.value)}
                    value={props.limitTimeFrom ? props.limitTimeFrom : new Date().toJSON().slice(0, 10)}
                    disabled={props.limitTimeIsOff}
                    error={errorTime}
                    validationTitle="Дата с"
                />

                <Inputs
                    type="date"
                    name="limitTimeTo"
                    placeholder="По"
                    onInputChange={(e) => props.timeToFunc(e.target.value)}
                    value={props.limitTimeTo ? props.limitTimeTo : new Date().toJSON().slice(0, 10)}
                    disabled={props.limitTimeIsOff}
                    error={errorTime}
                    validationTitle="Дата по"
                />
            </div>

            <div className="limits__pass">
                <div className="limits__pass-title">
                    <div className="p--sm--normal">Лимит проходов</div>
                </div>

                <Checkbox name="props.limitPassIsOff" checked={props.limitPassIsOff} label="Безлимитный" onChange={props.passToggler} />

                <Inputs
                    type="number"
                    name="limitPassCount"
                    onInputChange={(e) => props.passCountFunc(e.target.value)}
                    value={props.limitPassCount ? props.limitPassCount : '1'}
                    disabled={props.limitPassIsOff}
                    error={errorPass}
                    min={props.minPass}
                    max={props.maxPass}
                    validationTitle={`Не меньше "0" не больше "10000"`}
                />
            </div>
        </div>
    );
};

export const Limits = memo(LimitsInner);
