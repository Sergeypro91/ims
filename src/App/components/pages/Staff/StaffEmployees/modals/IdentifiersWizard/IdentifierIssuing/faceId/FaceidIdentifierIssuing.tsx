import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { staffEmployeesSetupWizardPhoto } from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { ImageLoader } from 'App/components/global/ImageLoader/ImageLoader';
import './FaceidIdentifierIssuing.scss';

const FaceidIdentifierIssuingInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

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
                    dispatch(staffEmployeesSetupWizardPhoto(reader.result)); //base64encoded string
                };

                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };

                setInputsState({ ...inputsState, errorSize: false, errorFormate: false, succes: true });

                alert('Good - image is upload');
            } else {
                if (event.target.files[0].size > 1000000) {
                    setInputsState({ ...inputsState, errorSize: true, errorFormate: false, succes: false });

                    dispatch(staffEmployeesSetupWizardPhoto(null));

                    alert('Error - image size is to huge');
                }

                if (event.target.files[0].type !== 'image/jpeg' && event.target.files[0].type !== 'image/png') {
                    setInputsState({ ...inputsState, errorSize: false, errorFormate: true, succes: false });

                    dispatch(staffEmployeesSetupWizardPhoto(null));

                    alert('Error - image format isn`t correct');
                }
            }
        }
    };

    return (
        <div className="faceid-identifier-issuing">
            <div className="faceid-identifier-issuing__header">
                <div className="p--md--bold">Создание Face ID</div>
            </div>
            <div className="faceid-identifier-issuing__body">
                <div
                    className="faceid-identifier-issuing__body-photo"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${identifiersWizard.photo})`,
                        backgroundPosition: 'center'
                    }}
                />
                <div className="faceid-identifier-issuing__body-buttons">
                    <ImageLoader name="imageLoad" label="Загрузить фото" onChange={inputImageLoad} />

                    <Buttons name="Read" label="Фото сотрудника" typical />
                </div>
            </div>
            <div className="faceid-identifier-issuing__footer">
                <div className="faceid-identifier-issuing__footer-descr">
                    {(!inputsState.errorSize === !inputsState.succes) === !inputsState.errorFormate && (
                        <div className="p--sm--normal">Размер загружаемого фото должен быть не более 1 МБ</div>
                    )}
                    {inputsState.errorSize && (
                        <div className="p--sm--normal error">Файл слишком велик, попробуйте другой</div>
                    )}
                    {inputsState.errorFormate && (
                        <div className="p--sm--normal error">Неверный тип файла, попробуйте другой</div>
                    )}
                    {inputsState.succes && <div className="p--sm--normal succes">Файл удачно загружен</div>}
                </div>
            </div>
        </div>
    );
};

export const FaceidIdentifierIssuing = memo(FaceidIdentifierIssuingInner);
