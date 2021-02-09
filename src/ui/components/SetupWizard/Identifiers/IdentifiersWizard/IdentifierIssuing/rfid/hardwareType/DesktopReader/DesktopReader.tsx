import React, { useEffect, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    identifierSetupWizardLimitTimeIsOn,
    identifierSetupWizardLimitTimeFrom,
    identifierSetupWizardLimitTimeTo,
    identifierSetupWizardLimitPassIsOn,
    identifierSetupWizardLimitPass
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import {
    identifiersRfidKey,
    requestIdentifiersRfidCardreaders,
    requestIdentifiersRfidCardreaderInit,
    identifiersRfidReader,
    identifiersRfidPort,
    requestIdentifiersRfidCardreaderConnect
} from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Limits } from 'ui/components/Limits/Limits';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './DesktopReader.scss';

const DesktopReaderInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersRfid } = useSelector((state: State) => state.identifiers, shallowEqual);

    useEffect(() => {
        dispatch(identifiersRfidKey(''));
        dispatch(requestIdentifiersRfidCardreaderInit());
    }, [dispatch]);

    useEffect(() => {
        if (!identifiersRfid.cardreader) {
            if (identifiersRfid.cardreaders.length > 0) {
                dispatch(identifiersRfidReader(identifiersRfid.cardreaders[0]));
            }
        }
    }, [dispatch, identifiersRfid.cardreaders, identifiersRfid.cardreader]);

    useEffect(() => {
        if (!identifiersRfid.port) {
            if (identifiersRfid.ports.length > 0) {
                dispatch(identifiersRfidPort(identifiersRfid.ports[0]));
            }
        } else {
            dispatch(requestIdentifiersRfidCardreaderConnect(identifiersRfid.port));
        }
    }, [dispatch, identifiersRfid.ports, identifiersRfid.port]);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        if (target.name === 'reader') {
            const searchingCardreader = identifiersRfid.cardreaders[findIndexFunc(identifiersRfid.cardreaders, target, 'name')];

            dispatch(identifiersRfidReader(searchingCardreader));
        } else if (target.name === 'port') {
        }
    };

    return (
        <div className="desktop-reader">
            <div className="desktop-reader__title">
                <div className="p--md--bold">Выберите точку доступа для чтения идентификатора</div>
            </div>

            <div className="desktop-reader__body">
                <div className="desktop-reader-body__left">
                    <div className="reader-block">
                        <Inputs
                            type="text"
                            name="reader"
                            label="Считыватель"
                            onInputChange={(e) => inputHandler(e)}
                            value={identifiersRfid.cardreader ? identifiersRfid.cardreader.name : ''}
                            list={identifiersRfid.cardreaders.map((elem) => {
                                return elem.name;
                            })}
                        />

                        <Buttons name="Refresh" size="m" typical onPress={() => dispatch(requestIdentifiersRfidCardreaders())} />
                    </div>

                    <div className="port-block">
                        <Inputs
                            type="text"
                            name="port"
                            label="Выберите порт"
                            onInputChange={(e) => inputHandler(e)}
                            value={identifiersRfid.port ? identifiersRfid.port.name : ''}
                            list={identifiersRfid.ports.map((elem) => {
                                return elem.name;
                            })}
                        />

                        <Buttons name="Refresh" size="m" typical onPress={() => dispatch(requestIdentifiersRfidCardreaderInit())} />
                    </div>

                    {identifiersRfid.cardreader && identifiersRfid.cardreader.supportAutoread ? null : (
                        <Buttons
                            name="Read"
                            label="Считать"
                            typical
                            disable={identifiersRfid.port ? false : true}
                            onPress={identifiersRfid.port ? () => console.log('Active') : undefined}
                        />
                    )}
                </div>

                <div className="desktop-reader-body__right">
                    <Inputs type="text" name="key" label="Ключ №" onInputChange={() => undefined} value={identifiersRfid.key} />

                    <Limits
                        timeToggler={() => dispatch(identifierSetupWizardLimitTimeIsOn())}
                        limitTimeIsOff={identifiersGeneral.limits.limitTimeIsOff}
                        timeFromFunc={(e) => dispatch(identifierSetupWizardLimitTimeFrom(e))}
                        limitTimeFrom={identifiersGeneral.limits.limitTime.limitTimeFrom}
                        timeToFunc={(e) => dispatch(identifierSetupWizardLimitTimeTo(e))}
                        limitTimeTo={identifiersGeneral.limits.limitTime.limitTimeTo}
                        passToggler={() => dispatch(identifierSetupWizardLimitPassIsOn())}
                        limitPassIsOff={identifiersGeneral.limits.limitPassIsOff}
                        passCountFunc={(e) => dispatch(identifierSetupWizardLimitPass(e))}
                        limitPassCount={identifiersGeneral.limits.limitPass}
                        clearTimeLimit={() => {
                            dispatch(identifierSetupWizardLimitTimeFrom(''));
                            dispatch(identifierSetupWizardLimitTimeTo(''));
                        }}
                        clearPassLimit={() => dispatch(identifierSetupWizardLimitPass(''))}
                        minPass={1}
                        maxPass={10000}
                    />
                </div>
            </div>
        </div>
    );
};

export const DesktopReader = memo(DesktopReaderInner);
