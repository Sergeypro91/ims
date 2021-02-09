import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { OrganizationsList } from '../organizations.types';
import { isResponseSuccessful } from '../../../api.utils';

const getOrganizationsList = async (
    params: APIGetListParams
): Promise<OrganizationsList | null> => {
    let organizationsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/organizations`, { params })
        .then((response: APIListResponse<OrganizationsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) organizationsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return organizationsList;
};

export default getOrganizationsList;
