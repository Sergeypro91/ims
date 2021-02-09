import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';
import { EditGroupParams } from '../groups.types';

const editGroup = async (params: EditGroupParams): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .put(`${store.getState().app.config.apiUrl}/core/teachgroups/${params.departmentUuid}`, params)
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

export default editGroup;
