const isDev = (): boolean => {
    if (process.env.NODE_ENV === 'development') {
        return true;
    }
    return false;
};

export default isDev;
