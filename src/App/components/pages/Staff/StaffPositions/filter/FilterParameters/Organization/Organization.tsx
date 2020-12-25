import { Inputs } from 'App/components/global/Inputs/Inputs';
import React, { useState } from 'react';

const Organization = () => {
    const [org, changeOrg] = useState('');

    return (
        <>
            <Inputs
                name="department"
                type="input"
                value={org}
                onInputChange={(e) => changeOrg(e.target.value)}
                placeholder="Введите что-нибудь"
            />
        </>
    );
};

export default Organization;
