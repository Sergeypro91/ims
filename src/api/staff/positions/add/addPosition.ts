import axios from 'axios';
import store from 'redux/store';
import { ActionStatus, APIResponse } from '../../../api.types';
import { isResponseSuccessful } from '../../../api.utils';
import { AddPositionParams } from '../positions.types';

const addPosition = async (params: AddPositionParams): Promise<ActionStatus> => {
    let successful = false;
    let rowUuid = '';

    await axios
        .post(`${store.getState().app.config.apiUrl}/core/positions`, params)
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

export default addPosition;
