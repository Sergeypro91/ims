import axios from 'axios';
import store from 'redux/store';
import { APIResponse } from '../../../api.types';
// import { ExtendedEmployee } from '../employees.types';
import { isResponseSuccessful } from '../../../api.utils';

const getNewEmployeeNumber = async (): Promise<string | null> => {
    let number = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/employees/newemployeenumber`)
        .then((response: APIResponse<{ result: string }>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) number = response.data.payload.result;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return number;
};

export default getNewEmployeeNumber;
