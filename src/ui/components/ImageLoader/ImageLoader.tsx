import React, { memo } from 'react';
import { ImageLoaderProps } from './imageLoaderType';
import './ImageLoader.scss';

const ImageLoaderInner = (props: ImageLoaderProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <label
            className="image-loader image-loader--btn"
            onClick={() => {
                if (props.onClick) props.onClick();
            }}
        >
            {props.withoutInput === false ||
                (!props.withoutInput && (
                    <input
                        type="file"
                        name={props.name}
                        onChange={handleChange}
                        className={`image-loader__input ${props.className ? props.className : ''}`}
                    />
                ))}

            <span className="image-loader__label">
                <div className="p--md--bold">{props.label}</div>
            </span>
        </label>
    );
};

export const ImageLoader = memo(ImageLoaderInner);
