import React, { memo } from 'react';

const LayersInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M22,7.999c0-0.363-0.197-0.697-0.516-0.874l-9.022-5c-0.301-0.166-0.667-0.166-0.968,0l-8.978,4.96 C2.198,7.261,2.001,7.595,2,7.958C1.999,8.32,2.195,8.656,2.513,8.833l9.022,5.04C11.687,13.958,11.854,14,12.022,14 s0.335-0.042,0.486-0.126l8.978-5C21.804,8.697,22,8.362,22,7.999z M12.023,11.854L5.06,7.965l6.917-3.822l6.964,3.859 L12.023,11.854z" />
            <path d="M20.515,11.126L12,15.856l-8.515-4.73l-0.971,1.748l9,5C11.665,17.958,11.833,18,12,18s0.335-0.042,0.485-0.126l9-5 L20.515,11.126z" />
            <path d="M20.515,15.126L12,19.856l-8.515-4.73l-0.971,1.748l9,5C11.665,21.958,11.833,22,12,22s0.335-0.042,0.485-0.126l9-5 L20.515,15.126z" />
        </svg>
    );
};

export const Layers = memo(LayersInner);
