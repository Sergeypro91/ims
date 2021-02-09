import React, { FC } from 'react';
import './Toolbar.scss';

const Toolbar: FC = (props) => <div className="toolbar">{props.children}</div>;

export default Toolbar;
