import React, { useEffect, useState } from 'react';
import { FadeProps } from './fadeType';
import './Fade.scss';

const Fade = (props: FadeProps) => {
    const [shouldRender, setRender] = useState(props.show);

    useEffect(() => {
        if (props.show) setRender(true);
    }, [props.show]);

    const onAnimationEnd = () => {
        if (!props.show) setRender(false);
    };

    return shouldRender ? (
        <div
            className="sidefilter"
            style={{ animation: `${props.show ? 'fadeIn' : 'fadeOut'} .2s` }}
            onAnimationEnd={onAnimationEnd}>
            {props.children}
        </div>
    ) : null;
};

export default Fade;
