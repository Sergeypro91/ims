import { Checkbox } from 'App/components/global/Checkbox/Checkbox';
import React, { useState } from 'react';

const RecordType = () => {
    const [personnel, changePersonnel] = useState(true);
    const [industrial, changeIndustrial] = useState(false);

    const selectPersonnel = () => {
        changePersonnel(true);
        changeIndustrial(false);
    };

    const selectIndustrial = () => {
        changePersonnel(false);
        changeIndustrial(true);
    };

    return (
        <>
            <Checkbox label="Кадровый" name="org" checked={personnel} onChange={() => selectPersonnel()} />
            <div style={{ marginTop: '15px' }} />
            <Checkbox label="Производственный" name="org" checked={industrial} onChange={() => selectIndustrial()} />
        </>
    );
};

export default RecordType;
