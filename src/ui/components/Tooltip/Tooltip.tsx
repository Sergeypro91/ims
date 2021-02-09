import TooltipProps from 'ui/components/Tooltip/tooltip.types';
import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip: FC<TooltipProps> = (props) => (
    <div data-tip data-for={props.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactTooltip id={props.id} place="bottom" type="dark" effect="solid">
            {props.type
                ? props.type === 'add'
                    ? 'Добавить'
                    : props.type === 'edit'
                    ? 'Редактировать'
                    : props.type === 'delete'
                    ? 'Удалить'
                    : props.type === 'quickFilter'
                    ? 'Быстрый фильтр'
                    : props.type === 'filter'
                    ? 'Фильтр'
                    : props.type === 'refresh'
                    ? 'Обновить'
                    : props.type === 'showDeleted'
                    ? 'Показать удаленных'
                    : props.type === 'restore'
                    ? 'Восстановить'
                    : props.type === 'import'
                    ? 'Импорт'
                    : props.type === 'identifiersWizard'
                    ? 'Мастер выдачи идентификаторов'
                    : props.type === 'schedule'
                    ? 'Расписание'
                    : props.type === 'QuickIssueRfid'
                    ? 'Быстрая выдача RFID'
                    : props.type === 'QuickIssueFaceId'
                    ? 'Быстрая выдача Face ID'
                    : props.type === 'QuickIssue2d'
                    ? 'Быстрая выдача 2D штрих-кода'
                    : props.type === 'QuickIssueBiom'
                    ? 'Быстрая выдача Отпечаток'
                    : props.type === 'videoControl'
                    ? 'Видеоконтроль'
                    : ''
                : props.text}
        </ReactTooltip>
        {props.children}
    </div>
);

export default Tooltip;
