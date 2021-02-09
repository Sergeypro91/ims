import axios from 'axios';
import store from 'redux/store';
import { APIEntityResponse } from '../../../api.types';
import { Department } from '../departments.types';
import { isResponseSuccessful } from '../../../api.utils';

const getDepartment = async (uuid: string): Promise<Department | null> => {
    let department = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/departments/${uuid}`)
        .then((response: APIEntityResponse<Department>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) department = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return department;
};

export default getDepartment;
