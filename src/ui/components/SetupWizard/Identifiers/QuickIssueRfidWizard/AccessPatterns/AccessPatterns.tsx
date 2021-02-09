import React, { useState, useRef, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
// import { identifierSetupWizardAccesPatterns } from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { Accordion } from 'ui/components/Accordion/Accordion';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';

const AccessPatternsInner = () => {
    const dispatch = useDispatch();

    const initialPatterns = [
        {
            index: 0,
            name: 'Общий шаблон',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Производство', 'Отдел разработки']
        },
        {
            index: 1,
            name: 'Еще шаблон',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Хоз отдел', 'Столовая']
        },
        {
            index: 2,
            name: 'Специальный шаблон',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Производство', 'Внутрений двор']
        },
        {
            index: 3,
            name: 'Шаблон для охраны',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Туалет', 'Отдел разработки']
        },
        {
            index: 4,
            name: 'Шаблон для разработчика',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Подвал', 'Серверная']
        },
        {
            index: 5,
            name: 'Шаблон для тестировщика',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Чердак', 'Отдел тестирования']
        },
        {
            index: 6,
            name: 'Шаблон для дизайнера',
            description: 'Этот шаблон позволяет сотруднику  свободно проходить в такие зоны как “Производство”, “Отдел разработки”',
            zones: ['Отдел маркетинга', 'Отдел дизайна']
        }
    ];

    const [patterns] = useState(initialPatterns);
    const [selectedPattern, setSelectedPattern] = useState<number[]>([]);
    const [zones, setZones] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(false);
    const coppyArr = useRef<number[]>([]);

    const selectItem = (index: number) => {
        if (coppyArr.current.includes(index)) {
            coppyArr.current.splice(coppyArr.current.indexOf(index), 1);
            setSelectedPattern([...coppyArr.current]);
        } else {
            setSelectedPattern([...selectedPattern, index]);
        }
    };

    useEffect(() => {
        coppyArr.current = selectedPattern;

        const zonesArr: string[] = [];

        patterns.forEach((obj, id) => {
            if (selectedPattern.includes(id)) {
                obj.zones.forEach((item) => {
                    if (!zonesArr.includes(item)) {
                        zonesArr.push(item);
                    }
                });
            }
        });

        setZones([...zonesArr]);

        // dispatch(
        //     identifierSetupWizardAccesZones(
        //         selectedPattern.map((obj) => {
        //             return patterns[obj].name;
        //         })
        //     )
        // );
    }, [selectedPattern, patterns, dispatch]);

    return (
        <div className="access-patterns">
            <div className="patterns-selector">
                <div className="patterns-selector__title">
                    <div className="p--md--bold">Выберите шаблон доступа</div>
                </div>

                <div className="patterns-selector__body">
                    <CustomScrollbar>
                        {patterns.map((elem) => {
                            return (
                                <Accordion
                                    key={elem.index}
                                    type="selectable"
                                    header={elem.name}
                                    checkbox={() => selectItem(elem.index)}
                                    trigger={() => setTrigger(!trigger)}
                                >
                                    {elem.description}
                                </Accordion>
                            );
                        })}
                    </CustomScrollbar>
                </div>
            </div>

            <div className="access-zones">
                <div className="access-zones__title">
                    <div className="p--md--bold">Доступные зоны</div>
                </div>

                <div className="access-zones__body">
                    <CustomScrollbar>
                        {zones.map((elem) => {
                            return (
                                <div key={elem} className="zones__item">
                                    <div className="p--md--normal">{elem}</div>
                                </div>
                            );
                        })}
                    </CustomScrollbar>
                </div>
            </div>
        </div>
    );
};

export const AccessPatterns = memo(AccessPatternsInner);
