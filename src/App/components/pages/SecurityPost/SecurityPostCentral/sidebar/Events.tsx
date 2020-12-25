import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { EventPayload } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { Profile } from 'assets/images/svgr/userIcon';
import { ModalError } from 'assets/images/svgr/modal-error';
import { ExitEvent } from 'assets/images/svgr/event-exit';
import { EnterEvent } from 'assets/images/svgr/event-enter';
import { Loader } from 'assets/images/svgr/bx-loader-alt';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import './Events.scss';

const EventsInner = () => {
    const { status } = useSelector((state: State) => state.app.wsEvent, shallowEqual);
    const { events } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    const consvertDate = (e: string) => {
        const d = new Date(e);

        const timeStampCon = `${d.getHours()}:${(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()} / ${d.getDate()}.${
            d.getMonth() + 1
        }.${d.getFullYear()}`;

        return timeStampCon;
    };

    return (
        <CustomScrollbar>
            <>
                {status === 1 ? (
                    <div className="events">
                        {events &&
                            events.map((item: EventPayload, id) => {
                                return (
                                    <div
                                        key={`${item.eventUUID}${id}`}
                                        className={`event${
                                            item.codeChar === 'EV_AUTHENTIFICATION_DENIED' ? ' error' : ''
                                        }`}>
                                        <div className="event__header">
                                            <div className="event__header-info">
                                                <p className="p--sm--bold">{item.deviceName}</p>

                                                <p className="p--sm--bold">{consvertDate(item.date)}</p>
                                            </div>

                                            <div
                                                className={`event__header-button
                                            ${item.codeChar === 'EV_INPUT_REGISTERED' ? 'event-enter' : ''}
                                            ${item.codeChar === 'EV_OUTPUT_REGISTERED' ? 'event-exit' : ''}`}>
                                                {(item.directionStr === 'Вход' ||
                                                    item.codeChar === 'EV_INPUT_REGISTERED') && (
                                                    <>
                                                        <EnterEvent />

                                                        <div className="p--sm--bold">Вход</div>
                                                    </>
                                                )}

                                                {(item.directionStr === 'Выход' ||
                                                    item.codeChar === 'EV_OUTPUT_REGISTERED') && (
                                                    <>
                                                        <ExitEvent />

                                                        <div className="p--sm--bold">Выход</div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <div className="event__body">
                                            <div className="event__body-photo">
                                                {item.photo ? (
                                                    <img src={`data:image/jpeg;base64, ${item.photo}`} alt="Emploee" />
                                                ) : (
                                                    <Profile />
                                                )}
                                            </div>

                                            <div className="event__body-info">
                                                {item.codeChar !== 'EV_AUTHENTIFICATION_DENIED' ? (
                                                    <>
                                                        {item.personFirstName ? (
                                                            <>
                                                                <div className="employee-surname">
                                                                    <div className="p--md--bold">
                                                                        {item.personLastName}
                                                                    </div>
                                                                </div>

                                                                <div className="employee-name">
                                                                    <div className="p--sm--normal">
                                                                        {`${item.personFirstName} ${item.personMiddleName}`}
                                                                    </div>
                                                                </div>

                                                                <div className="employee-id">
                                                                    <div className="p--sm--normal">
                                                                        {item.isPrintable && item.identificatorContent}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="free-passage">
                                                                <div className="p--md--bold">Свободный проход</div>
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div className="employee-error">
                                                        <ModalError />

                                                        {item.identificatorContent ? (
                                                            <div className="p--sm--bold">
                                                                {`Внимание! Предъявлен неизвестный ключ ${item.identificatorContent}`}
                                                            </div>
                                                        ) : (
                                                            <div className="p--sm--bold">
                                                                Внимание! Лицо не опознано
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="event__footer">
                                            {item.codeChar === 'EV_AUTHENTIFICATION_ALLOWED' ||
                                            item.codeChar === 'EV_AUTHENTIFICATION_DENIED' ? (
                                                <div className="p--sm--bold">Предъявлен идентификатор</div>
                                            ) : null}

                                            {(item.codeChar === 'EV_OUTPUT_REGISTERED' ||
                                                item.codeChar === 'EV_INPUT_REGISTERED') && (
                                                <div className="p--sm--bold">Совершен проход</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                ) : (
                    <div className="loader">
                        <Loader />
                    </div>
                )}
            </>
        </CustomScrollbar>
    );
};

export const Events = memo(EventsInner);
