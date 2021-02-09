import React, { useRef, useEffect, useMemo, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    setupWizardCurrentStep,
    setupWizardStepsCount,
    setupWizardMarckerWidth
} from 'redux/SetupWizard/SetupWizardGeneral/setupWizardGeneralActions';
import { ChekMarck } from 'assets/images/svgr/chekmarck';
import { usePrevious } from 'hooks/usePrevious/usePrevious';
import { WizardProps } from './wizardProgressBarType';
import './WizardProgressBar.scss';

const WizardProgressBarInner = (props: WizardProps) => {
    const dispatch = useDispatch();
    const { setupWizardGeneral } = useSelector((state: State) => state.setupWizard, shallowEqual);
    const steps = useRef<HTMLDivElement>(null);
    const stepsArr: HTMLDivElement[] = useMemo(() => [], []);
    const marcker = useRef<HTMLDivElement>(null);
    const prevStepPosition = usePrevious(setupWizardGeneral.currentStep);
    const indent = useRef(47);
    const indentBetween = useRef(0);
    // const renderCounter = useRef(0);
    const dotSize = useRef(0);

    useEffect(() => {
        dispatch(setupWizardStepsCount(stepsArr.length));
    }, [stepsArr, dispatch]);

    useEffect(() => {
        if (setupWizardGeneral.currentStep === 0) {
            dispatch(setupWizardMarckerWidth(indent.current));
        } else {
            if (indentBetween.current !== 0) {
                dispatch(
                    setupWizardMarckerWidth(
                        indent.current + indentBetween.current * setupWizardGeneral.currentStep
                    )
                );
            }
        }
    }, [setupWizardGeneral.currentStep, dispatch]);

    useEffect(() => {
        const elem = document.querySelector('.wizard__content');

        if (elem) {
            if (prevStepPosition! < setupWizardGeneral.currentStep) {
                elem.children[0].classList.add('anim-next');
            } else if (prevStepPosition! > setupWizardGeneral.currentStep) {
                elem.children[0].classList.add('anim-prev');
            } else {
                elem.children[0].classList.add('static');
            }
        }
    }, [prevStepPosition, setupWizardGeneral.currentStep]);

    useEffect(() => {
        if (steps.current?.clientWidth) {
            dotSize.current = document.querySelector('.wizard-steps-item__title')?.clientWidth! + 6;

            if (dotSize.current) {
                const indentStertPos = dotSize.current / 2 + indent.current;

                indentBetween.current =
                    (steps.current?.clientWidth - indentStertPos * 2) / (stepsArr.length - 1);
            }
        }
    }, [stepsArr]);

    const tabClick = (id: number) => {
        const changeStep = () => {
            dispatch(setupWizardCurrentStep(id));

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
                        <div
                            key={elem.props.index}
                            ref={(e: HTMLDivElement) => {
                                stepsArr[elem.props.index] = e;
                            }}
                            className={`
                                wizard__steps-item
                                wizard__steps-${elem.props.index}
                                ${
                                    elem.props.index === setupWizardGeneral.currentStep
                                        ? 'wizard__steps-item--active'
                                        : ''
                                }
                                ${
                                    elem.props.isValid
                                        ? 'wizard__steps-item--valid'
                                        : 'wizard__steps-item--invalid'
                                }
                            `}
                        >
                            <button
                                className="wizard-steps-item__title"
                                onClick={() => tabClick(elem.props.index)}
                                style={
                                    elem.props.index === 0
                                        ? { left: `${indent.current}px` }
                                        : {
                                              left: `${
                                                  indent.current +
                                                  indentBetween.current * elem.props.index
                                              }px`
                                          }
                                }
                                type="button"
                                tabIndex={elem.props.isValid ? 0 : -1}
                            >
                                {elem.props.index < setupWizardGeneral.currentStep ? (
                                    <div className="chekmarck">
                                        <ChekMarck />
                                    </div>
                                ) : (
                                    <div className="this-elem p--sm--normal">
                                        {elem.props.index + 1}
                                    </div>
                                )}
                            </button>

                            {setupWizardGeneral.currentStep === elem.props.index && (
                                <div
                                    className="wizard-steps-item__label"
                                    style={{
                                        width: `${indent.current * 2 + dotSize.current}px`,
                                        left: `${
                                            indent.current +
                                            indentBetween.current * elem.props.index +
                                            dotSize.current / 2 -
                                            (indent.current * 2 + dotSize.current) / 2
                                        }px`
                                    }}
                                >
                                    <div className="p--sm--normal">{elem.props.header}</div>
                                </div>
                            )}
                        </div>
                    );
                })}

                <div ref={marcker} className="wizard__steps-marcker">
                    <div
                        className="wizard__steps-marcker-item"
                        style={{ width: `${setupWizardGeneral.marckerElemWidth}px` }}
                    />
                </div>
            </div>

            <div className="wizard__content">
                {Array.isArray(props.children)
                    ? props.children[setupWizardGeneral.currentStep]
                    : props.children}
            </div>
        </div>
    );
};

export const WizardProgressBar = memo(WizardProgressBarInner);
