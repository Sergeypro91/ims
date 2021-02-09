import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';

const restoreDepartment = async (uuid: string): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .put(`${store.getState().app.config.apiUrl}/core/departments/${uuid}/restore`)
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

export default restoreDepartment;
