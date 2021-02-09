import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { FacultiesList } from '../faculties.types';
import { isResponseSuccessful } from '../../../api.utils';

const getFacultiesList = async (params: APIGetListParams): Promise<FacultiesList | null> => {
    let facultiesList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/faculties`, { params })
        .then((response: APIListResponse<FacultiesList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) facultiesList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return facultiesList;
};

export default getFacultiesList;
