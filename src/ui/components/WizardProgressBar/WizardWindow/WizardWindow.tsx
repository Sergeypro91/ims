import React, { memo } from 'react';
import { WizarWindowProps } from './wizarWindowType';

const WizardWindowInner = (props: WizarWindowProps) => {
    return <>{props.children}</>;
};

export const WizardWindow = memo(WizardWindowInner);
