import React, { useEffect, useState, memo } from 'react';
import { FadeProps } from './fadeType';
import './Fade.scss';

const FadeInner = (props: FadeProps) => {
    const [shouldRender, setRender] = useState(props.show);

    useEffect(() => {
        if (props.show) setRender(true);
    }, [props.show]);

    const onAnimationEnd = () => {
        if (!props.show) setRender(false);
    };

    return shouldRender ? (
        <div style={{ animation: `${props.show ? 'fadeIn' : 'fadeOut'} .2s` }} onAnimationEnd={onAnimationEnd}>
            {props.children ? props.children : null}
        </div>
    ) : null;
};

export const Fade = memo(FadeInner);
