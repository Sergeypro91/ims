import React, { useRef, useEffect, useMemo, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { appWizardCurrentStep, appWizardStepsCount, appWizardMarckerWidth } from 'redux/App/appActions';
import { ChekMarck } from 'assets/images/svgr/chekmarck';
import { usePrevious } from 'hooks/usePrevious/usePrevious';
import { WizardProps } from './wizardProgressBarType';
import './WizardProgressBar.scss';

const WizardProgressBarInner = (props: WizardProps) => {
    const dispatch = useDispatch();
    const { setupWizard } = useSelector((state: State) => state.app, shallowEqual);
    const steps = useRef<HTMLDivElement>(null);
    const stepsArr: HTMLButtonElement[] = useMemo(() => [], []);
    const marcker = useRef<HTMLDivElement>(null);
    const prevStepPosition = usePrevious(setupWizard.currentStep);
    const indent = useRef(47);
    const indentBetween = useRef(0);
    // const renderCounter = useRef(0);
    const dotSize = useRef(0);

    useEffect(() => {
        dispatch(appWizardStepsCount(stepsArr.length));
    }, [stepsArr, dispatch]);

    useEffect(() => {
        if (setupWizard.currentStep === 0) {
            dispatch(appWizardMarckerWidth(indent.current));
        } else {
            if (indentBetween.current !== 0) {
                dispatch(appWizardMarckerWidth(indent.current + indentBetween.current * setupWizard.currentStep));
            }
        }
    }, [setupWizard.currentStep, dispatch]);

    useEffect(() => {
        const elem = document.querySelector('.wizard__content');

        if (elem) {
            if (prevStepPosition! < setupWizard.currentStep) {
                elem.children[0].classList.add('anim-next');
            } else if (prevStepPosition! > setupWizard.currentStep) {
                elem.children[0].classList.add('anim-prev');
            } else {
                elem.children[0].classList.add('static');
            }
        }
    }, [prevStepPosition, setupWizard.currentStep]);

    useEffect(() => {
        if (steps.current?.clientWidth) {
            dotSize.current = document.querySelector('.wizard-steps-item__title')?.clientWidth! + 6;

            if (dotSize.current) {
                const indentStertPos = dotSize.current / 2 + indent.current;

                indentBetween.current = (steps.current?.clientWidth - indentStertPos * 2) / (stepsArr.length - 1);
            }
        }
    }, [stepsArr]);

    const tabClick = (id: number) => {
        const changeStep = () => {
            dispatch(appWizardCurrentStep(id));

            marcker.current?.classList.add('wizard__steps-marcker--animation');

            document.querySelector(`.wizard__steps-${id}`)?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
        };

        if (id > 0) {
            if (props.children[id].props.isValid || props.children[id - 1].props.isValid) {
                changeStep();
            } else {
                if (props.children[id].props.isValid) {
                    changeStep();
                }
            }
        } else if (id === 0) {
            changeStep();
        }
    };

    return (
        <div className="wizard">
            <div ref={steps} className="wizard__steps">
                {React.Children.map(props.children, (elem) => {
                    return (
                        <button
                            key={elem.props.index}
                            ref={(e: HTMLButtonElement) => {
                                stepsArr[elem.props.index] = e;
                            }}
                            className={`
                                wizard__steps-item
                                wizard__steps-${elem.props.index}
                                ${elem.props.index === setupWizard.currentStep ? 'wizard__steps-item--active' : ''}
                                ${elem.props.isValid ? 'wizard__steps-item--valid' : 'wizard__steps-item--invalid'}
                            `}
                            type="button">
                            <div
                                className="wizard-steps-item__title"
                                onClick={() => tabClick(elem.props.index)}
                                style={
                                    elem.props.index === 0
                                        ? { left: `${indent.current}px` }
                                        : {
                                              left: `${indent.current + indentBetween.current * elem.props.index}px`
                                          }
                                }>
                                {elem.props.index < setupWizard.currentStep ? (
                                    <div className="chekmarck">
                                        <ChekMarck />
                                    </div>
                                ) : (
                                    <div className="this-elem p--sm--normal">{elem.props.index + 1}</div>
                                )}
                            </div>

                            {setupWizard.currentStep === elem.props.index && (
                                <div
                                    className="wizard-steps-item__label p--sm--normal"
                                    style={{
                                        width: `${indent.current * 2 + dotSize.current}px`,
                                        left: `${
                                            indent.current +
                                            indentBetween.current * elem.props.index +
                                            dotSize.current / 2 -
                                            (indent.current * 2 + dotSize.current) / 2
                                        }px`
                                    }}>
                                    {elem.props.header}
                                </div>
                            )}
                        </button>
                    );
                })}

                <div ref={marcker} className="wizard__steps-marcker">
                    <div
                        className="wizard__steps-marcker-item"
                        style={{ width: `${setupWizard.marckerElemWidth}px` }}
                    />
                </div>
            </div>

            <div className="wizard__content">
                {Array.isArray(props.children) ? props.children[setupWizard.currentStep] : props.children}
            </div>
        </div>
    );
};

export const WizardProgressBar = memo(WizardProgressBarInner);
