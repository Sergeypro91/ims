import React, { useState, memo } from 'react';
import { LicenseLogo } from 'assets/images/svgr/license_logo';
import { ReactLogo } from 'assets/images/svgr/react_logo';
import { LodashLogo } from 'assets/images/svgr/lodash_logo';
import { TypescriptLogo } from 'assets/images/svgr/typescript_logo';
import { JqueryLogo } from 'assets/images/svgr/jquery_logo';
import { EslintLogo } from 'assets/images/svgr/eslint_logo';
import { SpringLogo } from 'assets/images/svgr/spring_logo';
import { CustomScrollbar } from '../../../../ui/components/CustomScrollbar/CustomScrollbar';
import { carddexLicense, apacheLicense, mitLicense } from './licenses';
import './SettingsAboutProgram.scss';
import { IMSLogo } from 'assets/images/svgr/IMSLogo';

type License = string;

const SettingsAboutProgramInner = () => {
    const [license, setLicense] = useState<License | undefined>('carddexLicense');
    const softwareHandler = (ev: React.MouseEvent) => {
        const target = ev.target as HTMLDivElement;
        document.querySelectorAll('.iconblock').forEach((el) => {
            el.classList.remove('selected');
            console.log('removed class from:', el);
        });
        setLicense(target.dataset.license);
        target.closest('div')?.classList.add('selected');
    };
    return (
        <section className="page settings__about__program">
            <div className="page__wrapper">
                <div className="about__programm__wrapper">
                    <div className="about__programm__header">
                        <IMSLogo />
                        <div className="versions">
                            <div className="versions__version">
                                <p className="p--sm--normal">Версия Backend</p>
                                <span className="p--md--bold">v.0.3b</span>
                            </div>
                            <div className="versions__version">
                                <p className="p--sm--normal">Версия Базы Данных</p>
                                <span className="p--md--bold">v.0.3b</span>
                            </div>
                            <div className="versions__version">
                                <p className="p--sm--normal">Версия API</p>
                                <span className="p--md--bold">v.0.3b</span>
                            </div>
                        </div>
                    </div>
                    <div className="about__programm__body">
                        <section className="software" onClick={softwareHandler}>
                            {/* <CustomScrollbar> */}
                            <div data-license="carddexLicense" className="software__ims p--md--bold iconblock  selected">
                                <LicenseLogo />
                                Лицензионное соглашение на использование программного обеспечения «Carddex IMS»
                            </div>
                            <h2 className="software__header p--md--bold">Программное обеспечение</h2>
                            <div className="software__iconblocks">
                                <div className="iconblock react" data-license="mitLicense">
                                    <ReactLogo />
                                </div>
                                <div className="iconblock lodash" data-license="mitLicense">
                                    <LodashLogo />
                                </div>
                                <div className="iconblock typescript" data-license="apacheLicense">
                                    <TypescriptLogo />
                                </div>
                                <div className="iconblock jquery" data-license="apacheLicense">
                                    <JqueryLogo />
                                </div>
                                <div className="iconblock eslint" data-license="mitLicense">
                                    <EslintLogo />
                                </div>
                                <div className="iconblock spring" data-license="mitLicense">
                                    <SpringLogo />
                                </div>
                            </div>
                            <div className="software__rest">
                                <h3 className="p--sm--normal">А также</h3>
                                <div className="companys__list">
                                    <button>Node-sass </button>
                                    <button>Primereact</button>
                                    <button>Javascript-blowfish</button>
                                    <button>Axios-http </button>
                                    <button>Prettier</button>
                                    <button>MD5</button>
                                </div>
                            </div>
                            {/* </CustomScrollbar> */}
                        </section>

                        <section className="license">
                            <CustomScrollbar>
                                <div className="test">
                                    {license === 'carddexLicense'
                                        ? carddexLicense()
                                        : license === 'apacheLicense'
                                        ? apacheLicense()
                                        : license === 'mitLicense'
                                        ? mitLicense()
                                        : carddexLicense()}
                                </div>
                            </CustomScrollbar>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const SettingsAboutProgram = memo(SettingsAboutProgramInner);
