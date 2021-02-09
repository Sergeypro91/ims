import React, { useEffect, useRef, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { identifierSetupWizardClear } from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { setupWizardCleared } from 'redux/SetupWizard/SetupWizardGeneral/setupWizardGeneralActions';
import { setupWizardDevicesClear } from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Draggable from 'react-draggable';
import { Close } from 'assets/images/svgr/bx-x';
import { Buttons } from 'ui/components/Buttons/Buttons';
import currentPath from 'utils/currentPath/currentPath';
import { ModalProps } from 'ui/components/Modal/modalTypes';
import { ModalWarning } from 'assets/images/svgr/modal-warning';
import { ModalDelete } from 'assets/images/svgr/modal-delete';
import { ModalError } from 'assets/images/svgr/modal-error';
import { ModalInfo } from 'assets/images/svgr/modal-info';
import { Add } from 'assets/images/svgr/add_button';
import { Edit } from 'assets/images/svgr/edit_button';
import './Modal.scss';

const ModalInner = (props: ModalProps) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    const defaultPath = location.pathname.replace(`/${props.modalName}`, '');
    const modalPath = `${defaultPath}/${props.modalName}`;
    const modal = useRef<HTMLDivElement>(null);

    const closeModal = useCallback(() => {
        if (modal.current) {
            modal.current.classList.remove('visible');
        }

        setTimeout(() => {
            dispatch(setupWizardCleared());
            dispatch(identifierSetupWizardClear());
            dispatch(setupWizardDevicesClear());

            history.push(defaultPath);
        }, 300);
    }, [modal, history, defaultPath, dispatch]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && modal.current) {
                closeModal();
            }
        };

        document.addEventListener('keydown', onKeyDown, false);

        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [modal, closeModal]);

    useEffect(() => {
        if (modalPath === currentPath() && modal.current) {
            modal.current.classList.add('visible');
        }
    });

    return (
        <Route exact path={modalPath}>
            <div ref={modal} className="modal-wrapper">
                <Draggable bounds="parent" handle="strong">
                    <div
                        className={`
                        modal
                        ${
                            props.modalName === 'add' ||
                            props.modalName === 'edit' ||
                            props.modalName === 'delete' ||
                            props.modalName === 'restore' ||
                            props.modalName === 'timetable' ||
                            props.modalName === 'access-point-control'
                                ? 'dialog-modal'
                                : ''
                        } 
                        ${
                            props.modalName === 'delete' ||
                            props.modalName === 'warning' ||
                            props.modalName === 'restore' ||
                            props.modalName === 'error' ||
                            props.modalName === 'info'
                                ? 'alert-modal'
                                : ''
                        } 
                        ${props.modalName === 'identifiers-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'quick-issue-rfid-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'quick-issue-faceId-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'quick-issue-2d-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'quick-issue-biom-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'access-point-wizard' ? 'wizard-modal' : ''}
                        ${props.modalName === 'access-point-control' ? 'access-point-control' : ''}
                    `}
                    >
                        <strong className="modal__header modal-header">
                            {props.modalIcon && (
                                <div className={`modal-header__icon ${props.modalIcon}`}>
                                    {props.modalName === 'add' && <Add />}
                                    {props.modalName === 'info' && <ModalInfo />}
                                    {props.modalName === 'edit' && <Edit />}
                                    {props.modalName === 'timetable' && <Edit />}
                                    {props.modalName === 'access-point-control' && <Edit />}
                                    {props.modalName === 'identifiers-wizard' && <Edit />}
                                    {props.modalName === 'quick-issue-rfid-wizard' && <Edit />}
                                    {props.modalName === 'quick-issue-faceId-wizard' && <Edit />}
                                    {props.modalName === 'quick-issue-2d-wizard' && <Edit />}
                                    {props.modalName === 'quick-issue-biom-wizard' && <Edit />}
                                    {props.modalName === 'access-point-wizard' && <Edit />}
                                </div>
                            )}
                            <span className="modal-header__label p--md--bold">{props.modalHeader}</span>

                            <button type="button" className="modal-header__toggler" onClick={closeModal}>
                                <Close />
                            </button>
                        </strong>

                        <div className="modal__body">
                            {props.modalName === 'add' ||
                            props.modalName === 'edit' ||
                            props.modalName === 'timetable' ||
                            props.modalName === 'access-point-control' ||
                            props.modalName === 'identifiers-wizard' ||
                            props.modalName === 'quick-issue-rfid-wizard' ||
                            props.modalName === 'quick-issue-faceId-wizard' ||
                            props.modalName === 'quick-issue-2d-wizard' ||
                            props.modalName === 'quick-issue-biom-wizard' ||
                            props.modalName === 'access-point-wizard' ? (
                                props.children
                            ) : (
                                <>
                                    <div className={`modal__body-icon ${props.modalName}`}>
                                        {props.modalName === 'error' && <ModalError />}
                                        {props.modalName === 'warning' && <ModalWarning />}
                                        {props.modalName === 'delete' && <ModalDelete />}
                                        {props.modalName === 'restore' && <ModalDelete />}
                                        {props.modalName === 'info' && <ModalInfo />}
                                    </div>
                                    <div className="modal__body-info p--md--normal">{props.children}</div>
                                </>
                            )}
                        </div>

                        <div className="modal__footer modal-footer">
                            <div className="modal-footer__content">
                                {props.successButtonLabel && (
                                    <Buttons
                                        name="Success"
                                        label={props.successButtonLabel}
                                        typical
                                        disable={props.succesDisabled}
                                        onPress={props.onSuccessClick}
                                    />
                                )}

                                {props.denyButtonLabel && (
                                    <Buttons name="Deny" label={props.denyButtonLabel} typical danger onPress={props.onDenyClick} />
                                )}

                                {props.cancelButtonLabel && (
                                    <Buttons name="Cancel" label={props.cancelButtonLabel} typical onPress={props.onCancelClick} />
                                )}
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </Route>
    );
};

export const Modal = memo(ModalInner);
