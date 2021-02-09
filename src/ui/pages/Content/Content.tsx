import React, { FC } from 'react';
import Header from 'ui/components/Header/Header';
import { SideNav } from 'ui/components/SideNav/SideNav';
import './Content.scss';

const Content: FC = (props) => {
    const { children } = props;

    return (
        <div className="wrapper">
            <Header />

            <main className="content">
                <SideNav />
                {children}
            </main>
        </div>
    );
};

export default Content;
