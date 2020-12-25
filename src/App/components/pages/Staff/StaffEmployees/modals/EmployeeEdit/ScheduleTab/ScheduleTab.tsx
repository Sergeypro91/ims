import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { ModalInfo } from 'assets/images/svgr/modal-info';
import { DayOf } from 'assets/images/svgr/day-of';
import './ScheduleTab.scss';

const ScheduleTabInner = () => {
    const weekState = [
        {
            weekDayName: 'пн',
            dayOff: false,
            workingTime: '09:00 - 18:00',
            workingTimeDuration: '6',
            breakTime: ['12:00 - 14:00'],
            breakTimeDuration: '45'
        },
        {
            weekDayName: 'вт',
            dayOff: false,
            workingTime: '09:00 - 18:00',
            workingTimeDuration: '6',
            breakTime: ['12:00 - 14:00', '14:00 - 14:30', '17:00 - 17:15'],
            breakTimeDuration: '45'
        },
        {
            weekDayName: 'ср',
            dayOff: false,
            workingTime: '09:00 - 18:00',
            workingTimeDuration: '6',
            breakTime: ['12:00 - 14:00'],
            breakTimeDuration: '45'
        },
        {
            weekDayName: 'чт',
            dayOff: false,
            workingTime: '09:00 - 18:00',
            workingTimeDuration: '6',
            breakTime: ['12:00 - 14:00'],
            breakTimeDuration: '45'
        },
        {
            weekDayName: 'пт',
            dayOff: false,
            workingTime: '09:00 - 18:00',
            workingTimeDuration: '6',
            breakTime: ['12:00 - 14:00'],
            breakTimeDuration: '45'
        },
        {
            weekDayName: 'сб',
            dayOff: true,
            workingTime: '',
            workingTimeDuration: '',
            breakTime: [''],
            breakTimeDuration: ''
        },
        {
            weekDayName: 'вс',
            dayOff: true,
            workingTime: '',
            workingTimeDuration: '',
            breakTime: [''],
            breakTimeDuration: ''
        }
    ];

    const [workingWeek] = useState(weekState);

    const [templateList] = useState(['Пятидневка для менеджеров', 'Гибкий']);
    const initialState = {
        template: '',
        exitFormat: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="employee-schedule">
            <Inputs
                name="template"
                label="Шаблон графика работы *"
                onInputChange={inputHandler}
                type="text"
                value={inputsState.template}
                list={templateList}
            />

            <div className="employee-schedule__table">
                <div className="schedule-table__header">
                    <div className="header-item"></div>
                    <div className="header-item">
                        <div className="p--sm--normal">Часы работы</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>

                    <div className="header-item">
                        <div className="p--sm--normal">Продолжительность</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>

                    <div className="header-item">
                        <div className="p--sm--normal">Часы перерыва</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>

                    <div className="header-item">
                        <div className="p--sm--normal">Продолжительность</div>

                        <div className="title-prompt">
                            <ModalInfo />

                            <div className="title-prompt__description">
                                Количество часов, которое должен отработать сотрудник
                            </div>
                        </div>
                    </div>
                </div>

                <div className="schedule-table__body">
                    <CustomScrollbar>
                        <div className="schedule-table__body-items">
                            {workingWeek.map((item) => {
                                return (
                                    <div
                                        key={item.weekDayName}
                                        className={`table-body__item ${item.dayOff ? 'day-of' : ''}`}>
                                        <div className="p--md--bold">{item.weekDayName}</div>

                                        <div className="p--md--bold">
                                            {item.dayOff ? (
                                                <>
                                                    <DayOf />
                                                    <span>Выходной</span>
                                                </>
                                            ) : (
                                                item.workingTime
                                            )}
                                        </div>

                                        <div className="p--md--bold">{item.workingTimeDuration}</div>

                                        <div className="duration">
                                            {item.breakTime.map((elem, id) => {
                                                return (
                                                    <div key={`${elem}${id}`} className="p--md--bold">
                                                        {elem}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="p--md--bold">{item.breakTimeDuration}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </CustomScrollbar>
                </div>
            </div>
        </div>
    );
};

export const ScheduleTab = memo(ScheduleTabInner);
