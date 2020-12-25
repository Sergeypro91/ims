import React, { useMemo, useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { settingsAccessPointsType } from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { usePrevious } from 'hooks/usePrevious/usePrevious';
import { Turniket } from 'assets/images/svgr/turniket';
import { Barrier } from 'assets/images/svgr/barrier';
import { Door } from 'assets/images/svgr/door';
import './AccessPointsType.scss';

const AccessPointsTypeInner = () => {
    const dispatch = useDispatch();
    const { accessPointsWizard } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);
    const typesArr: HTMLButtonElement[] = useMemo(() => [], []);
    const prevStepPosition = usePrevious(accessPointsWizard.type);

    const type = [
        { icon: 'Turniket', name: 'Турникет', index: 0 },
        { icon: 'Barrier', name: 'Шлагбаум', index: 1 },
        { icon: 'Door', name: 'Дверь', index: 2 }
    ];

    const selectType = (index: number) => {
        dispatch(settingsAccessPointsType(type[index].name));
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

        if (accessPointsWizard.type.length > 1) {
            if (prevStepPosition) {
                typesArr[index(prevStepPosition!)].classList.remove('access-points-type__selector-item--active');
            }

            typesArr[index(accessPointsWizard.type)].classList.add('access-points-type__selector-item--active');
        }
    }, [accessPointsWizard.type, typesArr, prevStepPosition, type]);

    return (
        <div className="access-points-type">
            <div className="access-points-type__description">
                <div className="p--sm--normal">
                    Этот мастер поможет вам настроить точки доступа в вашей организации.
                </div>

                <div className="p--sm--normal">Следуйте указаниям мастера для завершения процесса настройки.</div>
            </div>

            <div className="access-points-type__selector">
                <div className="access-points-type__selector-title">
                    <div className="p--lg--bold">Выберите тип идентификатора</div>
                </div>

                <div className="access-points-type__selector-wrapper">
                    {type.map((elem) => {
                        return (
                            <button
                                ref={(e: HTMLButtonElement) => {
                                    typesArr[elem.index] = e;
                                }}
                                key={elem.index}
                                type="button"
                                className="access-points-type__selector-item"
                                onClick={() => selectType(elem.index)}>
                                {elem.icon === 'Turniket' && <Turniket />}
                                {elem.icon === 'Barrier' && <Barrier />}
                                {elem.icon === 'Door' && <Door />}

                                <div className="p--md--bold">{elem.name}</div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const AccessPointsType = memo(AccessPointsTypeInner);
