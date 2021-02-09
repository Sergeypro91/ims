import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector } from 'react-redux';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';

const DataConfirmationInner = () => {
    const { staffEmployees } = useSelector((state: State) => state.staff, shallowEqual);
    const { identifiersGeneral, identifiersRfid, identifiersFaceId } = useSelector((state: State) => state.identifiers, shallowEqual);

    const [useByDefault, setUseByDefault] = useState(false);

    const formattedDate = (inputFormat: string) => {
        function pad(s: any) {
            return s < 10 ? `0${s}` : s;
        }

        const d = new Date(inputFormat);

        if (inputFormat.length < 1) {
            return '';
        }

        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.');
    };

    return (
        <div className="data-confirmation">
            <div className="data-confirmation__header">
                <div className="p--md--bold">Проверьте данные выдаваемого идентификатора и завершите операцию</div>
            </div>

            <div className="data-confirmation__body">
                {identifiersFaceId.photo && (
                    <div className="data-confirmation__body-photo">
                        <div
                            className="data-confirmation-image"
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: `url(${identifiersFaceId.photo})`,
                                backgroundPosition: 'center'
                            }}
                        />
                    </div>
                )}

                {identifiersGeneral.type === '2D штрих-коды' && (
                    <div className="data-confirmation__body-qr">
                        <div className="data-confirmation-image" />
                    </div>
                )}

                <div className="data-confirmation__body-info">
                    <div className="block-info">
                        <div className="block-info__header p--sm--normal">Владелец</div>

                        <div className="block-info__text p--md--bold">{staffEmployees.selectedRow?.physpersonName}</div>
                    </div>

                    {identifiersGeneral.type === 'RFID ключ' && (
                        <div className="block-info">
                            <div className="block-info__header p--sm--normal">Номер ключа</div>

                            <div className="block-info__text p--md--bold">{identifiersRfid.key}</div>
                        </div>
                    )}

                    <div className="block-info">
                        <div className="block-info__header p--sm--normal">Лимит проходов</div>

                        <div className="block-info__text p--md--bold">
                            {identifiersGeneral.limits.limitPass ? identifiersGeneral.limits.limitPass : 'Безлимитный'}
                        </div>
                    </div>

                    <div className="block-info">
                        <div className="block-info__header p--sm--normal">Срок действия</div>

                        <div className="block-info__text p--md--bold">
                            {identifiersGeneral.limits.limitTime.limitTimeFrom
                                ? `
                                    ${formattedDate(identifiersGeneral.limits.limitTime.limitTimeFrom)}
                                    / 
                                    ${formattedDate(identifiersGeneral.limits.limitTime.limitTimeTo)}
                                `
                                : 'Бессрочный'}
                        </div>
                    </div>

                    <div className="block-info">
                        <div className="block-info__header p--sm--normal">Шаблоны доступа</div>

                        <div className="block-info__acces-patterns">
                            {identifiersGeneral.accesPatterns.map((obj) => {
                                return (
                                    <div key={obj.uuid} className="p--md--bold">
                                        {obj}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {identifiersGeneral.type === 'RFID ключ' && (
                <div className="data-confirmation__footer">
                    <Checkbox
                        name="useByDefault"
                        checked={useByDefault}
                        label="Использовать текущие настройки по умолчанию для данного типа идентификаторов"
                        onChange={() => setUseByDefault(!useByDefault)}
                    />
                </div>
            )}
        </div>
    );
};

export const DataConfirmation = memo(DataConfirmationInner);
