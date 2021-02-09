import React, { memo } from 'react';
import { UserEnter } from 'assets/images/svgr/bx-user-plus';
import { UserExit } from 'assets/images/svgr/bx-user-minus';
import { UserPresent } from 'assets/images/svgr/bx-user-check';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import './Zones.scss';

const ZonesInner = () => {
    return (
        <CustomScrollbar>
            <div className="zones">
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
                <div className="zone">
                    <div className="zone__title">
                        <div className="p--md--bold">Имя зоны</div>{' '}
                    </div>
                    <div className="zone__body">
                        <div className="employee-state employee-state__enter">
                            <div className="employee-state__icon">
                                <UserEnter />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Входы</div>
                            </div>
                            <button className="employee-state__counter">55</button>
                        </div>
                        <div className="employee-state employee-state__exit">
                            <div className="employee-state__icon">
                                <UserExit />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Выходы</div>
                            </div>
                            <button className="employee-state__counter">86</button>
                        </div>
                        <div className="employee-state employee-state__present">
                            <div className="employee-state__icon">
                                <UserPresent />
                            </div>
                            <div className="employee-state__decr">
                                <div className="p--sm--normal">Присутствуют</div>
                            </div>
                            <button className="employee-state__counter">102</button>
                        </div>
                    </div>
                </div>
            </div>
        </CustomScrollbar>
    );
};

export const Zones = memo(ZonesInner);
