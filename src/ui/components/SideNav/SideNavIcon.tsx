import React, { memo } from 'react';
import { Control } from 'assets/images/svgr/control';
import { CentralPost } from 'assets/images/svgr/central-post';
import { Attendance } from 'assets/images/svgr/attendance';
import { Monitoring } from 'assets/images/svgr/monitoring';

import { Pupils } from 'assets/images/svgr/pupils';
import { Institutions } from 'assets/images/svgr/institutions';
import { Faculties } from 'assets/images/svgr/faculties';
import { Chairs } from 'assets/images/svgr/chairs';
import { Groups } from 'assets/images/svgr/groups';
import { Students } from 'assets/images/svgr/students';

import { Organization } from 'assets/images/svgr/organization';
import { Subdivisions } from 'assets/images/svgr/subdivisions';
import { Positions } from 'assets/images/svgr/positions';
import { Employees } from 'assets/images/svgr/employees';
import { WorkSchedules } from 'assets/images/svgr/work-schedules';

import { Identifiers } from 'assets/images/svgr/identifiers';
import { RfidCard } from 'assets/images/svgr/rfid-card';
import { Biometry } from 'assets/images/svgr/biometry';
import { FaceId } from 'assets/images/svgr/faceId';
import { Qr2D } from 'assets/images/svgr/qr2d';

import { Employee } from 'assets/images/svgr/employee';

import { Reports } from 'assets/images/svgr/reports';
import { Events } from 'assets/images/svgr/events';
import { TimeTracking } from 'assets/images/svgr/time-tracking';
import { Statistic } from 'assets/images/svgr/statistic';
import { Visitors } from 'assets/images/svgr/visitors';

import { Settings } from 'assets/images/svgr/settings';
import { UserRole } from 'assets/images/svgr/user-role';
import { Parameters } from 'assets/images/svgr/parameters';
import { Zoning } from 'assets/images/svgr/zoning';
import { Calendar } from 'assets/images/svgr/calendar';
import { ImportExport } from 'assets/images/svgr/import-export';
import { Info } from 'assets/images/svgr/info';

import { HomeIcon } from 'assets/images/svgr/home';
import { CompanyIcon } from 'assets/images/svgr/companyIcon';
import { ShipmentIcon } from 'assets/images/svgr/shipmentIcon';

import { CardexxIcon } from 'assets/images/svgr/carddex-icon';

interface linkName {
    linkName: string;
    style?: {
        [index: string]: string;
    };
}

const SideNavIconInner = (props: linkName) => {
    const defaultIcon = [
        'Контроль',
        'Центральный пост',
        'Посещаемость',
        'Мониторинг',
        'Учебное заведение - ВУЗ',
        'Институты',
        'Факультеты',
        'Кафедры',
        'Группы',
        'Учащиеся',
        'Персонал',
        'Посетители',
        'Идентификаторы',
        'Бесконтактные RFID ключи',
        'Отпечатки пальцев',
        'Face ID',
        '2D штрих-коды',
        'Отчеты',
        'События',
        'Учет рабочего времени',
        'Статистика',
        'Настройки',
        'Профиль',
        'Пользователи',
        'Параметры',
        'Точки доступа',
        'Зональность территории',
        'Оборудование',
        'Производственный календарь',
        'Импорт, экспорт данных',
        'Производство',
        'Организации',
        'Подразделения',
        'Должности',
        'Сотрудники',
        'Графики работы',
        'О программе'
    ];

    return (
        <div className="icon">
            {props.linkName === 'Контроль' && <Control />}
            {props.linkName === 'Центральный пост' && <CentralPost />}
            {props.linkName === 'Посещаемость' && <Attendance />}
            {props.linkName === 'Мониторинг' && <Monitoring />}

            {props.linkName === 'Учебное заведение - ВУЗ' && <Pupils />}
            {props.linkName === 'Институты' && <Institutions />}
            {props.linkName === 'Факультеты' && <Faculties />}
            {props.linkName === 'Кафедры' && <Chairs />}
            {props.linkName === 'Группы' && <Groups />}
            {props.linkName === 'Учащиеся' && <Students />}

            {props.linkName === 'Персонал' && <Employee />}
            {props.linkName === 'Организации' && <Organization />}
            {props.linkName === 'Подразделения' && <Subdivisions />}
            {props.linkName === 'Должности' && <Positions />}
            {props.linkName === 'Сотрудники' && <Employees />}
            {props.linkName === 'Графики работы' && <WorkSchedules />}

            {props.linkName === 'Идентификаторы' && <Identifiers />}
            {props.linkName === 'Бесконтактные RFID ключи' && <RfidCard />}
            {props.linkName === 'Отпечатки пальцев' && <Biometry />}
            {props.linkName === 'Face ID' && <FaceId />}
            {props.linkName === '2D штрих-коды' && <Qr2D />}

            {props.linkName === 'Отчеты' && <Reports />}
            {props.linkName === 'События' && <Events />}
            {props.linkName === 'Учет рабочего времени' && <TimeTracking />}
            {props.linkName === 'Статистика' && <Statistic />}
            {props.linkName === 'Посетители' && <Visitors />}

            {props.linkName === 'Настройки' && <Settings />}
            {props.linkName === 'Пользователи' && <UserRole />}
            {props.linkName === 'Параметры' && <Parameters />}
            {props.linkName === 'Точки доступа' && <Zoning />}
            {props.linkName === 'Производственный календарь' && <Calendar />}
            {props.linkName === 'Импорт, экспорт данных' && <ImportExport />}
            {props.linkName === 'О программе' && <Info />}

            {props.linkName === 'Производство' && <CompanyIcon />}
            {props.linkName === 'Сервис' && <ShipmentIcon />}
            {props.linkName === 'CARDDEX' && <CardexxIcon />}
            {!defaultIcon.includes(props.linkName) && <HomeIcon />}
        </div>
    );
};

export const SideNavIcon = memo(SideNavIconInner);
