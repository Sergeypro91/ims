import React, { useRef, useState, useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { useHistory } from 'react-router-dom';
import { useTitle } from 'react-use';
import { appUser, appHideProgressBar, appShowProgressBar, appToastAdd } from 'redux/App/appActions';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Checkbox } from 'App/components/global/Checkbox/Checkbox';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import rightImage from 'assets/images/png/group.png';
import { Logo } from 'assets/images/svgr/logo';
import { Attention } from 'assets/images/svgr/bx-attention';
import config from 'App/../config/config.json';
import './Login.scss';

const LoginInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector((state: State) => state.app, shallowEqual);
    const [isValid, setIsValid] = useState(false);
    const [progress, setProgress] = useState(false);
    // const [warning, setWarning] = useState('');
    const [error, setError] = useState('');
    const leftPart = useRef<HTMLDivElement>(null);
    const rightPart = useRef<HTMLDivElement>(null);
    const initialState = {
        login: '',
        password: '',
        saved: false
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    useTitle(`IMS CARDDEX ${config.defaultTitle}`);

    const logining = () => {
        if (isValid) {
            setProgress(true);
            dispatch(appShowProgressBar());

            setTimeout(() => {
                const toast = {
                    type: 'success',
                    message: 'Вы успешно авторизировались'
                };

                if (inputsState.login === 'admin' && inputsState.password === 'Superadmin') {
                    const uthorization = { ...inputsState, isAuthenticated: true };

                    dispatch(appUser(uthorization));
                    dispatch(appToastAdd(toast));

                    leftPart.current?.classList.add('animation');
                    rightPart.current?.classList.add('animation');
                } else {
                    setError('Не верный логин или пароль!');
                }

                setProgress(false);

                dispatch(appHideProgressBar());
            }, 2000);
        }
    };

    useEffect(() => {
        setError('');

        if (inputsState.login && inputsState.password) {
            const validationArr = Array.from(document.querySelectorAll('.custom-input__wrapper')).map((e) => {
                return !e.classList.contains('custom-input__wrapper--invalid');
            });

            setIsValid(!validationArr.includes(false));
        }
    }, [inputsState.login, inputsState.password]);

    return (
        <div className="login">
            {/* Left side */}

            <div
                className="login__left login-left"
                ref={leftPart}
                onAnimationEnd={() => {
                    if (user.isAuthenticated) {
                        history.push('/security-post-central');
                    }
                }}>
                <div className="login-left__content">
                    <div className="login-left__title">
                        <div className="p--lg--bold">Вход в систему</div>
                    </div>

                    <form
                        className="login-left__form"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                logining();
                            }
                        }}>
                        <Inputs
                            name="login"
                            label="Имя пользователя"
                            icon
                            onInputChange={inputHandler}
                            type="text"
                            value={inputsState.login}
                            error={!!error}
                            validation="(?=.*[a-z]).{5,}" // [a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$
                            validationTitle="Логин пользователя должен быть не меньше 5 символов."
                            autoFocus
                        />

                        <Inputs
                            name="password"
                            label="Пароль пользователя"
                            icon
                            onInputChange={inputHandler}
                            type="password"
                            value={inputsState.password}
                            error={!!error}
                            // validation="(*).{0,}" // (?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}
                            // validationTitle="Пароль должен содержать не менее 6 символов, в том числе цифры, прописные и строчные буквы латинского алфавита. Пробелы являются недопустимым символом."
                        />

                        <Checkbox
                            name="userSave"
                            checked={inputsState.saved}
                            label="Автоматически входить на данном устройстве"
                            onChange={() => setInputsState({ ...inputsState, saved: !inputsState.saved })}
                        />

                        <Buttons
                            name={!progress ? 'Enter' : 'Loader'}
                            label="Вход"
                            active
                            typical={isValid}
                            disable={!isValid}
                            onPress={(e) => {
                                logining();
                                e.preventDefault();
                            }}
                        />
                    </form>

                    <div className="login-left__message">
                        {/* <div className="login-left__message-warning">
                            <div className="p--md--normal">{warning}</div>
                        </div> */}
                        {error && (
                            <div className="login-left__message-error">
                                <Attention />
                                <div className="p--md--normal">{error}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right side */}

            <div className="login__right login-right" ref={rightPart}>
                <div className="login-right__content">
                    <div className="login-right__header">
                        <div className="login-right__logo">
                            <Logo />
                        </div>
                    </div>

                    <div className="login-right__body">
                        <img className="login-right__image" src={rightImage} alt="Bilbords" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Login = memo(LoginInner);
