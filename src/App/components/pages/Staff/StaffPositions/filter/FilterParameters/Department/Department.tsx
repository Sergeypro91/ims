import React, { useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';

const Department = () => {
    const [dep, changeDep] = useState('');

    return (
        <>
            <Inputs
                name="department"
                type="input"
                value={dep}
                onInputChange={(e) => changeDep(e.target.value)}
                placeholder="Введите что-нибудь"
            />
        </>
    );
};

export default Department;
