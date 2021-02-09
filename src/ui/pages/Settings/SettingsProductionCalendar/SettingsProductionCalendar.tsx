// @ts-nocheck
import React, { useState, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { productionCalendarToggleSidebar } from 'redux/Settings/SettingsProductionCalendar/settingsProductionCalendarActions';
import { State } from 'redux/store';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import './SettingsProductionCalendar.scss';
import { MonthCalendar } from './MonthCalendar/MonthCalendar';

type selectedMonth = null | number;

const SettingsProductionCalendarInner = () => {
    const sidebarOpened = useSelector((state: State) => state.settings.productionCalendar.sidebarOpened, shallowEqual);
    const { toggleBar } = useSelector((state: State) => state.app, shallowEqual);
    const [selectedMonth, setSelectedMonth] = useState<selectedMonth>(null);
    const dispatch = useDispatch();
    const monthsList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const yearPicker = (ev: any) => {
        if (ev.target.type === 'button') {
            [...ev.currentTarget.children].forEach((el) => {
                el.classList.remove('current__year');
            });
            ev.target!.classList.toggle('current__year');
        }
    };

    const monthHandler = (ev: any) => {
        const month = ev.target!.closest('.month');
        const months = [...ev.currentTarget.children];
        month.classList.add('selected');
        months.forEach((child, i) => {
            if (child !== month) {
                child.classList.remove('selected');
            }
            if (child === month) {
                setSelectedMonth(i);
            }
        });
    };

    return (
        <section className="page settings__production__calendar">
            <Toolbar>
                <Buttons name="Filter" typical size="m" />
            </Toolbar>
            <div className="page__wrapper">
                <div className="settingsWrapper">
                    <div className="production__calendar__wrapper">
                        <aside className="timeline">
                            <div className="timeline__body" onClick={yearPicker}>
                                <button className="year p--md--bold current__year" type="button">
                                    2020
                                </button>
                                <span className="timeline__line" />
                                <button className="year p--md--bold" type="button">
                                    2019
                                </button>
                                <span className="timeline__line" />
                                <button className="year p--md--bold" type="button">
                                    2018
                                </button>
                                <span className="timeline__line" />
                                <button className="year p--md--bold" type="button">
                                    2017
                                </button>
                            </div>
                        </aside>
                        <CustomScrollbar trigger={toggleBar}>
                            <div className="production__calendar__body" onClick={monthHandler}>
                                {monthsList.map((el, i) => {
                                    return (
                                        <div className={`month ${i === 10 ? 'selected' : ''}`} key={el}>
                                            <h3 className="month__header p--lg--bold">{el}</h3>
                                            <div className="month__weekdays">
                                                <span className="weekday p--sm--thin">Пн</span>
                                                <span className="weekday p--sm--thin">Вт</span>
                                                <span className="weekday p--sm--thin">Ср</span>
                                                <span className="weekday p--sm--thin">Чт</span>
                                                <span className="weekday p--sm--thin">Пт</span>
                                                <span className="weekday p--sm--thin">Сб</span>
                                                <span className="weekday p--sm--thin">Вс</span>
                                            </div>
                                            <div className="month__days">
                                                {new Array(30).fill('_').map((elem, i) => {
                                                    if (
                                                        i === 5 ||
                                                        i === 6 ||
                                                        i === 12 ||
                                                        i === 13 ||
                                                        i === 19 ||
                                                        i === 20 ||
                                                        i === 26 ||
                                                        i === 27
                                                    ) {
                                                        return (
                                                            <span className="month__day p--sm--bold weekend" key={i}>
                                                                {i + 1}
                                                            </span>
                                                        );
                                                    }
                                                    return (
                                                        <span className="month__day p--sm--bold" key={i}>
                                                            {i + 1}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CustomScrollbar>
                    </div>
                </div>
                <Sidebar
                    sidebarName="Данные о месяце"
                    icon="SearchUser"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(productionCalendarToggleSidebar())}
                >
                    <TabBar>
                        <Tab header="Календарь" index={1}>
                            <MonthCalendar />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </div>
        </section>
    );
};

export const SettingsProductionCalendar = memo(SettingsProductionCalendarInner);
