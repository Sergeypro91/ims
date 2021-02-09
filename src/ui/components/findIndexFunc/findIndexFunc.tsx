export const findIndexFunc = (arr: any[], index: any, key: string) => {
    return arr.findIndex((elem) => {
        const searchingElem = arr.find((elem) => elem[key] === index);

        return elem === searchingElem;
    });
};
