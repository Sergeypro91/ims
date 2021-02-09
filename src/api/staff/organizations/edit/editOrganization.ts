import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';
import { EditOrganiationParams } from '../organizations.types';

const editOrganization = async (params: EditOrganiationParams): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .put(
            `${store.getState().app.config.apiUrl}/core/organizations/${params.organizationUuid}`,
            params
        )
        .then((response: APIResponse) => {
            if (isResponseSuccessful(response)) {
                successful = true;
                rowUuid = response.data.payload.result;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return { successful, rowUuid };
};

export default editOrganization;
