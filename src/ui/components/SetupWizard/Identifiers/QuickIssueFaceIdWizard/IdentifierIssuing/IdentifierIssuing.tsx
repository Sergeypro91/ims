import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    identifierSetupWizardLimitTimeIsOn,
    identifierSetupWizardLimitTimeFrom,
    identifierSetupWizardLimitTimeTo,
    identifierSetupWizardLimitPassIsOn,
    identifierSetupWizardLimitPass
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { identifiersFaceIdPhoto } from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdActions';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { ImageLoader } from 'ui/components/ImageLoader/ImageLoader';
import { Limits } from 'ui/components/Limits/Limits';
import './IdentifierIssuing.scss';

const IdentifierIssuingInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersFaceId } = useSelector((state: State) => state.identifiers, shallowEqual);

    const initialState = {
        errorSize: false,
        errorFormate: false,
        succes: false,
        format: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputImageLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            if (
                (event.target.files[0].size < 1000000 && event.target.files[0].type === 'image/jpeg') ||
                event.target.files[0].type === 'image/png'
            ) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);

                reader.onload = function () {
                    dispatch(identifiersFaceIdPhoto(reader.result)); //base64encoded string
                };

                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };

                setInputsState({
                    ...inputsState,
                    errorSize: false,
                    errorFormate: false,
                    succes: true
                });

                alert('Good - image is upload');
            } else {
                if (event.target.files[0].size > 1000000) {
                    setInputsState({
                        ...inputsState,
                        errorSize: true,
                        errorFormate: false,
                        succes: false
                    });

                    dispatch(identifiersFaceIdPhoto(null));

                    alert('Error - image size is to huge');
                }

                if (event.target.files[0].type !== 'image/jpeg' && event.target.files[0].type !== 'image/png') {
                    setInputsState({
                        ...inputsState,
                        errorSize: false,
                        errorFormate: true,
                        succes: false
                    });

                    dispatch(identifiersFaceIdPhoto(null));

                    alert('Error - image format isn`t correct');
                }
            }
        }
    };

    return (
        <div className="quick-issuing-faceid">
            <div className="quick-issuing-faceid__left">
                <div className="quick-issuing-faceid__header">
                    <div className="p--md--bold">Создание Face ID</div>
                </div>

                <div className="quick-issuing-faceid__body">
                    <div
                        className="quick-issuing-faceid__body-photo"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${identifiersFaceId.photo})`,
                            backgroundPosition: 'center'
                        }}
                    />

                    <div className="quick-issuing-faceid__body-buttons">
                        <ImageLoader name="imageLoad" label="Загрузить фото" onChange={inputImageLoad} />

                        <Buttons name="Read" label="Фото сотрудника" typical />
                    </div>
                </div>

                <div className="quick-issuing-faceid__footer">
                    <div className="quick-issuing-faceid__footer-descr">
                        {(!inputsState.errorSize === !inputsState.succes) === !inputsState.errorFormate && (
                            <div className="p--sm--normal">Размер загружаемого фото должен быть не более 1 МБ</div>
                        )}
                        {inputsState.errorSize && <div className="p--sm--normal error">Файл слишком велик, попробуйте другой</div>}
                        {inputsState.errorFormate && <div className="p--sm--normal error">Неверный тип файла, попробуйте другой</div>}
                        {inputsState.succes && <div className="p--sm--normal succes">Файл удачно загружен</div>}
                    </div>
                </div>
            </div>

            <div className="quick-issuing-faceid__right">
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
    );
};

export const IdentifierIssuing = memo(IdentifierIssuingInner);
