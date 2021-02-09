import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { appWindowSize, requestEvent } from 'redux/App/appActions';
import { State } from 'redux/store';
import ProgressBar from '@atlaskit/progress-bar';
import Routes from 'ui/pages/Routes/Routes';
import Toasts from './ui/components/Toasts/Toasts';
import './ui/pages/Staff/Staff.scss';

const App = () => {
    const dispatch = useDispatch();
    const { progressBarVisible, theme } = useSelector((state: State) => state.app, shallowEqual);
    const [localStorageCheck] = useState(JSON.parse(`${localStorage.getItem('user')}`));

    useEffect(() => {
        dispatch(requestEvent());
    }, [dispatch]);

    useEffect(() => {
        if (localStorageCheck) {
            console.log('Быстрый вход!');
        }
    }, [localStorageCheck]);

    useLayoutEffect(() => {
        function updateSize() {
            dispatch(
                appWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            );
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            {progressBarVisible && (
                <div className="progressbar">
                    <ProgressBar isIndeterminate />
                </div>
            )}

            <Routes />

            <Toasts />
        </div>
    );
};

export default App;
