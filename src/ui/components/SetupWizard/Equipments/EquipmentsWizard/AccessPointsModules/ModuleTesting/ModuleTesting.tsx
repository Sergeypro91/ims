import React, { useState, memo } from 'react';
import { Buttons } from 'ui/components/Buttons/Buttons';
import './ModuleTesting.scss';

const ModuleTestingInner = () => {
    const [testingMessage, setTestingMessage] = useState('');

    const testing = () => {
        setTestingMessage('Поднесите идентификатор к проверяемому модулю!');

        setTimeout(() => {
            setTestingMessage(`Идентификатор успешно считан с модуля ...`);
        }, 5000);
    };

    return (
        <div className="module-testing">
            <Buttons name="AddModule" label="Тест" typical onPress={testing} />

            <div className="module-testing__descript">
                <div className="p--md--normal">{testingMessage}</div>
            </div>
        </div>
    );
};

export const ModuleTesting = memo(ModuleTestingInner);
