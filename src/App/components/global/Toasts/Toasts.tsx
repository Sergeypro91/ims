import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { appToastClear } from 'redux/App/appActions';
import { State } from 'redux/store';
import { ModalWarning } from 'assets/images/svgr/modal-warning';
import { СheckMark } from 'assets/images/svgr/check-mark';
import { ModalError } from 'assets/images/svgr/modal-error';
import './Toasts.scss';

const ToastsInner = () => {
    const dispatch = useDispatch();
    const { toasts } = useSelector((state: State) => state.app, shallowEqual);

    useEffect(() => {
        let timeoutForToast: number;

        if (toasts.length > 0) {
            timeoutForToast = setTimeout(() => {
                dispatch(appToastClear());
            }, 5000);
        }

        return () => {
            if (toasts.length < 0) {
                console.log('enter');
                clearTimeout(timeoutForToast);
            }
        };
    }, [dispatch, toasts]);

    return (
        <div className="toasts">
            {toasts.map((item, id) => {
                return (
                    <div key={`${item.type}${id}`} className={`toast ${item.type}`}>
                        {item.type === 'warning' && <ModalWarning />}

                        {item.type === 'success' && <СheckMark />}

                        {item.type === 'error' && <ModalError />}

                        <div className="p--md--normal">{item.message}</div>
                    </div>
                );
            })}
        </div>
    );
};

export const Toasts = memo(ToastsInner);
