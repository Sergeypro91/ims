import axios from 'axios';
import store from 'redux/store';
import { APIEntityResponse } from '../../../api.types';
import { ExtendedEmployee } from '../employees.types';
import { isResponseSuccessful } from '../../../api.utils';

const getEmployee = async (uuid: string): Promise<ExtendedEmployee | null> => {
    let employee = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/employees/${uuid}`)
        .then((response: APIEntityResponse<ExtendedEmployee>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) employee = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return employee;
};

export default getEmployee;
