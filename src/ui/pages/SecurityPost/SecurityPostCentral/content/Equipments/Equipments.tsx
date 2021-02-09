import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { securityPostCentralClearDevices, requestDevices } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { Device } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { Loader } from 'assets/images/svgr/bx-loader-alt';
import { Equipment } from './Equipment/Equipment';
import './Equipments.scss';

const EquipmentsInner = () => {
    const dispatch = useDispatch();
    const { toggleBar, devices } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);
    const [enabledDevice, setEnabledDevice] = useState<Device[]>([]);

    useEffect(() => {
        dispatch(securityPostCentralClearDevices());
        dispatch(requestDevices());
    }, [dispatch]);

    useEffect(() => {
        setEnabledDevice([...devices.filter((item) => item.enabled), ...devices.filter((item) => !item.enabled)]);
        // setEnabledDevice(devices);
    }, [devices]);

    return (
        <CustomScrollbar trigger={toggleBar}>
            <>
                {enabledDevice.length > 0 ? (
                    <div className="equipments">
                        {enabledDevice.map((elem) => {
                            return <Equipment key={elem.uuid} device={elem} />;
                        })}

                        {/* Empty containers for flexbox alignment */}
                        <i aria-hidden="true" />
                        <i aria-hidden="true" />
                        <i aria-hidden="true" />
                        <i aria-hidden="true" />
                        <i aria-hidden="true" />
                    </div>
                ) : (
                    <div className="loader">
                        <Loader />
                    </div>
                )}
            </>
        </CustomScrollbar>
    );
};

export const Equipments = memo(EquipmentsInner);
