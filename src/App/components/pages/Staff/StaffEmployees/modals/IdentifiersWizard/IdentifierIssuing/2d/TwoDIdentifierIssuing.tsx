import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector } from 'react-redux';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Add } from 'assets/images/svgr/add_button';
import './TwoDIdentifierIssuing.scss';

const TwoDIdentifierIssuingInner = () => {
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);
    const [templatesList] = useState(['Шаблон 1', 'Шаблон 2', 'Шаблон 3']);

    const initialState = {
        error: false,
        succes: false,
        templates: '',
        textarea: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="twod-identifier-issuing">
            <div className="twod-identifier-issuing__header">
                <div className="p--md--bold">Создание 2D штрих-кода</div>
            </div>

            <div className="twod-identifier-issuing__body">
                <div className="twod-identifier-issuing__body-download">
                    <div
                        className="qr-image"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${identifiersWizard.qr})`
                        }}
                    />
                </div>

                <div className="twod-identifier-issuing__body-generate">
                    <div className="identifier-issuing__template">
                        <Inputs
                            name="templates"
                            label="Выберите шаблон для генерации"
                            onInputChange={inputHandler}
                            type="text"
                            value={inputsState.templates}
                            list={templatesList}
                        />

                        <div className="identifier-issuing__template-save">
                            <Add />

                            <div className="p--sm--bold">Сохранить шаблон</div>
                        </div>
                    </div>

                    <div className="identifier-issuing__textarea">
                        <textarea name="textarea" onChange={inputHandler} />
                    </div>

                    <div className="identifier-issuing__buttons">
                        <Buttons name="Read" label="Сгенерировать" typical />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TwoDIdentifierIssuing = memo(TwoDIdentifierIssuingInner);
