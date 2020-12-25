import React, { useEffect, useState, memo } from 'react';
import { Checkbox } from 'App/components/global/Checkbox/Checkbox';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { LimitsProps } from './limitsType';
import './Limits.scss';

const LimitsInner = (props: LimitsProps) => {
    const [limitTimeIsOn, setLimitTimeIsOn] = useState(true);
    const [limitPassIsOn, setLimitPassIsOn] = useState(true);
    const [errorTime, setErrorTime] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    const { clearTimeLimit, clearPassLimit } = props;

    useEffect(() => {
        if (limitTimeIsOn) {
            if (props.limitTimeFrom !== '' || props.limitTimeTo !== '') {
                clearTimeLimit();

                setErrorTime(false);
            }
        } else if (!limitTimeIsOn) {
            if (props.limitTimeFrom !== '' || props.limitTimeTo !== '') {
                const dateFrom = new Date(props.limitTimeFrom);
                const dateTo = new Date(props.limitTimeTo);

                if (dateFrom.getTime() > dateTo.getTime()) {
                    alert('Error - dateTo canot be higher then dateFrom');

                    setErrorTime(true);
                } else {
                    setErrorTime(false);
                }
            }
        }
    }, [limitTimeIsOn, props.limitTimeFrom, props.limitTimeTo, clearTimeLimit]);

    useEffect(() => {
        if (limitPassIsOn) {
            if (props.limitPassCount !== '') {
                clearPassLimit();

                setErrorPass(false);
            }
        } else if (!limitPassIsOn) {
            if (props.limitPassCount !== '') {
                if (+props.limitPassCount < 1) {
                    alert('Error - field canot be lower then "1"');

                    setErrorPass(true);
                } else {
                    setErrorPass(false);
                }
            }
        }
    }, [limitPassIsOn, props.limitPassCount, clearPassLimit]);

    return (
        <div className="limits">
            <div className="limits__time">
                <div className="limits__time-title">
                    <div className="p--sm--normal">Срок действия</div>
                </div>

                <Checkbox
                    name="limitTimeIsOn"
                    checked={limitTimeIsOn}
                    label="Бессрочный"
                    onChange={() => setLimitTimeIsOn(!limitTimeIsOn)}
                />

                <Inputs
                    type="date"
                    name="limitTimeFrom"
                    placeholder="С"
                    onInputChange={(e) => props.timeFromFunc(e.target.value)}
                    value={props.limitTimeFrom}
                    disabled={limitTimeIsOn}
                    error={errorTime}
                />

                <Inputs
                    type="date"
                    name="limitTimeTo"
                    placeholder="По"
                    onInputChange={(e) => props.timeToFunc(e.target.value)}
                    value={props.limitTimeTo}
                    disabled={limitTimeIsOn}
                    error={errorTime}
                />
            </div>

            <div className="limits__pass">
                <div className="limits__pass-title">
                    <div className="p--sm--normal">Лимит проходов</div>
                </div>

                <Checkbox
                    name="limitPassIsOn"
                    checked={limitPassIsOn}
                    label="Безлимитный"
                    onChange={() => setLimitPassIsOn(!limitPassIsOn)}
                />

                <Inputs
                    type="text"
                    name="limitPassCount"
                    onInputChange={(e) => props.passCountFunc(e.target.value)}
                    value={props.limitPassCount}
                    disabled={limitPassIsOn}
                    error={errorPass}
                />
            </div>
        </div>
    );
};

export const Limits = memo(LimitsInner);
