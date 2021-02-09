import axios from 'axios';
import store from 'redux/store';
import { Dispatch } from 'react';
import {
    IdentifiersRfidEvents,
    IdentifiersRfidActions,
    TableItem,
    ReservedKeys,
    Cardreader,
    Cardreaders,
    Port,
    Ports,
    GET_IDENTIFIERS_RFID_EVENTS,
    IDENTIFIERS_RFID_SELECTED_ROW,
    IDENTIFIERS_RFID_TOGGLE_SIDEBAR,
    IDENTIFIERS_RFID_TOGGLE_BAR,
    IDENTIFIERS_RFID_SIDE_FILTER,
    IDENTIFIERS_RFID_KEY,
    IDENTIFIERS_RFID_CARDREADER,
    GET_IDENTIFIERS_CARDREADERS,
    IDENTIFIERS_RFID_PORT,
    IDENTIFIERS_RFID_PORTS,
    GET_IDENTIFIERS_RESERVED_KEY
} from './identifiersRfidTypes';

export const getIdentifiersRfidEvents = (
    eventsList: IdentifiersRfidEvents
): IdentifiersRfidActions => {
    return {
        type: GET_IDENTIFIERS_RFID_EVENTS,
        payload: eventsList
    };
};

export const identifiersRfidSelectedRow = (payload: TableItem): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_SELECTED_ROW,
        payload
    };
};

export const identifiersRfidToggleSidebar = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_TOGGLE_SIDEBAR
});

export const identifiersRfidToggleBar = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_TOGGLE_BAR
});

export const identifiersRfidToggleSideFilter = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_SIDE_FILTER
});

export const identifiersRfidKey = (payload: string): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_KEY,
        payload
    };
};

export const identifiersRfidReader = (cardreader: Cardreader): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_CARDREADER,
        payload: cardreader
    };
};

export const identifiersRfidPort = (port: Port): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_PORT,
        payload: port
    };
};

export const identifiersRfidPorts = (ports: Ports): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_PORTS,
        payload: ports
    };
};

export const getIdentifiersRfidReservedKey = (
    reservedKeys: ReservedKeys
): IdentifiersRfidActions => {
    return {
        type: GET_IDENTIFIERS_RESERVED_KEY,
        payload: reservedKeys
    };
};

export const getIdentifiersRfidCardreaders = (cardreaders: Cardreaders): IdentifiersRfidActions => {
    return {
        type: GET_IDENTIFIERS_CARDREADERS,
        payload: cardreaders
    };
};

export const requestIdentifiersRfidEvents = () => async (
    dispatch: Dispatch<IdentifiersRfidActions>
) => {
    try {
        const res = await axios.get(
            `${store.getState().app.config.apiUrl}/monitoring/base/online?count=100`
        );
        dispatch(getIdentifiersRfidEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};

export const requestIdentifiersRfidReservedKey = () => async (
    dispatch: Dispatch<IdentifiersRfidActions>
) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/identificators/reserved`)
        .then((response) => {
            dispatch(getIdentifiersRfidReservedKey(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestIdentifiersRfidCardreaders = () => async (
    dispatch: Dispatch<IdentifiersRfidActions>
) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices/cardreaders`)
        .then((response) => {
            dispatch(getIdentifiersRfidCardreaders(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestIdentifiersRfidCardreaderInit = () => async (
    dispatch: Dispatch<
        | IdentifiersRfidActions
        | Dispatch<
              Dispatch<
                  | IdentifiersRfidActions
                  | Dispatch<
                        Dispatch<
                            IdentifiersRfidActions | Dispatch<Dispatch<IdentifiersRfidActions>>
                        >
                    >
              >
          >
    >
) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/devices/cardreaders/init`)
        .then((response) => {
            if (response.data.code === 0) {
                dispatch(requestIdentifiersRfidCardreaderPorts());
            } else if (response.data.code === 1) {
                console.error('ERROR: Init is false');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestIdentifiersRfidCardreaderPorts = () => async (
    dispatch: Dispatch<
        | IdentifiersRfidActions
        | Dispatch<Dispatch<IdentifiersRfidActions | Dispatch<Dispatch<IdentifiersRfidActions>>>>
    >
) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/devices/cardreaders/exec`, { cmd: 'getPorts' })
        .then((response) => {
            if (response.data.code === 0) {
                dispatch(identifiersRfidPorts(response.data.payload.items));
                dispatch(requestIdentifiersRfidCardreaderConnect(response.data.payload.items));
            } else if (response.data.code === 1) {
                console.error('ERROR: Ports not received');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestIdentifiersRfidCardreaderConnect = (port: Port) => async (
    dispatch: Dispatch<IdentifiersRfidActions | Dispatch<Dispatch<IdentifiersRfidActions>>>
) => {
    const identifierConnectionObj = {
        cmd: 'connect',
        port: port.name
    };

    axios
        .post(
            `${store.getState().app.config.apiUrl}/devices/cardreaders/exec`,
            identifierConnectionObj
        )
        .then((response) => {
            if (response.data.code === 0) {
                const autoRead = {
                    cmd: 'setAutoReadMode'
                };

                dispatch(requestIdentifiersRfidCardreaderAutoreadMode(autoRead));
                console.warn('SUCCESS: Connection has confirmed');
            } else if (response.data.code === 1) {
                console.error('ERROR: Connection was denied');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestIdentifiersRfidCardreaderAutoreadMode = (autoRead: { cmd: string }) => async (
    dispatch: Dispatch<IdentifiersRfidActions>
) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/devices/cardreaders/exec`, autoRead)
        .then((response) => {
            if (response.data.code === 0) {
                console.warn('SUCCESS: AutoreadMode is ON');
            } else if (response.data.code === 1) {
                console.error('ERROR:  Failed to switch on "autoreadMode"');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
