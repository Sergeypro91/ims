import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import Toast from './Toast/Toast';
import './Toasts.scss';

const Toasts = () => {
    const { toasts } = useSelector((state: State) => state.app, shallowEqual);

    return (
        <div className="toasts">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    );
};

export default memo(Toasts);
