import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';
import { AddGroupParams } from '../groups.types';

const addGroup = async (params: AddGroupParams): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .post(`${store.getState().app.config.apiUrl}/core/teachgroups`, params)
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

export default addGroup;
