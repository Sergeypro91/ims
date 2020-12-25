import React, { useState, memo } from 'react';
import { WeekDayElement } from './WeekDayElement/WeekDayElement';
import './DetailedSchedule.scss';

const DetailedScheduleInner = () => {
    const initialState = [
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

    const [workingWeek] = useState(initialState);
    return (
        <div className="employee-tab__detailed-schedule">
            {workingWeek.map((elem, id, arr) => {
                return <WeekDayElement key={elem.weekDayName} week={arr[id]} />;
            })}
        </div>
    );
};

export const DetailedSchedule = memo(DetailedScheduleInner);
