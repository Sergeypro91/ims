import { History, LocationState } from 'history';

const openModal = (name: string, history: History<LocationState>) => {
    history.push(`${window.location.pathname}/${name}`);
};

export default openModal;
