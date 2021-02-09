import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { EmployeesList } from '../employees.types';
import { isResponseSuccessful } from '../../../api.utils';

const getEmployeesList = async (params: APIGetListParams): Promise<EmployeesList | null> => {
    let employeesList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/employees`, { params })
        .then((response: APIListResponse<EmployeesList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) employeesList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return employeesList;
};

export default getEmployeesList;
