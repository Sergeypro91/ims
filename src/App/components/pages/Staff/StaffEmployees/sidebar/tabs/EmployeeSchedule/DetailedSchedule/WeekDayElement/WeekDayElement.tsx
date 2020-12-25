import React, { memo } from 'react';
import { ModalInfo } from 'assets/images/svgr/modal-info';
import { DayOf } from 'assets/images/svgr/day-of';
import './WeekDayElement.scss';

interface WeekDayElem {
    weekDayName: string;
    dayOff: boolean;
    workingTime: string;
    workingTimeDuration: string;
    breakTime: string[];
    breakTimeDuration: string;
}

interface WeekProps {
    week: WeekDayElem;
}

const WeekDayElementInner = (props: WeekProps) => {
    return props.week.dayOff ? (
        <div className="week-day day-of">
            <div className="week-day__day-name">{props.week.weekDayName}</div>

            <div className="week-day__day-of">
                <DayOf />
                <div className="day-of__labe">
                    <div className="p--md--bold"></div>Выходной
                </div>
            </div>
        </div>
    ) : (
        <div className="week-day">
            <div className="week-day__day-name">{props.week.weekDayName}</div>

            <div className="week-day__worcking-time">
                <div className="time__titles">
                    <div className="time-title">
                        <div className="p--sm--normal">Часы работы</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>

                    <div className="duration-title">
                        <div className="p--sm--normal">Продолжительность</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>
                </div>

                <div className="time__items">
                    <div className="items-time">
                        <div className="p--md--bold">{props.week.workingTime}</div>
                    </div>

                    <div className="items-duration">
                        <div className="p--md--bold">{props.week.workingTimeDuration} часов</div>
                    </div>
                </div>
            </div>

            <div className="week-day__breaks-time">
                <div className="time__titles">
                    <div className="time-title">
                        <div className="p--sm--normal">Часы перерыва</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>

                    <div className="duration-title">
                        <div className="p--sm--normal">Продолжительность</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>
                </div>

                <div className="time__items">
                    <div className="items-time">
                        {props.week.breakTime.map((item) => {
                            return (
                                <div key={item} className="p--md--bold">
                                    {item}
                                </div>
                            );
                        })}
                    </div>

                    <div className="items-duration">
                        <div className="p--md--bold">{props.week.breakTimeDuration} минут</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const WeekDayElement = memo(WeekDayElementInner);
