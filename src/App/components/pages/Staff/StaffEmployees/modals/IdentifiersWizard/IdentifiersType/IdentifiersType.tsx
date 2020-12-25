import React, { useMemo, useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { staffEmployeesSetupWizardType } from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { RfidCard } from 'assets/images/svgr/rfid-card';
import { Biometry } from 'assets/images/svgr/biometry';
import { FaceId } from 'assets/images/svgr/faceId';
import { Qr2D } from 'assets/images/svgr/qr2d';
import { usePrevious } from 'hooks/usePrevious/usePrevious';
import './IdentifiersType.scss';

const IdentifiersTypeInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const typesArr: HTMLButtonElement[] = useMemo(() => [], []);
    const prevStepPosition = usePrevious(identifiersWizard.type);

    const type = [
        { icon: 'RfidCard', name: 'RFID ключ', index: 0 },
        { icon: 'FaceId', name: 'Face ID', index: 1 },
        { icon: 'Qr2D', name: '2D штрих-коды', index: 2 }
        // { icon: 'Biometry', name: 'Отпечаток пальца', index: 3 }
    ];

    const selectType = (index: number) => {
        dispatch(staffEmployeesSetupWizardType(type[index].name));
    };

    useEffect(() => {
        const index = (item: string) => {
            let searchingId = 0;

            type.forEach((obg, id) => {
                if (item === obg.name) {
                    searchingId = id;
                }
            });

            return searchingId;
        };

        if (identifiersWizard.type.length > 1) {
            if (prevStepPosition) {
                typesArr[index(prevStepPosition!)].classList.remove('identifiers-type__selector-item--active');
            }

            typesArr[index(identifiersWizard.type)].classList.add('identifiers-type__selector-item--active');
        }
    }, [identifiersWizard.type, typesArr, prevStepPosition, type]);

    return (
        <div className="identifiers-type">
            <div className="identifiers-type__description">
                <div className="p--sm--normal">
                    Этот мастер поможет вам выдать идентификаторы контроля доступа физическому лицу.
                </div>

                <div className="p--sm--normal">
                    Следуйте указаниям мастера для завершения процесса назначения идентификатора
                </div>
            </div>

            <div className="identifiers-type__selector">
                <div className="identifiers-type__selector-title">
                    <div className="p--lg--bold">Выберите тип идентификатора</div>
                </div>

                <div className="identifiers-type__selector-wrapper">
                    {type.map((elem) => {
                        return (
                            <button
                                ref={(e: HTMLButtonElement) => {
                                    typesArr[elem.index] = e;
                                }}
                                key={elem.index}
                                type="button"
                                className="identifiers-type__selector-item"
                                onClick={() => selectType(elem.index)}>
                                {elem.icon === 'RfidCard' && <RfidCard />}
                                {elem.icon === 'FaceId' && <FaceId />}
                                {elem.icon === 'Qr2D' && <Qr2D />}
                                {elem.icon === 'Biometry' && <Biometry />}

                                <div className="p--md--bold">{elem.name}</div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const IdentifiersType = memo(IdentifiersTypeInner);
