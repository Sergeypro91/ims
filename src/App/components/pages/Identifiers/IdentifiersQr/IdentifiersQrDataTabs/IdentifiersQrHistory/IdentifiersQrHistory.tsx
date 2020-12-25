import React, { memo } from 'react';
import './IdentifiersQrHistory.scss';

const IdentifiersQrHistoryInner = () => {
    return (
        <div className="identifiers-qr-history">
            <div className="identifiers-history identifiers-history--active">
                <div className="identifiers-history__head">
                    <div className="identifiers-history__head-date">
                        <div className="p--sm--normal">06.11.2020</div>
                    </div>
                </div>

                <div className="identifiers-history__body">
                    <div className="identifiers-history__body-status">
                        <div className="p--md--normal">Статус: Экспертиза</div>
                    </div>

                    <div className="identifiers-history__body-owner">
                        <div className="p--md--normal">Владелец: Журавлев А. В.</div>
                    </div>
                </div>
            </div>

            <div className="identifiers-history">
                <div className="identifiers-history__head">
                    <div className="identifiers-history__head-date">
                        <div className="p--sm--normal">01.11.2020 - 06.11.2020</div>
                    </div>
                </div>

                <div className="identifiers-history__body">
                    <div className="identifiers-history__body-status">
                        <div className="p--md--normal">Статус: Экспертиза</div>
                    </div>

                    <div className="identifiers-history__body-owner">
                        <div className="p--md--normal">Владелец: Журавлев А. В.</div>
                    </div>
                </div>
            </div>

            <div className="identifiers-history">
                <div className="identifiers-history__head">
                    <div className="identifiers-history__head-date">
                        <div className="p--sm--normal">01.11.2020</div>
                    </div>
                </div>

                <div className="identifiers-history__body">
                    <div className="identifiers-history__body-status">
                        <div className="p--md--normal">Статус: Резерв</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const IdentifiersQrHistory = memo(IdentifiersQrHistoryInner);
