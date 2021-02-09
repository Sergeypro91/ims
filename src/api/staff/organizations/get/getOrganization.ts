import axios from 'axios';
import store from 'redux/store';
import { APIEntityResponse } from '../../../api.types';
import { Organization } from '../organizations.types';
import { isResponseSuccessful } from '../../../api.utils';

const getOrganization = async (uuid: string): Promise<Organization | null> => {
    let organization = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/organizations/${uuid}`)
        .then((response: APIEntityResponse<Organization>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) organization = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return organization;
};

export default getOrganization;
