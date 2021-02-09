import axios from 'axios';
import store from 'redux/store';
import { APIEntityResponse } from '../../../api.types';
import { Position } from '../positions.types';
import { isResponseSuccessful } from '../../../api.utils';

const getPosition = async (uuid: string): Promise<Position | null> => {
    let position = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/positions/${uuid}`)
        .then((response: APIEntityResponse<Position>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) position = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return position;
};

export default getPosition;
