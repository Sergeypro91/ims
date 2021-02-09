import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { InstitutionsList } from '../institutions.types';
import { isResponseSuccessful } from '../../../api.utils';

const getInstitutionsList = async (params: APIGetListParams): Promise<InstitutionsList | null> => {
    let institutionsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/institutes`, { params })
        .then((response: APIListResponse<InstitutionsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) institutionsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return institutionsList;
};

export default getInstitutionsList;
