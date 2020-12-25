import React, { memo } from 'react';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';

interface SecurityPostCentralToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const SecurityPostCentralToolbarInner = (props: SecurityPostCentralToolbarProps) => {
    return (
        <Toolbar>
            <section className="toolbar__section">
                <Buttons name="Filter" size="m" typical active={props.sideFilter} onPress={props.toggleSideFilter} />
            </section>

            <section className="toolbar__section">
                <Buttons name="LetIn" size="m" typical onPress={() => console.log('Click!')} />
                <Buttons name="Stop" size="m" typical onPress={() => console.log('Click!')} />
                <Buttons name="Control" size="m" typical onPress={() => console.log('Click!')} />
            </section>

            <section className="toolbar__section">
                <Buttons name="LetInMany" size="m" typical onPress={() => console.log('Click!')} />
                <Buttons name="LetInOne" size="m" typical onPress={() => console.log('Click!')} />
                <Buttons name="LetOutOne" size="m" typical onPress={() => console.log('Click!')} />
                <Buttons name="LetOutMany" size="m" typical onPress={() => console.log('Click!')} />
            </section>

            <section className="toolbar__section toolbar__section--alarm">
                <Buttons name="Bell" size="m" danger onPress={() => console.log('Click!')} />
                <Buttons name="BlockUnLock" size="m" danger onPress={() => console.log('Click!')} />
                <Buttons name="SecurityCall" size="m" danger onPress={() => console.log('Click!')} />
            </section>
        </Toolbar>
    );
};

export const SecurityPostCentralToolbar = memo(SecurityPostCentralToolbarInner);
