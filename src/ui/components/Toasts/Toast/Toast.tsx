import React, { memo, useEffect } from 'react';
import ToastProps from './Toast.types';
import { ModalWarning } from 'assets/images/svgr/modal-warning';
import { СheckMark } from 'assets/images/svgr/check-mark';
import { ModalError } from 'assets/images/svgr/modal-error';
import { useDispatch } from 'react-redux';
import { appToastClear } from 'redux/App/appActions';
import './Toast.scss';

const Toast = (props: ToastProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(appToastClear(props.toast.id));
        }, 3000);
    }, [dispatch, props.toast.id]);

    return (
        <div className={`toast ${props.toast.type}`}>
            {props.toast.type === 'warning' && <ModalWarning />}
            {props.toast.type === 'success' && <СheckMark />}
            {props.toast.type === 'error' && <ModalError />}

            <div className="p--md--normal">{props.toast.message}</div>
        </div>
    );
};

export default memo(Toast);
