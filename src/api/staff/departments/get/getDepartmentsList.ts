import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { DepartmentsList } from '../departments.types';
import { isResponseSuccessful } from '../../../api.utils';

const getDepartmentsList = async (params: APIGetListParams): Promise<DepartmentsList | null> => {
    let departmentsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/departments`, { params })
        .then((response: APIListResponse<DepartmentsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) departmentsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return departmentsList;
};

export default getDepartmentsList;
