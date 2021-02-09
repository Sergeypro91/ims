import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { EducationDepartmentsList } from '../departments.types';
import { isResponseSuccessful } from '../../../api.utils';

const getEducationDepartmentsList = async (params: APIGetListParams): Promise<EducationDepartmentsList | null> => {
    let educationDepartmentsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/tribunes`, { params })
        .then((response: APIListResponse<EducationDepartmentsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) educationDepartmentsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return educationDepartmentsList;
};

export default getEducationDepartmentsList;
