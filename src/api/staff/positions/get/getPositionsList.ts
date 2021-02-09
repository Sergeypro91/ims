import axios from 'axios';
import store from 'redux/store';
import { APIGetListParams, APIListResponse } from '../../../api.types';
import { PositionsList } from '../positions.types';
import { isResponseSuccessful } from '../../../api.utils';

const getPositionsList = async (params: APIGetListParams): Promise<PositionsList | null> => {
    let positionsList = null;

    await axios
        .get(`${store.getState().app.config.apiUrl}/core/positions`, { params })
        .then((response: APIListResponse<PositionsList>) => {
            if (isResponseSuccessful(response)) {
                if (response.data.payload) positionsList = response.data.payload.data;
            } else {
                console.error(response.data.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return positionsList;
};

export default getPositionsList;
