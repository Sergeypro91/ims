import React, { useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    requestIdentifiersTypes,
    setupWizardIdentifiersIdentifierType
} from 'redux/SetupWizard/SetupWizardIdentifiers/setupWizardIdentifiersAction';
import { RfidCard } from 'assets/images/svgr/rfid-card';
import { Biometry } from 'assets/images/svgr/biometry';
import { FaceId } from 'assets/images/svgr/faceId';
import { Qr2D } from 'assets/images/svgr/qr2d';
import './IdentifiersType.scss';

const IdentifiersTypeInner = () => {
    const dispatch = useDispatch();
    const { identifierTypes, identifierType } = useSelector((state: State) => state.setupWizard.setupWizardIdentifiers, shallowEqual);

    useEffect(() => {
        dispatch(requestIdentifiersTypes());
    }, [dispatch]);

    return (
        <div className="identifiers-type">
            <div className="identifiers-type__description">
                <div className="p--sm--normal">Этот мастер поможет вам выдать идентификаторы контроля доступа физическому лицу.</div>

                <div className="p--sm--normal">Следуйте указаниям мастера для завершения процесса назначения идентификатора</div>
            </div>

            <div className="identifiers-type__selector">
                <div className="identifiers-type__selector-title">
                    <div className="p--lg--bold">Выберите тип идентификатора</div>
                </div>

                <div className="identifiers-type__selector-wrapper">
                    {identifierTypes.map((elem) => {
                        return (
                            <button
                                key={elem.index}
                                type="button"
                                className={`identifiers-type__selector-item ${!elem.allow && 'identifiers-type__selector-item--disabled'} ${
                                    identifierType
                                        ? elem.name === identifierType.name
                                            ? 'identifiers-type__selector-item--active'
                                            : ''
                                        : ''
                                }`}
                                onClick={elem.allow ? () => dispatch(setupWizardIdentifiersIdentifierType(elem)) : undefined}
                            >
                                {elem.index === 0 && <RfidCard />}
                                {elem.index === 1 && <Qr2D />}
                                {elem.index === 2 && <FaceId />}
                                {elem.index === 3 && <Biometry />}

                                <div className="p--md--bold">
                                    {elem.name === '"RFID ключи"' && 'RFID ключ'}
                                    {elem.name === '"2D-штрих коды / QR-коды"' && '2D штрих-коды'}
                                    {elem.name === '"Биометрия - фотография физического лица"' && 'Face ID'}
                                    {elem.name === '"Биометрия - отпечаток пальца"' && 'Отпечаток пальца'}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const IdentifiersType = memo(IdentifiersTypeInner);
