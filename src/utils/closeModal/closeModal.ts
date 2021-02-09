import { History } from 'history';

const closeModal = (name: string, history: History<unknown>) => {
    history.push(window.location.pathname.replace(`/${name}`, ''));
};

export default closeModal;
